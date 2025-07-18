
import { useState } from 'react';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';
import { Button } from '@/components/ui/button';

interface AuthPageProps {
  onLogin: (userData: any) => void;
}

export const AuthPage = ({ onLogin }: AuthPageProps) => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground">Notes App</h1>
          <p className="text-muted-foreground mt-2">
            Organize your thoughts with tags
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
          <div className="flex space-x-2 mb-6">
            <Button
              variant={!isSignup ? "default" : "outline"}
              onClick={() => setIsSignup(false)}
              className="flex-1"
            >
              Login
            </Button>
            <Button
              variant={isSignup ? "default" : "outline"}
              onClick={() => setIsSignup(true)}
              className="flex-1"
            >
              Sign Up
            </Button>
          </div>

          {isSignup ? (
            <SignupForm onSuccess={onLogin} />
          ) : (
            <LoginForm onSuccess={onLogin} />
          )}
        </div>
      </div>
    </div>
  );
};
