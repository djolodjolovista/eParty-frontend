export interface ApiError<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

export interface LoginData {
  email: string;
  password: string;
}

export type User = {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  id: number;
};

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface GoogleLoginData {
  credential: string;
}
