// src/store/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initSession, loginUser, logoutUser, refreshToken, signupUser } from './authThunks';
import { User } from './types';

interface AuthState {
  user: User | undefined | null; 
  accessToken: string | null;
  loading: boolean;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: undefined,
  accessToken: null,
  loading: false,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setUser: (state, action: PayloadAction<any | null>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // LOGIN
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.loading = false;
      state.isAuthenticated = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
      state.error = action.payload as string;
    });

    // SIGNUP
    builder.addCase(signupUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signupUser.fulfilled, (state) => {
      state.loading = false;
      state.isAuthenticated = true;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
      state.error = action.payload as string;
    });

    // REFRESH
    builder.addCase(refreshToken.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(refreshToken.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(refreshToken.rejected, (state, action) => {
      state.loading =false;
      state.isAuthenticated = false;
      state.accessToken = null;
      state.user = null;
      state.error = action.payload as string;
    });

    // INIT
    builder.addCase(initSession.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(initSession.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(initSession.rejected, (state, action) => {
      state.loading =false;
      state.isAuthenticated = false;
      state.accessToken = null;
      state.user = null;
      state.error = action.payload as string;
    });

    // LOGOUT
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.user = null;
    });
  },
});

export const { setAccessToken, setUser } = authSlice.actions;
export default authSlice.reducer;
