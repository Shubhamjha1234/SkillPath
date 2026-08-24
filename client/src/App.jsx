import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthContext';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileNav from './components/layout/MobileNav';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import LearningPathsPage from './pages/LearningPathsPage';
import RoadmapPage from './pages/RoadmapPage';
import LessonPage from './pages/LessonPage';
import ProfilePage from './pages/ProfilePage';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  const location = useLocation();
  const isWorkspaceLayout =
    location.pathname === '/dashboard' ||
    location.pathname === '/learning-paths' ||
    location.pathname === '/profile' ||
    location.pathname.startsWith('/roadmap');

  return (
    <div className="flex flex-col min-h-screen pb-16 md:pb-0">
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      {!isWorkspaceLayout && <Navbar />}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/onboarding"
            element={
              <ProtectedRoute>
                <OnboardingPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/learning-paths"
            element={
              <ProtectedRoute>
                <LearningPathsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/community"
            element={
              <ProtectedRoute>
                <LearningPathsPage />
              </ProtectedRoute>
            }
          />

          <Route path="/roadmap" element={<Navigate to="/roadmap/frontend-development" replace />} />
          <Route path="/roadmap/:slug" element={<RoadmapPage />} />
          <Route path="/lesson/:id" element={<LessonPage />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {!isWorkspaceLayout && <Footer />}
      {!isWorkspaceLayout && <MobileNav />}
    </div>
  );
}
