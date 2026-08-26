const express = require('express');
const router = express.Router();
const Lesson = require('../models/Lesson');
const Module = require('../models/Module');
const Progress = require('../models/Progress');
const Streak = require('../models/Streak');
const Path = require('../models/Path');
const { protect } = require('../middleware/authMiddleware');
const mockData = require('../data/mockData');

// @route   GET /api/lessons/:id
router.get('/:id', async (req, res) => {
  try {
    if (mockData.isInMemory) {
      const lesson = mockData.mockLessons.find(l => l._id === req.params.id);
      if (!lesson) return res.status(404).json({ error: 'Lesson not found' });

      const module = mockData.mockModules.find(m => m._id === lesson.module_id);
      const siblings = mockData.mockLessons.filter(l => l.module_id === lesson.module_id);
      const path = mockData.mockPaths.find(p => p._id === module.path_id);

      const allModulesOfPath = mockData.mockModules
        .filter(m => m.path_id === path._id)
        .sort((a, b) => a.order - b.order)
        .map(m => ({
          ...m,
          lessons: mockData.mockLessons
            .filter(l => l.module_id === m._id)
            .sort((a, b) => a.order - b.order)
        }));

      const currentIndex = siblings.findIndex(l => l._id === lesson._id);
      const prevLesson = currentIndex > 0 ? siblings[currentIndex - 1] : null;
      const nextLesson = currentIndex < siblings.length - 1 ? siblings[currentIndex + 1] : null;

      return res.json({
        lesson,
        module,
        path,
        siblings,
        prev_lesson: prevLesson ? { _id: prevLesson._id, title: prevLesson.title } : null,
        next_lesson: nextLesson ? { _id: nextLesson._id, title: nextLesson.title } : null,
        modules: allModulesOfPath,
        path_slug: path ? path.slug : 'frontend-development',
        path_title: path ? path.title : 'Frontend Development'
      });
    }

    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) return res.status(404).json({ error: 'Lesson not found' });

    const module = await Module.findById(lesson.module_id);
    const path = await Path.findById(module.path_id);
    const siblings = await Lesson.find({ module_id: lesson.module_id }).sort({ order: 1 });

    const modules = await Module.find({ path_id: path._id }).sort({ order: 1 });
    const moduleIds = modules.map(m => m._id);
    const allLessons = await Lesson.find({ module_id: { $in: moduleIds } }).sort({ order: 1 });

    const modulesWithLessons = modules.map(m => ({
      ...m.toObject(),
      lessons: allLessons.filter(l => l.module_id.toString() === m._id.toString())
    }));

    const currentIndex = siblings.findIndex(l => l._id.toString() === lesson._id.toString());
    const prevLesson = currentIndex > 0 ? siblings[currentIndex - 1] : null;
    const nextLesson = currentIndex < siblings.length - 1 ? siblings[currentIndex + 1] : null;

    res.json({
      lesson,
      module,
      path,
      siblings,
      prev_lesson: prevLesson ? { _id: prevLesson._id, title: prevLesson.title } : null,
      next_lesson: nextLesson ? { _id: nextLesson._id, title: nextLesson.title } : null,
      modules: modulesWithLessons,
      path_slug: path ? path.slug : 'frontend-development',
      path_title: path ? path.title : 'Frontend Development'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   POST /api/lessons/:id/complete
router.post('/:id/complete', protect, async (req, res) => {
  try {
    if (mockData.isInMemory) {
      const lesson = mockData.mockLessons.find(l => l._id === req.params.id);
      if (!lesson) return res.status(404).json({ error: 'Lesson not found' });

      const module = mockData.mockModules.find(m => m._id === lesson.module_id);
      const pathId = module ? module.path_id : 'demo-path';

      const existingIndex = mockData.mockProgress.findIndex(p => p.user_id === req.user._id && p.lesson_id === lesson._id);
      if (existingIndex === -1) {
        mockData.mockProgress.push({
          user_id: req.user._id,
          lesson_id: lesson._id,
          module_id: lesson.module_id,
          path_id: pathId,
          is_completed: true,
          completed_at: new Date()
        });
      }

      let streak = mockData.mockStreaks.find(s => s.user_id === req.user._id);
      if (!streak) {
        streak = { user_id: req.user._id, current_streak: 1, longest_streak: 1 };
        mockData.mockStreaks.push(streak);
      } else {
        streak.current_streak += 1;
      }

      return res.json({ message: 'Lesson marked as complete', streak: streak.current_streak });
    }

    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) return res.status(404).json({ error: 'Lesson not found' });

    const module = await Module.findById(lesson.module_id);
    const existing = await Progress.findOne({ user_id: req.user._id, lesson_id: lesson._id });

    if (!existing) {
      await Progress.create({
        user_id: req.user._id,
        lesson_id: lesson._id,
        module_id: module._id,
        path_id: module.path_id,
        is_completed: true
      });
    }

    let streak = await Streak.findOne({ user_id: req.user._id });
    if (!streak) {
      streak = await Streak.create({ user_id: req.user._id, current_streak: 1, longest_streak: 1 });
    } else {
      streak.current_streak += 1;
      await streak.save();
    }

    res.json({ message: 'Lesson marked as complete', streak: streak.current_streak });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   DELETE /api/lessons/:id/complete
router.delete('/:id/complete', protect, async (req, res) => {
  try {
    if (mockData.isInMemory) {
      const idx = mockData.mockProgress.findIndex(p => p.user_id === req.user._id && p.lesson_id === req.params.id);
      if (idx !== -1) mockData.mockProgress.splice(idx, 1);
      return res.json({ message: 'Lesson completion removed' });
    }

    await Progress.findOneAndDelete({ user_id: req.user._id, lesson_id: req.params.id });
    res.json({ message: 'Lesson completion removed' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
