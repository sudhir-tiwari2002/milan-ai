import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, getUser, useLogout } from '../hooks/useAuth';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { LogOut, BarChart3, Users, Zap, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const user = getUser();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
    }
  }, [navigate]);

  const stats = [
    { title: 'Campaigns', value: '12', icon: Zap, change: '+2 this week' },
    { title: 'Total Reach', value: '24.5K', icon: Users, change: '+12% vs last month' },
    { title: 'Engagement', value: '8.2%', icon: TrendingUp, change: '+3.1% vs last month' },
    { title: 'Analytics', value: '156', icon: BarChart3, change: 'Reports generated' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">
            Milan AI
          </span>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {user?.email || 'User'}
            </span>
            <Button variant="outline" size="sm" onClick={logout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-muted-foreground">
            Here's an overview of your marketing performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <CardDescription className="text-xs mt-1">
                  {stat.change}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              Complete these steps to unlock your marketing potential
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Zap className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium">Create your first campaign</p>
                <p className="text-sm text-muted-foreground">
                  Launch an AI-powered marketing campaign in minutes
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
