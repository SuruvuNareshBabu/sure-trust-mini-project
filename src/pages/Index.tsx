
import { useState } from 'react';
import { AuthPage } from '@/components/auth/AuthPage';
import { NotesApp } from '@/components/notes/NotesApp';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  const handleLogin = (userData: any) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {isAuthenticated ? (
        <NotesApp user={currentUser} onLogout={handleLogout} />
      ) : (
        <AuthPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Index;
