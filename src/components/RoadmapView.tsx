import React from 'react';
import {
  ArrowDown,
  CheckCircle2,
  BookOpen,
  Target,
  ArrowRight,
  Code2,
  Palette,
  Braces,
  Atom,
  Server,
  Layers
} from 'lucide-react';
import { ROADMAP_STAGES } from '../content/roadmap';
import { CompletionStatus, TechnologyId } from '../types/curriculum';
import { TECH_NAVIGATION_CONFIG } from '../content/index';

interface RoadmapViewProps {
  onSelectTopic: (topicId: string) => void;
  progressMap: Record<string, CompletionStatus>;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({
  onSelectTopic,
  progressMap
}) => {
  const getTechIcon = (id: TechnologyId) => {
    switch (id) {
      case 'environment': return <Code2 className="w-5 h-5 text-emerald-500" />;
      case 'html': return <Code2 className="w-5 h-5 text-orange-500" />;
      case 'css': return <Palette className="w-5 h-5 text-blue-500" />;
      case 'javascript': return <Braces className="w-5 h-5 text-amber-500" />;
      case 'react': return <Atom className="w-5 h-5 text-cyan-500" />;
      case 'express': return <Server className="w-5 h-5 text-emerald-600" />;
      case 'fullstack': return <Layers className="w-5 h-5 text-purple-600" />;
      default: return <BookOpen className="w-5 h-5 text-slate-600" />;
    }
  };

  const calculateStageProgress = (techId: TechnologyId) => {
    const tech = TECH_NAVIGATION_CONFIG.find((t) => t.id === techId);
    if (!tech) return { completed: 0, total: 0, percentage: 0 };

    const topicIds: string[] = [];
    const extractIds = (items: any[]) => {
      items.forEach((item) => {
        if (item.topicId) topicIds.push(item.topicId);
        if (item.children) extractIds(item.children);
      });
    };
    extractIds(tech.groups);

    const total = topicIds.length;
    const completed = topicIds.filter((id) => progressMap[id] === 'completed').length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { completed, total, percentage };
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Roadmap Hero Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
          Recommended Learning Path
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 text-balance">
          Web Development Learning Roadmap
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Follow this proven, step-by-step curriculum to master web development from foundational document markup to full-stack cloud deployment.
        </p>

        {/* Path Guidance Kicker */}
        <div className="pt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full text-xs font-medium text-slate-700">
            <span>Learn this first</span>
            <span aria-hidden="true">→</span>
            <span>then this</span>
            <span aria-hidden="true">→</span>
            <span>then build full-stack</span>
          </div>
        </div>
      </div>

      {/* Connected Stages Pipeline */}
      <div className="relative space-y-8">
        {/* Continuous central connecting line on desktop */}
        <div className="hidden md:block absolute left-8 top-12 bottom-12 w-0.5 bg-slate-200" />

        {ROADMAP_STAGES.map((stage, index) => {
          const stats = calculateStageProgress(stage.id);
          const isCompleted = stats.percentage === 100;
          const isLast = index === ROADMAP_STAGES.length - 1;

          return (
            <div key={stage.id} className="relative md:pl-20">
              {/* Stage Marker Badge on the timeline */}
              <div className="hidden md:flex absolute left-0 top-6 w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 items-center justify-center shadow-xs z-10">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-slate-400 font-mono">STAGE</span>
                  <span className="text-lg font-extrabold text-slate-900 leading-none">
                    0{stage.stageNumber}
                  </span>
                </div>
              </div>

              {/* Stage Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-all space-y-6">
                {/* Stage Header */}
                <div className="flex items-start justify-between flex-wrap gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="md:hidden text-xs font-bold font-mono text-indigo-600">
                        STAGE 0{stage.stageNumber}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {getTechIcon(stage.id)}
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                          {stage.title}
                        </h2>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {stage.shortDescription}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-xs text-slate-400 block font-mono">
                        {stage.estimatedHours}
                      </span>
                      {stats.total > 0 && (
                        <span className="text-xs font-semibold text-slate-700">
                          {stats.completed}/{stats.total} topics ({stats.percentage}%)
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => onSelectTopic(stage.firstTopicId)}
                      className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
                    >
                      <span>Start Stage</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Learning Goal */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-3">
                  <Target className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                      Stage Goal
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      {stage.goal}
                    </p>
                  </div>
                </div>

                {/* Topics Grid */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Topics Covered in This Stage
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {stage.topics.map((topicName, tIdx) => (
                      <div
                        key={tIdx}
                        className="text-xs text-slate-700 bg-slate-50/80 px-3 py-2 rounded-lg border border-slate-100 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        <span className="truncate">{topicName}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Outcomes */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    What You Will Understand After Completing It
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {stage.keyOutcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Visual Flow Arrow between stages */}
              {!isLast && (
                <div className="flex items-center justify-center py-4 md:py-6">
                  <div className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-2xs text-slate-400 text-xs">
                    <ArrowDown className="w-3.5 h-3.5 text-indigo-600 animate-bounce" />
                    <span className="text-[11px] font-medium text-slate-500">Next Stage</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
