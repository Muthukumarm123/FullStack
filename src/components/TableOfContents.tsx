import React, { useEffect, useState } from 'react';
import { SectionContent, MethodDetail } from '../types/curriculum';

interface TableOfContentsProps {
  sections: SectionContent[];
  methods?: MethodDetail[];
  importantDifferences?: { title: string }[];
  keyPoints?: string[];
  relatedTopicIds?: string[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  sections,
  methods,
  importantDifferences,
  keyPoints,
  relatedTopicIds
}) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h2[id], h3[id]');
      let currentActive = '';
      const scrollY = window.scrollY + 120;

      headings.forEach((heading) => {
        const top = (heading as HTMLElement).offsetTop;
        if (scrollY >= top) {
          currentActive = heading.id;
        }
      });

      if (currentActive) {
        setActiveId(currentActive);
      } else if (sections.length > 0) {
        setActiveId(sections[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <aside className="w-64 shrink-0 hidden xl:block self-start sticky top-24 pl-8 border-l border-slate-200/80 text-xs">
      <div className="font-semibold uppercase tracking-wider text-slate-400 mb-3 text-[11px]">
        On this page
      </div>

      <nav className="space-y-1">
        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`block w-full text-left py-1 px-2 rounded-md transition-colors leading-snug truncate ${
                isActive
                  ? 'text-indigo-600 font-semibold bg-indigo-50/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {section.heading}
            </button>
          );
        })}

        {methods && methods.length > 0 && (
          <button
            onClick={() => scrollToSection('string-methods-section')}
            className={`block w-full text-left py-1 px-2 rounded-md transition-colors leading-snug truncate ${
              activeId === 'string-methods-section'
                ? 'text-indigo-600 font-semibold bg-indigo-50/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Methods Breakdown
          </button>
        )}

        {importantDifferences && importantDifferences.length > 0 && (
          <button
            onClick={() => scrollToSection('important-differences-section')}
            className={`block w-full text-left py-1 px-2 rounded-md transition-colors leading-snug truncate ${
              activeId === 'important-differences-section'
                ? 'text-indigo-600 font-semibold bg-indigo-50/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Key Differences
          </button>
        )}

        {keyPoints && keyPoints.length > 0 && (
          <button
            onClick={() => scrollToSection('key-points-section')}
            className={`block w-full text-left py-1 px-2 rounded-md transition-colors leading-snug truncate ${
              activeId === 'key-points-section'
                ? 'text-indigo-600 font-semibold bg-indigo-50/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Key Points Summary
          </button>
        )}

        {relatedTopicIds && relatedTopicIds.length > 0 && (
          <button
            onClick={() => scrollToSection('related-topics-section')}
            className={`block w-full text-left py-1 px-2 rounded-md transition-colors leading-snug truncate ${
              activeId === 'related-topics-section'
                ? 'text-indigo-600 font-semibold bg-indigo-50/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Related Topics
          </button>
        )}
      </nav>
    </aside>
  );
};
