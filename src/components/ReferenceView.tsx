import React, { useState } from 'react';
import { REFERENCE_TOPICS } from '../content/referenceTopics';
import { TopicPage } from './TopicPage';
import { CompletionStatus } from '../types/curriculum';

interface ReferenceViewProps {
  onNavigateTopic: (topicId: string) => void;
  onNavigateHome: () => void;
  progressMap: Record<string, CompletionStatus>;
  onStatusChange: (topicId: string, status: CompletionStatus) => void;
}

export const ReferenceView: React.FC<ReferenceViewProps> = ({
  onNavigateTopic,
  onNavigateHome,
  progressMap,
  onStatusChange
}) => {
  const [selectedRefId, setSelectedRefId] = useState<string>('ref-html');

  const currentTopic = REFERENCE_TOPICS.find((t) => t.id === selectedRefId) || REFERENCE_TOPICS[0];

  return (
    <div className="flex-1 min-w-0 max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-6">
      <div className="border-b border-slate-200 pb-5">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block mb-1">
          Quick Reference Cheatsheets
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Syntax & API Cheatsheets
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          High-frequency lookup tables, property summaries, and essential syntax guides for daily coding.
        </p>

        {/* Cheatsheet Tabs */}
        <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {REFERENCE_TOPICS.map((sheet) => {
            const isActive = selectedRefId === sheet.id;
            return (
              <button
                key={sheet.id}
                onClick={() => setSelectedRefId(sheet.id)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                {sheet.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Render the selected cheatsheet content */}
      <TopicPage
        topic={currentTopic}
        status={progressMap[currentTopic.id] || 'not_started'}
        onStatusChange={onStatusChange}
        onNavigateTopic={(id) => {
          if (id.startsWith('ref-')) {
            setSelectedRefId(id);
          } else {
            onNavigateTopic(id);
          }
        }}
        onNavigateHome={onNavigateHome}
      />
    </div>
  );
};
