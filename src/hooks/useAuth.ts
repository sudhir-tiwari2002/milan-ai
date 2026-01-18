import { useMutation } from '@tanstack/react-query';
import { apiClient, LoginRequest, SignupRequest, AuthResponse } from '@/lib/api-client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginRequest) => apiClient.login(data),
    onSuccess: (response: AuthResponse) => {
      if (response.token) {
        localStorage.setItem('auth_token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      }
      toast.success('Welcome back!');
      navigate('/dashboard');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Login failed. Please try again.');
    },
  });
};

export const useSignup = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: SignupRequest) => apiClient.signup(data),
    onSuccess: (response: AuthResponse) => {
      if (response.token) {
        localStorage.setItem('auth_token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      }
      toast.success('Account created successfully!');
      navigate('/dashboard');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Signup failed. Please try again.');
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
    navigate('/');
  };

  return { logout };
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('auth_token');
};

export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};
