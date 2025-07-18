
import { useState } from 'react';

export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      title: 'Project Ideas',
      content: 'Build a notes app with tagging system. Add authentication and real-time sync.',
      tags: ['Work', 'Ideas'],
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15'),
    },
    {
      id: '2',
      title: 'Meeting Notes',
      content: 'Discussed Q1 goals and budget allocation. Need to follow up on marketing strategy.',
      tags: ['Work', 'Meetings'],
      createdAt: new Date('2024-01-14'),
      updatedAt: new Date('2024-01-14'),
    },
    {
      id: '3',
      title: 'Book Recommendations',
      content: 'The Design of Everyday Things, Atomic Habits, Thinking Fast and Slow',
      tags: ['Personal', 'Reading'],
      createdAt: new Date('2024-01-13'),
      updatedAt: new Date('2024-01-13'),
    },
  ]);

  const tags = Array.from(new Set(notes.flatMap(note => note.tags))).sort();

  const addNote = (noteData: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newNote: Note = {
      ...noteData,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setNotes(prev => [newNote, ...prev]);
  };

  const updateNote = (id: string, updates: Partial<Omit<Note, 'id' | 'createdAt' | 'updatedAt'>>) => {
    setNotes(prev => prev.map(note => 
      note.id === id 
        ? { ...note, ...updates, updatedAt: new Date() }
        : note
    ));
  };

  const deleteNote = (id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  return {
    notes,
    tags,
    addNote,
    updateNote,
    deleteNote,
  };
};
