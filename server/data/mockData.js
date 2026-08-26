// Mock in-memory database store when MongoDB is not running locally
const frontendData = require('../seeders/frontendDataRaw');

let isInMemoryMode = false;
let mockUsers = [
  {
    _id: 'demo-user-123',
    name: 'Shubham Kumar',
    email: 'demo@pathforge.com',
    password_hash: '$2a$10$wE9...mock',
    experience_level: 'beginner',
    goal: 'job',
    time_commitment: '1hr',
    onboarding_completed: true
  }
];

let mockPaths = [];
let mockModules = [];
let mockLessons = [];
let mockProgress = [];
let mockStreaks = [{
  user_id: 'demo-user-123',
  current_streak: 5,
  longest_streak: 5,
  last_activity_date: new Date(),
  activity_dates: [new Date().toISOString().split('T')[0]]
}];

const extraPaths = require('./extraCoursesData');

function initInMemoryDB() {
  isInMemoryMode = true;
  console.log('⚡ Initializing SkillPath In-Memory Data Store (All Paths Loaded)...');

  // Load Frontend Development Path
  const mainPath = {
    _id: 'path-frontend-123',
    title: 'Frontend Development',
    slug: 'frontend-development',
    description: 'Master HTML, CSS, JavaScript, Git, React, APIs, and Deployment to become a job-ready frontend engineer.',
    icon: 'Code',
    total_lessons: 67,
    estimated_hours: 35,
    is_published: true
  };

  mockPaths = [mainPath];
  mockModules = [];
  mockLessons = [];

  frontendData.modules.forEach((modData, mIdx) => {
    const modId = `mod-${mIdx + 1}`;
    const { lessons, ...modInfo } = modData;

    mockModules.push({
      _id: modId,
      path_id: mainPath._id,
      ...modInfo
    });

    lessons.forEach((lData, lIdx) => {
      mockLessons.push({
        _id: `lesson-${mIdx + 1}-${lIdx + 1}`,
        module_id: modId,
        ...lData
      });
    });
  });

  // Load Extra Paths (React patterns, Neural networks, Graph algorithms)
  extraPaths.forEach((extra) => {
    mockPaths.push(extra.path);
    extra.modules.forEach((mod) => {
      const { lessons, ...modInfo } = mod;
      mockModules.push({
        ...modInfo,
        path_id: extra.path._id
      });
      lessons.forEach((les) => {
        mockLessons.push({
          ...les,
          module_id: mod._id
        });
      });
    });
  });

  console.log(`✅ In-Memory Data Store initialized with ${mockPaths.length} paths, ${mockModules.length} modules, and ${mockLessons.length} lessons!`);
}

module.exports = {
  get isInMemory() { return isInMemoryMode; },
  initInMemoryDB,
  mockUsers,
  get mockPath() { return mockPaths[0]; },
  get mockPaths() { return mockPaths; },
  mockModules,
  mockLessons,
  mockProgress,
  mockStreaks
};
