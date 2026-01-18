import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff, Mail, Lock, Building2, Globe, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { signupSchema, SignupFormData, industries } from "@/lib/validations";
import { signupBrand } from "@/lib/api";
import { toast } from "sonner";

interface SignupFormProps {
  onSuccess?: () => void;
  onSwitchToLogin?: () => void;
}

export function SignupForm({ onSuccess, onSwitchToLogin }: SignupFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const signupMutation = useMutation({
    mutationFn: signupBrand,
    onSuccess: () => {
      toast.success("Account created successfully! Please log in.");
      onSuccess?.();
      onSwitchToLogin?.();
    },
    onError: (error: Error) => {
      toast.error(error.message || "Signup failed. Please try again.");
    },
  });

  const onSubmit = (data: SignupFormData) => {
    signupMutation.mutate({
      email: data.email,
      company_name: data.company_name,
      industry: data.industry,
      website: data.website,
      password: data.password,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="signup-email" className="text-sm font-medium text-foreground">
          Email
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="signup-email"
            type="email"
            placeholder="you@company.com"
            className="pl-10 h-11"
            {...register("email")}
          />
        </div>
        {errors.email && (
          <p className="text-sm text-destructive animate-fade-in">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company_name" className="text-sm font-medium text-foreground">
          Company Name
        </Label>
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="company_name"
            type="text"
            placeholder="Your Company"
            className="pl-10 h-11"
            {...register("company_name")}
          />
        </div>
        {errors.company_name && (
          <p className="text-sm text-destructive animate-fade-in">
            {errors.company_name.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry" className="text-sm font-medium text-foreground">
          Industry
        </Label>
        <Select onValueChange={(value) => setValue("industry", value)}>
          <SelectTrigger className="h-11">
            <SelectValue placeholder="Select your industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((industry) => (
              <SelectItem key={industry.value} value={industry.value}>
                {industry.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.industry && (
          <p className="text-sm text-destructive animate-fade-in">
            {errors.industry.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="website" className="text-sm font-medium text-foreground">
          Website
        </Label>
        <div className="relative">
          <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="website"
            type="url"
            placeholder="https://yourcompany.com"
            className="pl-10 h-11"
            {...register("website")}
          />
        </div>
        {errors.website && (
          <p className="text-sm text-destructive animate-fade-in">
            {errors.website.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="signup-password" className="text-sm font-medium text-foreground">
          Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="signup-password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="pl-10 pr-10 h-11"
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {errors.password && (
          <p className="text-sm text-destructive animate-fade-in">
            {errors.password.message}
          </p>
        )}
        <p className="text-xs text-muted-foreground">
          Must contain uppercase, lowercase, number, and special character
        </p>
      </div>

      <Button
        type="submit"
        className="w-full h-11 gradient-brand text-primary-foreground font-medium shadow-brand hover:opacity-90 transition-opacity"
        disabled={signupMutation.isPending}
      >
        {signupMutation.isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating account...
          </>
        ) : (
          "Create Account"
        )}
      </Button>
    </form>
  );
}
