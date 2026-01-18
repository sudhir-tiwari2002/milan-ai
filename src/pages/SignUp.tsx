import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignup } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Lock, Building2, Globe, Briefcase, ArrowRight, Loader2 } from 'lucide-react';
import { z } from 'zod';

const signupSchema = z.object({
  email: z.string().trim().email({ message: 'Invalid email address' }),
  company_name: z.string().trim().min(2, { message: 'Company name must be at least 2 characters' }),
  industry: z.string().trim().min(2, { message: 'Industry is required' }),
  website: z.string().trim().url({ message: 'Invalid website URL' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
});

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    company_name: '',
    industry: '',
    website: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { mutate: signup, isPending } = useSignup();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = signupSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as string;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    signup({
      email: formData.email.trim(),
      company_name: formData.company_name.trim(),
      industry: formData.industry.trim(),
      website: formData.website.trim(),
      password: formData.password,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/20 px-4 py-8">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <Card className="w-full max-w-md relative z-10 border-border/50 bg-card/80 backdrop-blur-sm shadow-2xl">
        <CardHeader className="space-y-1 text-center">
          <Link to="/" className="inline-block mb-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">
              Milan AI
            </span>
          </Link>
          <CardTitle className="text-2xl font-bold">Create your account</CardTitle>
          <CardDescription>
            Start your marketing journey with AI-powered tools
          </CardDescription>
        </CardHeader>
        
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10"
                  disabled={isPending}
                />
              </div>
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="company_name">Company Name</Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="company_name"
                  name="company_name"
                  type="text"
                  placeholder="Your Company"
                  value={formData.company_name}
                  onChange={handleChange}
                  className="pl-10"
                  disabled={isPending}
                />
              </div>
              {errors.company_name && <p className="text-sm text-destructive">{errors.company_name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="industry"
                  name="industry"
                  type="text"
                  placeholder="e.g. Technology, Healthcare"
                  value={formData.industry}
                  onChange={handleChange}
                  className="pl-10"
                  disabled={isPending}
                />
              </div>
              {errors.industry && <p className="text-sm text-destructive">{errors.industry}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="https://yourcompany.com"
                  value={formData.website}
                  onChange={handleChange}
                  className="pl-10"
                  disabled={isPending}
                />
              </div>
              {errors.website && <p className="text-sm text-destructive">{errors.website}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10"
                  disabled={isPending}
                />
              </div>
              {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" size="lg" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                <>
                  Create account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            
            <p className="text-sm text-muted-foreground text-center">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
