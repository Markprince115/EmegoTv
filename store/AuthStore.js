// create auth store using zustand
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const useAuthStore = create(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        token: null,
        isLoading: false,
        error: null,

        setUser: (user) => set({ user }),
        setToken: (token) => set({ token }),
        setIsLoading: (isLoading) => set({ isLoading }),
        setError: (error) => set({ error }),

        login: async (email, password) => {
          set({ isLoading: true, error: null });
          try {
            const { data } = await api.post('/auth/login', {
              email,
              password,
            });

            set({ 
              user: data.user, 
              token: data.token, 
              isLoading: false 
            });
            
            // Set token in localStorage and axios defaults
            localStorage.setItem('token', data.token);
            api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            
            return data;
          } catch (error) {
            const errorMessage = error.response?.data?.error || error.message || 'Login failed';
            set({ error: errorMessage, isLoading: false });
            throw new Error(errorMessage);
          }
        },

        logout: () => {
          localStorage.removeItem('token');
          delete api.defaults.headers.common['Authorization'];
          set({ user: null, token: null });
        },

        fetchUserFromToken: async () => {
          const token = localStorage.getItem('token');
          if (!token) return;

          set({ isLoading: true, error: null });
          try {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const { data: user } = await api.get('/auth/me');
            
            if (user) {
              set({ user, token, isLoading: false });
            } else {
              throw new Error('Invalid token');
            }
          } catch (error) {
            const errorMessage = error.response?.data?.error || error.message || 'Failed to fetch user';
            set({ error: errorMessage, isLoading: false });
            localStorage.removeItem('token');
            delete api.defaults.headers.common['Authorization'];
          }
        },

        initialize: async () => {
          const token = localStorage.getItem('token');
          if (token) {
            get().fetchUserFromToken();
          }
        },
      }),
      {
        name: 'auth-storage',
        partialize: (state) => ({ token: state.token }),
      }
    )
  )
);

export default useAuthStore;