const API_BASE_URL = "https://milan-ai-xs0a.onrender.com";

export interface SignupData {
  email: string;
  company_name: string;
  industry: string;
  website: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token?: string;
  token_type?: string;
  message?: string;
  user?: {
    id: string;
    email: string;
  };
}

export interface ApiError {
  detail?: string;
  message?: string;
}

export async function signupBrand(data: SignupData): Promise<AuthResponse> {
  const response = await fetch(`${API_BASE_URL}/auth/signup/brand`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error: ApiError = await response.json();
    throw new Error(error.detail || error.message || "Signup failed");
  }

  return response.json();
}

export async function loginUser(data: LoginData): Promise<AuthResponse> {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error: ApiError = await response.json();
    throw new Error(error.detail || error.message || "Login failed");
  }

  return response.json();
}
