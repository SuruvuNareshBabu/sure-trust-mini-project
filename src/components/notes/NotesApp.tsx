
import { useState } from 'react';
import { NotesHeader } from './NotesHeader';
import { NotesFilter } from './NotesFilter';
import { NotesList } from './NotesList';
import { CreateNoteDialog } from './CreateNoteDialog';
import { useNotes } from '@/hooks/useNotes';

interface NotesAppProps {
  user: any;
  onLogout: () => void;
}

export const NotesApp = ({ user, onLogout }: NotesAppProps) => {
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  
  const { notes, tags, addNote, updateNote, deleteNote } = useNotes();

  const filteredNotes = notes.filter(note => {
    const matchesTag = !selectedTag || note.tags.includes(selectedTag);
    const matchesSearch = !searchQuery || 
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <NotesHeader 
        user={user}
        onLogout={onLogout}
        onCreateNote={() => setIsCreateDialogOpen(true)}
      />

      <div className="container mx-auto px-4 py-6">
        <NotesFilter 
          tags={tags}
          selectedTag={selectedTag}
          onTagSelect={setSelectedTag}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <NotesList 
          notes={filteredNotes}
          onUpdateNote={updateNote}
          onDeleteNote={deleteNote}
        />

        <CreateNoteDialog 
          isOpen={isCreateDialogOpen}
          onClose={() => setIsCreateDialogOpen(false)}
          onCreateNote={addNote}
          existingTags={tags}
        />
      </div>
    </div>
  );
};
