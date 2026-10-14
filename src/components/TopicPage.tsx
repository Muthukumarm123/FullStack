import React from 'react';
import {
  Clock,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { TopicItem, CompletionStatus } from '../types/curriculum';
import { Breadcrumb } from './Breadcrumb';
import { CodeBlock } from './CodeBlock';
import { CalloutBox } from './CalloutBox';
import { DiagramBox } from './DiagramBox';
import { TableOfContents } from './TableOfContents';
import { getTopicById } from '../content/index';

interface TopicPageProps {
  topic: TopicItem;
  status: CompletionStatus;
  onStatusChange: (topicId: string, status: CompletionStatus) => void;
  onNavigateTopic: (topicId: string) => void;
  onNavigateHome: () => void;
}

export const TopicPage: React.FC<TopicPageProps> = ({
  topic,
  status,
  onStatusChange,
  onNavigateTopic,
  onNavigateHome
}) => {
  const prevTopic = topic.prevTopicId ? getTopicById(topic.prevTopicId) : undefined;
  const nextTopic = topic.nextTopicId ? getTopicById(topic.nextTopicId) : undefined;

  return (
    <div className="flex-1 min-w-0 max-w-7xl mx-auto px-4 sm:px-8 py-8 flex items-start gap-12">
      {/* Main Content Column */}
      <article className="flex-1 min-w-0">
        {/* Breadcrumb Trail */}
        <Breadcrumb items={topic.breadcrumbs} onNavigateHome={onNavigateHome} />

        {/* Topic Header */}
        <header className="pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-2">
            <span className="text-indigo-600 font-semibold">{topic.techName}</span>
            <span aria-hidden="true">·</span>
            <span>{topic.category}</span>
            {topic.subcategory && (
              <>
                <span aria-hidden="true">·</span>
                <span>{topic.subcategory}</span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5" />
              {topic.estimatedMinutes} min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 text-balance mb-3">
            {topic.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {topic.shortDescription}
          </p>

          {/* Interactive Status Selector (Functional Filter Tabs) */}
          <div className="mt-5 flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Progress Status:
              </span>
              <div className="inline-flex p-1 bg-slate-100 rounded-lg text-xs font-medium">
                <button
                  onClick={() => onStatusChange(topic.id, 'not_started')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    status === 'not_started'
                      ? 'bg-white text-slate-900 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Not started
                </button>
                <button
                  onClick={() => onStatusChange(topic.id, 'in_progress')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    status === 'in_progress'
                      ? 'bg-amber-100 text-amber-900 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  In progress
                </button>
                <button
                  onClick={() => onStatusChange(topic.id, 'completed')}
                  className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
                    status === 'completed'
                      ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Completed</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Topic Sections */}
        <div className="py-8 space-y-10">
          {topic.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                {section.heading}
              </h2>

              {section.subheading && (
                <h3 className="text-base font-semibold text-slate-700">
                  {section.subheading}
                </h3>
              )}

              {/* Paragraphs */}
              {section.paragraphs && section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-base text-slate-700 leading-relaxed">
                  {para}
                </p>
              ))}

              {/* Bullet Points */}
              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="space-y-2 list-disc list-outside ml-5 text-base text-slate-700 leading-relaxed">
                  {section.bulletPoints.map((point, bIdx) => (
                    <li key={bIdx}>{point}</li>
                  ))}
                </ul>
              )}

              {/* Numbered List */}
              {section.numberedList && section.numberedList.length > 0 && (
                <ol className="space-y-2 list-decimal list-outside ml-5 text-base text-slate-700 leading-relaxed">
                  {section.numberedList.map((item, nIdx) => (
                    <li key={nIdx}>{item}</li>
                  ))}
                </ol>
              )}

              {/* Tabular Dataset */}
              {section.table && (
                <div className="my-6 overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm text-slate-700 border-collapse">
                    <thead className="bg-slate-50 text-xs font-semibold text-slate-600 border-b border-slate-200 uppercase tracking-wider">
                      <tr>
                        {section.table.headers.map((th, hIdx) => (
                          <th key={hIdx} className="px-4 py-3">
                            {th}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/70 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-4 py-3 font-normal">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Visual Architecture Diagram */}
              {section.diagram && (
                <DiagramBox
                  type={section.diagram.type}
                  title={section.diagram.title}
                  description={section.diagram.description}
                  svgContent={section.diagram.svgContent}
                />
              )}

              {/* Callout Box */}
              {section.callout && (
                <CalloutBox
                  type={section.callout.type}
                  title={section.callout.title}
                  text={section.callout.text}
                />
              )}

              {/* Code Example */}
              {section.codeExample && (
                <CodeBlock example={section.codeExample} />
              )}
            </section>
          ))}

          {/* Methods Breakdown (Detailed breakdown per method as required by user) */}
          {topic.methods && topic.methods.length > 0 && (
            <section id="string-methods-section" className="scroll-mt-24 pt-6 border-t border-slate-200 space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">
                  Methods In-Depth Breakdown
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  Every method below includes what it does, its formal syntax, a verified example, a line-by-line breakdown, and the most common developer mistake.
                </p>
              </div>

              <div className="space-y-8">
                {topic.methods.map((method, mIdx) => (
                  <div key={mIdx} className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <h3 className="text-lg font-bold font-mono text-indigo-600">
                        .{method.name}
                      </h3>
                      <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                        {method.syntax}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                        1. What it does
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {method.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                        2. Code Example
                      </h4>
                      <CodeBlock
                        example={{
                          language: method.exampleLanguage,
                          code: method.example
                        }}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <span className="font-semibold text-slate-800 uppercase tracking-wider block mb-1">
                          3. Explanation of Example
                        </span>
                        <p className="text-slate-600 leading-relaxed">
                          {method.explanation}
                        </p>
                      </div>

                      <div className="bg-amber-50/70 p-3 rounded-lg border border-amber-200/60">
                        <span className="font-semibold text-amber-900 uppercase tracking-wider block mb-1">
                          4. Common Mistake
                        </span>
                        <p className="text-amber-800 leading-relaxed">
                          {method.commonMistake}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Important Differences */}
          {topic.importantDifferences && topic.importantDifferences.length > 0 && (
            <section id="important-differences-section" className="scroll-mt-24 pt-6 border-t border-slate-200 space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Important Differences
              </h2>

              {topic.importantDifferences.map((diff, dIdx) => (
                <div key={dIdx} className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {diff.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/70">
                      <span className="text-xs font-bold text-slate-700 block mb-2 font-mono">
                        {diff.itemA.label}
                      </span>
                      <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                        {diff.itemA.explanation}
                      </p>
                      {diff.itemA.code && (
                        <pre className="p-2.5 rounded bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto">
                          {diff.itemA.code}
                        </pre>
                      )}
                    </div>

                    <div className="p-4 rounded-lg bg-indigo-50/50 border border-indigo-200/70">
                      <span className="text-xs font-bold text-indigo-900 block mb-2 font-mono">
                        {diff.itemB.label}
                      </span>
                      <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                        {diff.itemB.explanation}
                      </p>
                      {diff.itemB.code && (
                        <pre className="p-2.5 rounded bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto">
                          {diff.itemB.code}
                        </pre>
                      )}
                    </div>
                  </div>

                  <div className="text-xs font-medium text-slate-600 bg-slate-100/70 p-3 rounded-lg">
                    <span className="font-bold text-slate-800">Key Takeaway: </span>
                    {diff.keyTakeaway}
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Key Points Summary */}
          {topic.keyPoints && topic.keyPoints.length > 0 && (
            <section id="key-points-section" className="scroll-mt-24 pt-6 border-t border-slate-200 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                <span>Key Points Summary</span>
              </h2>

              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80">
                <ul className="space-y-2 list-disc list-outside ml-5 text-sm text-slate-700 leading-relaxed">
                  {topic.keyPoints.map((point, kIdx) => (
                    <li key={kIdx} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Related Topics */}
          {topic.relatedTopicIds && topic.relatedTopicIds.length > 0 && (
            <section id="related-topics-section" className="scroll-mt-24 pt-6 border-t border-slate-200 space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-slate-900">
                Related Topics
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {topic.relatedTopicIds.map((relId) => {
                  const relTopic = getTopicById(relId);
                  if (!relTopic) return null;

                  return (
                    <button
                      key={relId}
                      onClick={() => onNavigateTopic(relId)}
                      className="p-3 text-left rounded-lg border border-slate-200 bg-white hover:border-indigo-400 hover:shadow-xs transition-all group"
                    >
                      <span className="text-[11px] font-semibold text-indigo-600 block uppercase tracking-wider mb-1">
                        {relTopic.techName}
                      </span>
                      <h4 className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors line-clamp-1">
                        {relTopic.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {relTopic.shortDescription}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        {/* Previous & Next Navigation Buttons */}
        <footer className="pt-8 border-t border-slate-200 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevTopic ? (
            <button
              onClick={() => onNavigateTopic(prevTopic.id)}
              className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs transition-all text-left group"
            >
              <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:-translate-x-1 transition-transform" />
              <div className="min-w-0">
                <span className="text-xs text-slate-400 block font-medium">Previous Topic</span>
                <span className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors truncate block">
                  {prevTopic.title}
                </span>
              </div>
            </button>
          ) : (
            <div />
          )}

          {nextTopic ? (
            <button
              onClick={() => onNavigateTopic(nextTopic.id)}
              className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-xs transition-all text-right group sm:col-start-2"
            >
              <div className="min-w-0 flex-1">
                <span className="text-xs text-slate-400 block font-medium">Next Topic</span>
                <span className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors truncate block">
                  {nextTopic.title}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-indigo-600 group-hover:translate-x-1 transition-transform ml-3 shrink-0" />
            </button>
          ) : (
            <div />
          )}
        </footer>
      </article>

      {/* Right Column: Table of Contents ("On this page") */}
      <TableOfContents
        sections={topic.sections}
        methods={topic.methods}
        importantDifferences={topic.importantDifferences}
        keyPoints={topic.keyPoints}
        relatedTopicIds={topic.relatedTopicIds}
      />
    </div>
  );
};
