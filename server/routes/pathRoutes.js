const express = require('express');
const router = express.Router();
const Path = require('../models/Path');
const Module = require('../models/Module');
const Lesson = require('../models/Lesson');
const Progress = require('../models/Progress');
const { protect } = require('../middleware/authMiddleware');
const mockData = require('../data/mockData');

// @route   GET /api/paths
router.get('/', async (req, res) => {
  try {
    if (mockData.isInMemory) {
      return res.json([mockData.mockPath]);
    }
    const paths = await Path.find({ is_published: true });
    res.json(paths);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   GET /api/paths/:slug
router.get('/:slug', async (req, res) => {
  try {
    if (mockData.isInMemory) {
      const path = mockData.mockPath;
      const modules = mockData.mockModules.map(mod => ({
        ...mod,
        lessons: mockData.mockLessons.filter(l => l.module_id === mod._id)
      }));
      return res.json({ path, modules });
    }

    const path = await Path.findOne({ slug: req.params.slug });
    if (!path) return res.status(404).json({ error: 'Learning path not found' });

    const modules = await Module.find({ path_id: path._id }).sort({ order: 1 });
    const moduleIds = modules.map(m => m._id);
    const lessons = await Lesson.find({ module_id: { $in: moduleIds } }).sort({ order: 1 });

    const modulesWithLessons = modules.map(mod => ({
      ...mod.toObject(),
      lessons: lessons.filter(l => l.module_id.toString() === mod._id.toString())
    }));

    res.json({ path, modules: modulesWithLessons });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   GET /api/paths/:slug/progress
router.get('/:slug/progress', protect, async (req, res) => {
  try {
    if (mockData.isInMemory) {
      const userProg = mockData.mockProgress.filter(p => p.user_id.toString() === req.user._id.toString() && p.is_completed);
      const completedIds = userProg.map(p => p.lesson_id);
      return res.json({
        path_id: mockData.mockPath._id,
        total_lessons: 67,
        completed_lessons_count: completedIds.length,
        percentage: Math.round((completedIds.length / 67) * 100),
        completed_lesson_ids: completedIds
      });
    }

    const path = await Path.findOne({ slug: req.params.slug });
    if (!path) return res.status(404).json({ error: 'Learning path not found' });

    const completedProgress = await Progress.find({
      user_id: req.user._id,
      path_id: path._id,
      is_completed: true
    });

    const completedLessonIds = completedProgress.map(p => p.lesson_id.toString());

    res.json({
      path_id: path._id,
      total_lessons: path.total_lessons,
      completed_lessons_count: completedLessonIds.length,
      percentage: path.total_lessons > 0 ? Math.round((completedLessonIds.length / path.total_lessons) * 100) : 0,
      completed_lesson_ids: completedLessonIds
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
