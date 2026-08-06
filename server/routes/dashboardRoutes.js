const express = require('express');
const router = express.Router();
const Path = require('../models/Path');
const Module = require('../models/Module');
const Lesson = require('../models/Lesson');
const Progress = require('../models/Progress');
const Streak = require('../models/Streak');
const { protect } = require('../middleware/authMiddleware');
const mockData = require('../data/mockData');

// @route   GET /api/dashboard
router.get('/', protect, async (req, res) => {
  try {
    const userId = req.user._id;

    if (mockData.isInMemory) {
      const userProgress = mockData.mockProgress.filter(p => p.user_id.toString() === userId.toString() && p.is_completed);
      const completedLessonIds = userProgress.map(p => p.lesson_id);
      const completedCount = completedLessonIds.length;
      const totalLessons = 67;
      const overallProgress = Math.round((completedCount / totalLessons) * 100);

      const streakRecord = mockData.mockStreaks.find(s => s.user_id.toString() === userId.toString());
      const currentStreak = streakRecord ? streakRecord.current_streak : 1;

      let currentLesson = null;
      let currentModule = null;
      let recommendedNext = null;

      const uncompleted = mockData.mockLessons.find(l => !completedLessonIds.includes(l._id));

      if (uncompleted) {
        currentLesson = uncompleted;
        currentModule = mockData.mockModules.find(m => m._id === uncompleted.module_id);
        const nextIdx = mockData.mockLessons.findIndex(l => l._id === uncompleted._id) + 1;
        recommendedNext = mockData.mockLessons[nextIdx] || null;
      } else {
        currentLesson = mockData.mockLessons[0];
        currentModule = mockData.mockModules[0];
        recommendedNext = mockData.mockLessons[1];
      }

      const recentlyCompletedLessons = mockData.mockLessons.filter(l => completedLessonIds.slice(0, 3).includes(l._id));

      return res.json({
        user: {
          name: req.user.name,
          email: req.user.email,
          experience_level: req.user.experience_level || 'beginner',
          goal: req.user.goal || 'job',
          time_commitment: req.user.time_commitment || '1hr'
        },
        path: {
          title: 'Frontend Development',
          slug: 'frontend-development',
          total_lessons: 67
        },
        stats: {
          overall_progress: overallProgress,
          lessons_completed: completedCount,
          total_lessons: totalLessons,
          time_spent_minutes: completedCount * 20,
          current_streak: currentStreak
        },
        continue_learning: currentLesson ? {
          lesson_id: currentLesson._id,
          lesson_title: currentLesson.title,
          module_title: currentModule ? currentModule.title : '',
          module_id: currentModule ? currentModule._id : '',
          duration_minutes: currentLesson.duration_minutes
        } : null,
        recently_completed: recentlyCompletedLessons.map(l => ({
          _id: l._id,
          title: l.title,
          duration_minutes: l.duration_minutes
        })),
        recommended_next: recommendedNext ? {
          _id: recommendedNext._id,
          title: recommendedNext.title,
          duration_minutes: recommendedNext.duration_minutes
        } : null
      });
    }

    // Mongoose mode
    const frontendPath = await Path.findOne({ slug: 'frontend-development' });
    if (!frontendPath) {
      return res.status(404).json({ error: 'Frontend Development path not found.' });
    }

    const completedProgress = await Progress.find({ user_id: userId, path_id: frontendPath._id, is_completed: true }).sort({ completed_at: -1 });
    const completedLessonIds = completedProgress.map(p => p.lesson_id.toString());
    const totalLessons = frontendPath.total_lessons || 67;
    const completedCount = completedLessonIds.length;
    const overallProgress = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

    let streakRecord = await Streak.findOne({ user_id: userId });
    const currentStreak = streakRecord ? streakRecord.current_streak : 1;

    const modules = await Module.find({ path_id: frontendPath._id }).sort({ order: 1 });
    const moduleIds = modules.map(m => m._id);
    const allLessons = await Lesson.find({ module_id: { $in: moduleIds } }).sort({ order: 1 });

    let currentLesson = null;
    let currentModule = null;
    let recommendedNext = null;

    const nextUncompleted = allLessons.find(l => !completedLessonIds.includes(l._id.toString()));

    if (nextUncompleted) {
      currentLesson = nextUncompleted;
      currentModule = modules.find(m => m._id.toString() === nextUncompleted.module_id.toString());
      const nextIndex = allLessons.findIndex(l => l._id.toString() === nextUncompleted._id.toString());
      recommendedNext = allLessons[nextIndex + 1] || null;
    } else {
      currentLesson = allLessons[0];
      currentModule = modules[0];
      recommendedNext = allLessons[1];
    }

    const recentCompletedIds = completedProgress.slice(0, 3).map(p => p.lesson_id);
    const recentlyCompletedLessons = await Lesson.find({ _id: { $in: recentCompletedIds } });

    res.json({
      user: {
        name: req.user.name,
        email: req.user.email,
        experience_level: req.user.experience_level,
        goal: req.user.goal,
        time_commitment: req.user.time_commitment
      },
      path: {
        title: frontendPath.title,
        slug: frontendPath.slug,
        total_lessons: totalLessons
      },
      stats: {
        overall_progress: overallProgress,
        lessons_completed: completedCount,
        total_lessons: totalLessons,
        time_spent_minutes: completedCount * 20,
        current_streak: currentStreak
      },
      continue_learning: currentLesson ? {
        lesson_id: currentLesson._id,
        lesson_title: currentLesson.title,
        module_title: currentModule ? currentModule.title : '',
        module_id: currentModule ? currentModule._id : '',
        duration_minutes: currentLesson.duration_minutes
      } : null,
      recently_completed: recentlyCompletedLessons.map(l => ({
        _id: l._id,
        title: l.title,
        duration_minutes: l.duration_minutes
      })),
      recommended_next: recommendedNext ? {
        _id: recommendedNext._id,
        title: recommendedNext.title,
        duration_minutes: recommendedNext.duration_minutes
      } : null
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
