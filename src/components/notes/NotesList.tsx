
import { NoteCard } from './NoteCard';
import { Note } from '@/hooks/useNotes';

interface NotesListProps {
  notes: Note[];
  onUpdateNote: (id: string, updates: Partial<Note>) => void;
  onDeleteNote: (id: string) => void;
}

export const NotesList = ({ notes, onUpdateNote, onDeleteNote }: NotesListProps) => {
  if (notes.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-muted-foreground mb-2">No notes found</h3>
        <p className="text-muted-foreground">Create your first note to get started!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map(note => (
        <NoteCard 
          key={note.id}
          note={note}
          onUpdate={onUpdateNote}
          onDelete={onDeleteNote}
        />
      ))}
    </div>
  );
};
