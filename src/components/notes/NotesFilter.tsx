
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';

interface NotesFilterProps {
  tags: string[];
  selectedTag: string;
  onTagSelect: (tag: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const NotesFilter = ({ 
  tags, 
  selectedTag, 
  onTagSelect, 
  searchQuery, 
  onSearchChange 
}: NotesFilterProps) => {
  return (
    <div className="space-y-4 mb-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Tags Filter */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-muted-foreground">Filter by tag:</span>
        <Button
          variant={selectedTag === '' ? "default" : "outline"}
          size="sm"
          onClick={() => onTagSelect('')}
        >
          All Notes
        </Button>
        {tags.map(tag => (
          <Button
            key={tag}
            variant={selectedTag === tag ? "default" : "outline"}
            size="sm"
            onClick={() => onTagSelect(tag)}
            className="flex items-center space-x-1"
          >
            <span>{tag}</span>
            {selectedTag === tag && (
              <X 
                className="h-3 w-3 ml-1" 
                onClick={(e) => {
                  e.stopPropagation();
                  onTagSelect('');
                }}
              />
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};
