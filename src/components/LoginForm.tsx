
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppStore } from '../store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const LoginForm = () => {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('password');
  const [isLoading, setIsLoading] = useState(false);
  // const login = useAppStore((state) => state.login);
  const navigate = useNavigate();

  const login = useAppStore((state) => state.login);
  const loading = useAppStore((state) => state.loading);
  const error = useAppStore((state) => state.error);
  // const clearError = useAppStore((state) => state.clearError);



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await login({email, password});
      if (success) {
        toast({
          title: "Login successful",
          description: "Welcome to the admin dashboard!",
        });
        navigate('/dashboard');
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during login",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Dashboard
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to your account
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1"
              />
            </div>
          </div>

          <Button
              type="submit"
              disabled={loading}
              className="w-full"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>
        </form>
        <div className="mt-6 space-y-4">
          <div className="text-sm text-gray-500 text-center">
            Demo credentials: admin@example.com / password
          </div>
          <div className="border-t pt-4">
            <p className="text-center text-sm text-gray-600">
              New business?{' '}
              <Link
                  to="/signup"
                  className="text-blue-600 hover:text-blue-500 font-medium"
              >
                Create your  account
              </Link>
            </p>
          </div>
        </div>
      </div>
      </div>
      );
      };

      export default LoginForm;
