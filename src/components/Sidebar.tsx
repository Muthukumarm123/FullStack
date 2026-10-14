import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Home,
  Map,
  BookMarked,
  Layers,
  Code2,
  Palette,
  Braces,
  Atom,
  Server,
  CheckCircle2,
  Circle
} from 'lucide-react';
import { TECH_NAVIGATION_CONFIG } from '../content/index';
import { TechnologyId, CompletionStatus } from '../types/curriculum';

interface SidebarProps {
  currentView: 'home' | 'roadmap' | 'topic' | 'reference';
  currentTopicId?: string;
  onSelectTopic: (topicId: string) => void;
  onNavigateHome: () => void;
  onNavigateRoadmap: () => void;
  onNavigateReference: () => void;
  progressMap: Record<string, CompletionStatus>;
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  currentTopicId,
  onSelectTopic,
  onNavigateHome,
  onNavigateRoadmap,
  onNavigateReference,
  progressMap,
  onCloseMobile
}) => {
  // Store expanded state of tech sections and sub-groups
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    environment: true,
    html: true,
    css: true,
    javascript: true,
    'js-data-types': true,
    'js-data-types-primitive': true,
    react: true,
    express: true,
    fullstack: true,
    reference: true
  });

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getTechIcon = (id: TechnologyId) => {
    switch (id) {
      case 'environment': return <Code2 className="w-4 h-4 text-emerald-500" />;
      case 'html': return <Code2 className="w-4 h-4 text-orange-500" />;
      case 'css': return <Palette className="w-4 h-4 text-blue-500" />;
      case 'javascript': return <Braces className="w-4 h-4 text-amber-500" />;
      case 'react': return <Atom className="w-4 h-4 text-cyan-500" />;
      case 'express': return <Server className="w-4 h-4 text-emerald-600" />;
      case 'fullstack': return <Layers className="w-4 h-4 text-purple-600" />;
      case 'reference': return <BookMarked className="w-4 h-4 text-slate-600" />;
    }
  };

  // Calculate percentage of completed topics for a technology
  const calculateTechProgress = (techId: TechnologyId) => {
    const tech = TECH_NAVIGATION_CONFIG.find((t) => t.id === techId);
    if (!tech) return 0;

    const topicIds: string[] = [];
    const extractIds = (items: any[]) => {
      items.forEach((item) => {
        if (item.topicId) topicIds.push(item.topicId);
        if (item.children) extractIds(item.children);
      });
    };
    extractIds(tech.groups);

    if (topicIds.length === 0) return 0;
    const completedCount = topicIds.filter((id) => progressMap[id] === 'completed').length;
    return Math.round((completedCount / topicIds.length) * 100);
  };

  const handleTopicClick = (topicId: string) => {
    onSelectTopic(topicId);
    if (onCloseMobile) onCloseMobile();
  };

  return (
    <aside className="w-72 shrink-0 border-r border-slate-200 bg-white h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto p-4 select-none">
      {/* Top Primary Navigation */}
      <div className="space-y-1 pb-4 border-b border-slate-100">
        <button
          onClick={() => {
            onNavigateHome();
            if (onCloseMobile) onCloseMobile();
          }}
          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            currentView === 'home'
              ? 'bg-indigo-50 text-indigo-700 font-semibold'
              : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <Home className="w-4 h-4 text-indigo-600" />
          <span>HOME</span>
        </button>

        <button
          onClick={() => {
            onNavigateRoadmap();
            if (onCloseMobile) onCloseMobile();
          }}
          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            currentView === 'roadmap'
              ? 'bg-indigo-50 text-indigo-700 font-semibold'
              : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <Map className="w-4 h-4 text-emerald-600" />
          <span>ROADMAP</span>
        </button>
      </div>

      {/* Curriculum Technology Tree */}
      <div className="mt-4 space-y-5">
        {TECH_NAVIGATION_CONFIG.map((tech) => {
          const isExpanded = !!expandedSections[tech.id];
          const progress = calculateTechProgress(tech.id);

          return (
            <div key={tech.id} className="space-y-1">
              {/* Technology Header */}
              <button
                onClick={() => toggleSection(tech.id)}
                className="w-full flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-slate-50 transition-colors group text-left"
              >
                <div className="flex items-center gap-2 min-w-0">
                  {getTechIcon(tech.id)}
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    {tech.name}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {progress > 0 && (
                    <span className="text-[11px] font-mono text-slate-400 tabular-nums">
                      {progress}%
                    </span>
                  )}
                  {isExpanded ? (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700" />
                  )}
                </div>
              </button>

              {/* Progress Line */}
              {progress > 0 && isExpanded && (
                <div className="px-2 pb-1">
                  <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-600 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Nested Topics Hierarchy */}
              {isExpanded && (
                <div className="pl-3 space-y-1 border-l border-slate-100 ml-2 mt-1">
                  {tech.groups.map((group: any) => {
                    const isGroupExpanded = expandedSections[group.id] !== false;
                    const hasChildren = group.children && group.children.length > 0;

                    return (
                      <div key={group.id} className="space-y-0.5">
                        {/* Group Title (e.g. Basics, Layout, Primitive Types) */}
                        <div
                          onClick={() => toggleSection(group.id)}
                          className="flex items-center justify-between py-1 px-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer rounded hover:bg-slate-50"
                        >
                          <span className="truncate">{group.title}</span>
                          {hasChildren && (
                            <span>
                              {isGroupExpanded ? (
                                <ChevronDown className="w-3 h-3 text-slate-400" />
                              ) : (
                                <ChevronRight className="w-3 h-3 text-slate-400" />
                              )}
                            </span>
                          )}
                        </div>

                        {/* Child items or deeper nested groups */}
                        {isGroupExpanded && (
                          <div className="pl-2 space-y-0.5">
                            {group.children.map((subItem: any) => {
                              // If subItem is another nested group (like Primitive -> String)
                              if (subItem.children) {
                                const isSubGroupExpanded = expandedSections[subItem.id] !== false;
                                return (
                                  <div key={subItem.id} className="space-y-0.5">
                                    <div
                                      onClick={() => toggleSection(subItem.id)}
                                      className="flex items-center justify-between py-1 px-2 text-[11px] font-medium text-slate-500 hover:text-slate-800 cursor-pointer rounded hover:bg-slate-50"
                                    >
                                      <span>{subItem.title}</span>
                                      {isSubGroupExpanded ? (
                                        <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
                                      ) : (
                                        <ChevronRight className="w-2.5 h-2.5 text-slate-400" />
                                      )}
                                    </div>

                                    {isSubGroupExpanded && (
                                      <div className="pl-2 space-y-0.5">
                                        {subItem.children.map((nested: any) => {
                                          const isSelected =
                                            currentView === 'topic' && currentTopicId === nested.topicId;
                                          const status = progressMap[nested.topicId];

                                          return (
                                            <button
                                              key={nested.id}
                                              onClick={() => handleTopicClick(nested.topicId)}
                                              className={`w-full flex items-center justify-between text-left py-1 px-2 rounded-md text-xs transition-colors group ${
                                                isSelected
                                                  ? 'bg-indigo-50 text-indigo-700 font-semibold'
                                                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                              }`}
                                            >
                                              <span className="truncate">{nested.title}</span>
                                              {status === 'completed' ? (
                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 ml-1" />
                                              ) : (
                                                <Circle className="w-3 h-3 text-slate-200 group-hover:text-slate-400 shrink-0 ml-1" />
                                              )}
                                            </button>
                                          );
                                        })}
                                      </div>
                                    )}
                                  </div>
                                );
                              }

                              // Regular leaf topic item
                              const isSelected =
                                currentView === 'topic' && currentTopicId === subItem.topicId;
                              const status = progressMap[subItem.topicId];

                              return (
                                <button
                                  key={subItem.id}
                                  onClick={() => handleTopicClick(subItem.topicId)}
                                  className={`w-full flex items-center justify-between text-left py-1 px-2 rounded-md text-xs transition-colors group ${
                                    isSelected
                                      ? 'bg-indigo-50 text-indigo-700 font-semibold'
                                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                  }`}
                                >
                                  <span className="truncate">{subItem.title}</span>
                                  {status === 'completed' ? (
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 ml-1" />
                                  ) : (
                                    <Circle className="w-3 h-3 text-slate-200 group-hover:text-slate-400 shrink-0 ml-1" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};
