import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAccessToken, setUser } from './authSlice';
import apiClient, { noInterceptorApiClient } from '../../utils/apiClient';
import { ToastService } from '../../utils/toastService';
import { LoginPayload, SignupPayload } from './types';


export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (payload: SignupPayload, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await apiClient.post('/auth/signup', payload);
      dispatch(setUser(data.user));
      dispatch(setAccessToken(data.accessToken));
      return data.user;
    } catch (error: any) {
      ToastService.error(error.response?.data?.message || 'Signup failed. Please try again later.');
      return rejectWithValue(error.response?.data?.message || 'Signup failed');
    }
  }
);


export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (payload: LoginPayload, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await apiClient.post('/auth/login', payload);
      dispatch(setUser(data.user));
      dispatch(setAccessToken(data.accessToken));

      return data.user;
    } catch (error: any) {
      ToastService.error(error.response?.data?.message || 'Login failed. Please try again later.');
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await noInterceptorApiClient.get('/auth/refresh');
      dispatch(setAccessToken(data.accessToken));
      return data.accessToken;
    } catch (error: any) {
      return rejectWithValue('Refresh token invalid');
    }
  }
);

export const initSession = createAsyncThunk(
  'auth/init',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await noInterceptorApiClient.get('/auth/init');
      dispatch(setAccessToken(data.accessToken));
      dispatch(setUser(data.user));
      return data.accessToken;
    } catch (error: any) {
      return rejectWithValue('Refresh token invalid');
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await apiClient.post('/auth/logout');
      dispatch(setAccessToken(null));
      dispatch(setUser(null));
      return true;
    } catch (error: any) {
      ToastService.error("Logout failed");
      return rejectWithValue('Logout failed');
    }
  }
);
