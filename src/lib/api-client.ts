const API_BASE_URL = 'https://milan-ai-xs0a.onrender.com';

interface LoginRequest {
  email: string;
  password: string;
}

interface SignupRequest {
  email: string;
  company_name: string;
  industry: string;
  website: string;
  password: string;
}

interface AuthResponse {
  token?: string;
  user?: {
    id: string;
    email: string;
    company_name?: string;
  };
  message?: string;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const config: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    const response = await fetch(url, config);
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'An error occurred' }));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async login(data: LoginRequest): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async signup(data: SignupRequest): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/signup/brand', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
export type { LoginRequest, SignupRequest, AuthResponse };
