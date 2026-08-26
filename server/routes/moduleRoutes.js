const express = require('express');
const router = express.Router();
const Module = require('../models/Module');
const Lesson = require('../models/Lesson');
const Progress = require('../models/Progress');
const Path = require('../models/Path');
const { protect } = require('../middleware/authMiddleware');
const mockData = require('../data/mockData');

// @route   GET /api/modules/:id
router.get('/:id', async (req, res) => {
  try {
    if (mockData.isInMemory) {
      const module = mockData.mockModules.find(m => m._id === req.params.id);
      if (!module) return res.status(404).json({ error: 'Module not found' });
      const lessons = mockData.mockLessons.filter(l => l.module_id === module._id);
      const path = mockData.mockPaths.find(p => p._id === module.path_id);
      const path_slug = path ? path.slug : 'frontend-development';
      return res.json({ module, lessons, path_slug });
    }

    const module = await Module.findById(req.params.id);
    if (!module) return res.status(404).json({ error: 'Module not found' });

    const path = await Path.findById(module.path_id);
    const path_slug = path ? path.slug : 'frontend-development';

    const lessons = await Lesson.find({ module_id: module._id }).sort({ order: 1 });
    res.json({ module, lessons, path_slug });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   GET /api/modules/:id/progress
router.get('/:id/progress', protect, async (req, res) => {
  try {
    if (mockData.isInMemory) {
      const module = mockData.mockModules.find(m => m._id === req.params.id);
      if (!module) return res.status(404).json({ error: 'Module not found' });
      const completed = mockData.mockProgress.filter(p => p.user_id.toString() === req.user._id.toString() && p.module_id === module._id && p.is_completed);
      const completedIds = completed.map(p => p.lesson_id);
      return res.json({
        module_id: module._id,
        total_lessons: module.total_lessons || 10,
        completed_count: completedIds.length,
        percentage: Math.round((completedIds.length / (module.total_lessons || 10)) * 100),
        completed_lesson_ids: completedIds
      });
    }

    const module = await Module.findById(req.params.id);
    if (!module) return res.status(404).json({ error: 'Module not found' });

    const completed = await Progress.find({ user_id: req.user._id, module_id: module._id, is_completed: true });
    const completedIds = completed.map(p => p.lesson_id.toString());

    res.json({
      module_id: module._id,
      total_lessons: module.total_lessons,
      completed_count: completedIds.length,
      percentage: module.total_lessons > 0 ? Math.round((completedIds.length / module.total_lessons) * 100) : 0,
      completed_lesson_ids: completedIds
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
