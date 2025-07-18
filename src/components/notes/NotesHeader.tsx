
import { Button } from '@/components/ui/button';
import { Plus, LogOut, User } from 'lucide-react';

interface NotesHeaderProps {
  user: any;
  onLogout: () => void;
  onCreateNote: () => void;
}

export const NotesHeader = ({ user, onLogout, onCreateNote }: NotesHeaderProps) => {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-foreground">My Notes</h1>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <User className="h-4 w-4" />
              <span>Welcome, {user.username}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button onClick={onCreateNote} className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>New Note</span>
            </Button>
            
            <Button variant="outline" onClick={onLogout} className="flex items-center space-x-2">
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
