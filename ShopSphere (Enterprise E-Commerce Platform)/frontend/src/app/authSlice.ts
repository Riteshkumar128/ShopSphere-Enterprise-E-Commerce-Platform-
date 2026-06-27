import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../types';

type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
};

const storedUser = localStorage.getItem('shopsphere_user');
const storedAccess = localStorage.getItem('shopsphere_access');
const storedRefresh = localStorage.getItem('shopsphere_refresh');

const initialState: AuthState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  accessToken: storedAccess,
  refreshToken: storedRefresh,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{ user: User; accessToken: string; refreshToken: string }>
    ) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem('shopsphere_user', JSON.stringify(action.payload.user));
      localStorage.setItem('shopsphere_access', action.payload.accessToken);
      localStorage.setItem('shopsphere_refresh', action.payload.refreshToken);
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      localStorage.setItem('shopsphere_access', action.payload);
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem('shopsphere_user');
      localStorage.removeItem('shopsphere_access');
      localStorage.removeItem('shopsphere_refresh');
    },
  },
});

export const { setAuth, setAccessToken, logout } = authSlice.actions;
export default authSlice.reducer;
