import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronRight, BookOpen } from 'lucide-react';
import { searchTopics } from '../content/index';
import { TopicItem } from '../types/curriculum';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTopic: (topicId: string) => void;
}

const TECH_FILTERS = [
  { id: 'all', label: 'All Tech' },
  { id: 'environment', label: 'Dev Environment' },
  { id: 'html', label: 'HTML' },
  { id: 'css', label: 'CSS' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'react', label: 'React' },
  { id: 'express', label: 'Express' },
  { id: 'fullstack', label: 'Full-Stack' }
];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectTopic
}) => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [results, setResults] = useState<TopicItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setActiveFilter('all');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      const hits = searchTopics(query, activeFilter);
      setResults(hits);
    } else {
      setResults([]);
    }
  }, [query, activeFilter]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:pt-20 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search HTML, CSS, JavaScript, React, Express, topics..."
            className="flex-1 bg-transparent border-none text-slate-900 placeholder:text-slate-400 text-sm focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 hover:bg-slate-100 rounded-md text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 text-slate-500 hover:text-slate-800 bg-slate-100 rounded-md font-mono"
          >
            ESC
          </button>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-50 border-b border-slate-200 overflow-x-auto text-xs">
          {TECH_FILTERS.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap shrink-0 font-medium ${
                  isActive
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1 divide-y divide-slate-100">
          {query.trim() === '' ? (
            <div className="py-12 text-center text-slate-400">
              <BookOpen className="w-8 h-8 mx-auto mb-2 text-slate-300" />
              <p className="text-sm font-medium text-slate-600">Quick Topic Search</p>
              <p className="text-xs mt-1 text-slate-400">
                Search concepts like <span className="font-mono text-slate-600">useState</span>,{' '}
                <span className="font-mono text-slate-600">Flexbox</span>,{' '}
                <span className="font-mono text-slate-600">String</span>, or{' '}
                <span className="font-mono text-slate-600">Middleware</span>.
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <p className="text-sm font-medium text-slate-600">No matching topics found</p>
              <p className="text-xs mt-1 text-slate-400">
                Try searching a different keyword or selecting "All Tech".
              </p>
            </div>
          ) : (
            results.map((topic) => (
              <div
                key={topic.id}
                onClick={() => {
                  onSelectTopic(topic.id);
                  onClose();
                }}
                className="p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors group"
              >
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <div className="flex items-center gap-1.5 font-medium text-indigo-600">
                    <span>{topic.techName}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="text-slate-500">{topic.category}</span>
                  </div>
                  <span className="text-[11px] font-mono">{topic.estimatedMinutes} min read</span>
                </div>

                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {topic.title}
                  </h4>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
                </div>

                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {topic.shortDescription}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-400 flex items-center justify-between">
          <span>{results.length} topics found</span>
          <span className="font-mono text-[11px]">Navigate & click to open</span>
        </div>
      </div>
    </div>
  );
};
