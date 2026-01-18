import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { LoginForm } from "@/components/LoginForm";
import { SignupForm } from "@/components/SignupForm";

type AuthMode = "login" | "signup";

const Auth = () => {
  const [mode, setMode] = useState<AuthMode>("login");
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 gradient-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-brand-start rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-end rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 gradient-brand rounded-xl flex items-center justify-center shadow-brand">
              <Sparkles className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-primary-foreground">Milan AI</span>
          </div>
          
          <h1 className="text-4xl xl:text-5xl font-bold text-primary-foreground leading-tight mb-6">
            Elevate Your
            <br />
            <span className="text-brand-start">Marketing Strategy</span>
          </h1>
          
          <p className="text-lg text-primary-foreground/80 max-w-md mb-10">
            Connect with the right influencers, create impactful campaigns, and grow your brand with AI-powered marketing tools.
          </p>
          
          <div className="flex gap-8">
            <div>
              <p className="text-3xl font-bold text-primary-foreground">10K+</p>
              <p className="text-sm text-primary-foreground/70">Active Brands</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-foreground">50M+</p>
              <p className="text-sm text-primary-foreground/70">Reach Generated</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-foreground">98%</p>
              <p className="text-sm text-primary-foreground/70">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Auth Forms */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-background">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 gradient-brand rounded-xl flex items-center justify-center shadow-brand">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Milan AI</span>
          </div>

          {/* Tab Switcher */}
          <div className="flex gap-1 p-1 bg-muted rounded-lg mb-8">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
                mode === "login"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
                mode === "signup"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form Container */}
          <div className="bg-card rounded-2xl p-8 shadow-card animate-fade-in">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-foreground">
                {mode === "login" ? "Welcome back" : "Create your account"}
              </h2>
              <p className="text-muted-foreground mt-1">
                {mode === "login"
                  ? "Enter your credentials to access your dashboard"
                  : "Start growing your brand with Milan AI"}
              </p>
            </div>

            {mode === "login" ? (
              <LoginForm onSuccess={handleSuccess} />
            ) : (
              <SignupForm
                onSuccess={handleSuccess}
                onSwitchToLogin={() => setMode("login")}
              />
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                {mode === "login" ? (
                  <>
                    Don't have an account?{" "}
                    <button
                      onClick={() => setMode("signup")}
                      className="text-primary font-medium hover:underline"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      onClick={() => setMode("login")}
                      className="text-primary font-medium hover:underline"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8">
            By continuing, you agree to our{" "}
            <a href="#" className="text-primary hover:underline">Terms of Service</a>
            {" "}and{" "}
            <a href="#" className="text-primary hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
