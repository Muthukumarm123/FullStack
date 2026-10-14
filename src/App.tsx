import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { TopicPage } from './components/TopicPage';
import { RoadmapView } from './components/RoadmapView';
import { HomeView } from './components/HomeView';
import { ReferenceView } from './components/ReferenceView';
import { SearchModal } from './components/SearchModal';
import { getTopicById, ALL_TOPICS } from './content/index';
import { CompletionStatus } from './types/curriculum';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'roadmap' | 'topic' | 'reference'>('home');
  const [currentTopicId, setCurrentTopicId] = useState<string>('js-primitive-string');
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Load progress from localStorage
  const [progressMap, setProgressMap] = useState<Record<string, CompletionStatus>>(() => {
    try {
      const saved = localStorage.getItem('webdev_progress');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Ignore
    }
    return {
      'html-what-is-html': 'completed',
      'html-document-structure': 'completed',
      'css-what-is-css': 'completed',
      'js-what-is-javascript': 'completed',
      'js-variables': 'in_progress'
    };
  });

  // Sync progress changes to localStorage and optionally background API
  const handleStatusChange = (topicId: string, status: CompletionStatus) => {
    setProgressMap((prev) => {
      const next = { ...prev, [topicId]: status };
      try {
        localStorage.setItem('webdev_progress', JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });

    // Optional background sync to Express API
    fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topicId, status })
    }).catch(() => {
      // Non-blocking offline fallback
    });
  };

  // Keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectTopic = (topicId: string) => {
    setCurrentTopicId(topicId);
    setCurrentView('topic');
    setIsSidebarOpenMobile(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    setIsSidebarOpenMobile(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateRoadmap = () => {
    setCurrentView('roadmap');
    setIsSidebarOpenMobile(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateReference = () => {
    setCurrentView('reference');
    setIsSidebarOpenMobile(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate overall progress across all topics
  const totalTopicsCount = ALL_TOPICS.length;
  const completedTopicsCount = Object.values(progressMap).filter((s) => s === 'completed').length;
  const overallPercentage = totalTopicsCount > 0
    ? Math.round((completedTopicsCount / totalTopicsCount) * 100)
    : 0;

  const currentTopic = getTopicById(currentTopicId) || ALL_TOPICS[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigateHome={handleNavigateHome}
        onNavigateRoadmap={handleNavigateRoadmap}
        onNavigateReference={handleNavigateReference}
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleSidebarMobile={() => setIsSidebarOpenMobile((prev) => !prev)}
        isSidebarOpenMobile={isSidebarOpenMobile}
        completionPercentage={overallPercentage}
      />

      {/* Main Layout Container */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar
            currentView={currentView}
            currentTopicId={currentTopicId}
            onSelectTopic={handleSelectTopic}
            onNavigateHome={handleNavigateHome}
            onNavigateRoadmap={handleNavigateRoadmap}
            onNavigateReference={handleNavigateReference}
            progressMap={progressMap}
          />
        </div>

        {/* Mobile Slide-Over Sidebar Drawer */}
        {isSidebarOpenMobile && (
          <div
            className="fixed inset-0 z-50 md:hidden bg-slate-900/60 backdrop-blur-xs flex"
            onClick={() => setIsSidebarOpenMobile(false)}
          >
            <div
              className="w-80 max-w-[85vw] bg-white h-full shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Sidebar
                currentView={currentView}
                currentTopicId={currentTopicId}
                onSelectTopic={handleSelectTopic}
                onNavigateHome={handleNavigateHome}
                onNavigateRoadmap={handleNavigateRoadmap}
                onNavigateReference={handleNavigateReference}
                progressMap={progressMap}
                onCloseMobile={() => setIsSidebarOpenMobile(false)}
              />
            </div>
          </div>
        )}

        {/* Central View Content Area */}
        <main className="flex-1 min-w-0 bg-white md:border-r border-slate-200">
          {currentView === 'home' && (
            <HomeView
              onNavigateRoadmap={handleNavigateRoadmap}
              onNavigateTopic={handleSelectTopic}
              progressMap={progressMap}
            />
          )}

          {currentView === 'roadmap' && (
            <RoadmapView
              onSelectTopic={handleSelectTopic}
              progressMap={progressMap}
            />
          )}

          {currentView === 'topic' && (
            <TopicPage
              topic={currentTopic}
              status={progressMap[currentTopic.id] || 'not_started'}
              onStatusChange={handleStatusChange}
              onNavigateTopic={handleSelectTopic}
              onNavigateHome={handleNavigateHome}
            />
          )}

          {currentView === 'reference' && (
            <ReferenceView
              onNavigateTopic={handleSelectTopic}
              onNavigateHome={handleNavigateHome}
              progressMap={progressMap}
              onStatusChange={handleStatusChange}
            />
          )}
        </main>
      </div>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTopic={handleSelectTopic}
      />
    </div>
  );
}
