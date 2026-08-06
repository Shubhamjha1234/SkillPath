import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('skillpath_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('skillpath_token');
    if (token) {
      api.get('/auth/me')
        .then(res => {
          setUser(res.data);
          localStorage.setItem('skillpath_user', JSON.stringify(res.data));
        })
        .catch(() => {
          logout();
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const res = await api.post('/auth/login', { email, password });
    localStorage.setItem('skillpath_token', res.data.token);
    localStorage.setItem('skillpath_user', JSON.stringify(res.data));
    setUser(res.data);
    return res.data;
  };

  const register = async (name, email, password) => {
    const res = await api.post('/auth/register', { name, email, password });
    localStorage.setItem('skillpath_token', res.data.token);
    localStorage.setItem('skillpath_user', JSON.stringify(res.data));
    setUser(res.data);
    return res.data;
  };

  const updateOnboarding = async (onboardingData) => {
    const res = await api.put('/auth/onboarding', onboardingData);
    setUser(res.data);
    localStorage.setItem('skillpath_user', JSON.stringify(res.data));
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem('skillpath_token');
    localStorage.removeItem('skillpath_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, updateOnboarding, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
