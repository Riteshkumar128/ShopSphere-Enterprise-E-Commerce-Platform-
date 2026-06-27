import axios from 'axios';
import { store } from '../app/store';
import { logout, setAccessToken } from '../app/authSlice';

const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: apiBase,
});

api.interceptors.request.use((config) => {
  const token = store.getState().auth.accessToken;
  if (token) {
    config.headers.Authorization = `******;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401 && !error.config?._retry) {
      const refreshToken = store.getState().auth.refreshToken;
      if (!refreshToken) {
        store.dispatch(logout());
        return Promise.reject(error);
      }

      error.config._retry = true;
      try {
        const { data } = await axios.post(`${apiBase}/auth/refresh`, { refreshToken });
        store.dispatch(setAccessToken(data.accessToken));
        error.config.headers.Authorization = `******;
        return api(error.config);
      } catch (_err) {
        store.dispatch(logout());
      }
    }

    return Promise.reject(error);
  }
);

export default api;
