import React from 'react';
import { Search, Menu, X, BookOpen } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'roadmap' | 'topic' | 'reference';
  onNavigateHome: () => void;
  onNavigateRoadmap: () => void;
  onNavigateReference: () => void;
  onOpenSearch: () => void;
  onToggleSidebarMobile: () => void;
  isSidebarOpenMobile: boolean;
  completionPercentage: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigateHome,
  onNavigateRoadmap,
  onNavigateReference,
  onOpenSearch,
  onToggleSidebarMobile,
  isSidebarOpenMobile,
  completionPercentage
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-8 h-16">
        {/* Zone 1: Single text element Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleSidebarMobile}
            className="md:hidden p-2 -ml-2 text-slate-600 hover:text-slate-900 focus-visible:outline-hidden"
            aria-label="Toggle Navigation Drawer"
          >
            {isSidebarOpenMobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          <button
            onClick={onNavigateHome}
            className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <BookOpen className="w-5 h-5 text-indigo-600" />
            <span>WebDev Encyclopedia</span>
          </button>
        </div>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={onNavigateHome}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 ${
              currentView === 'home' ? 'text-indigo-600 font-semibold' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={onNavigateRoadmap}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 ${
              currentView === 'roadmap' ? 'text-indigo-600 font-semibold' : ''
            }`}
          >
            Roadmap
          </button>
          <button
            onClick={onNavigateReference}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 ${
              currentView === 'reference' ? 'text-indigo-600 font-semibold' : ''
            }`}
          >
            Reference
          </button>
        </nav>

        {/* Zone 3: 1 primary action (Global Search with Shortcut) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors whitespace-nowrap shrink-0 border border-slate-200/60"
            aria-label="Search curriculum"
          >
            <Search className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">Search topics...</span>
            <span className="sm:hidden">Search</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono font-semibold text-slate-500 bg-white rounded border border-slate-200">
              ⌘K
            </kbd>
          </button>
        </div>
      </div>
    </header>
  );
};
