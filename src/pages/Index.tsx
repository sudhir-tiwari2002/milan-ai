import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, BarChart3, Zap, Users, ChevronRight } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Campaigns',
      description: 'Generate high-converting marketing content with advanced AI algorithms.',
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Track performance metrics and optimize your campaigns in real-time.',
    },
    {
      icon: Users,
      title: 'Audience Insights',
      description: 'Understand your audience with deep behavioral analytics and segmentation.',
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Set up automated workflows to scale your marketing effortlessly.',
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">
            Milan AI
          </span>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" size="sm">Sign in</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">
                Get Started
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-radial from-accent-blue/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-border mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">AI-Powered Marketing Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
            Transform Your Marketing with{' '}
            <span className="bg-gradient-to-r from-primary via-accent-blue to-primary bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Create compelling campaigns, analyze performance, and grow your audience with 
            the power of AI. Join thousands of brands already using Milan AI.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="px-8 h-12 text-base">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="px-8 h-12 text-base">
                Sign in to Dashboard
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: '10K+', label: 'Active Brands' },
              { value: '50M+', label: 'Campaigns Sent' },
              { value: '99.9%', label: 'Uptime' },
              { value: '3x', label: 'Avg. ROI Increase' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to grow
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Powerful features to help you create, manage, and optimize your marketing campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-br from-primary/10 via-accent-blue/10 to-primary/5 border border-border p-8 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to supercharge your marketing?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Join thousands of marketers using AI to create better campaigns and drive results.
              </p>
              <Link to="/signup">
                <Button size="lg" className="px-8 h-12">
                  Get Started for Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">
            Milan AI
          </span>
          <p className="text-sm text-muted-foreground">
            © 2025 Milan AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
