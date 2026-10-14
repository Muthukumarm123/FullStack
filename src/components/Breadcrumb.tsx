import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: string[];
  onNavigateHome?: () => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, onNavigateHome }) => {
  return (
    <nav aria-label="Breadcrumbs" className="mb-4">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 font-medium">
        <li>
          <button
            onClick={onNavigateHome}
            className="hover:text-slate-900 transition-colors focus-visible:outline-hidden focus-visible:underline"
          >
            Home
          </button>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li aria-hidden="true" className="text-slate-300">
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className={isLast ? 'text-slate-900 font-semibold truncate max-w-xs' : 'hover:text-slate-800'}>
                {item}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
