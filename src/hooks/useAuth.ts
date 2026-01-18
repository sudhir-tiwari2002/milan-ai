import { useMutation } from '@tanstack/react-query';
import { AuthResponse , LoginData ,loginUser,signupBrand,SignupData } from '@/lib/api'; // Remove apiClient if not exported
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginData) => loginUser(data),
    onSuccess: (response: AuthResponse) => {
      if (response.access_token) {
        localStorage.setItem('auth_token', response.access_token);
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
    mutationFn: (data: SignupData) => signupBrand(data),
    onSuccess: (response: AuthResponse) => {
      if (response.access_token) {
        localStorage.setItem('auth_token', response.access_token);
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
