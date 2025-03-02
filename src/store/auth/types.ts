export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  accessToken: string;
}

export interface SignupPayload extends LoginPayload {
  name: string;
}

export interface SignupResponse {
  user: User;
  accessToken: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
}

export interface AuthError {
  message: string;
}
