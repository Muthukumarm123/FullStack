import React from 'react';
import { Info, AlertTriangle, Lightbulb, CheckCircle2 } from 'lucide-react';

interface CalloutBoxProps {
  type: 'tip' | 'note' | 'warning' | 'best_practice';
  title: string;
  text: string;
}

export const CalloutBox: React.FC<CalloutBoxProps> = ({ type, title, text }) => {
  const getStyles = () => {
    switch (type) {
      case 'tip':
        return {
          container: 'bg-emerald-50/60 border border-emerald-200/80 text-emerald-950',
          icon: <Lightbulb className="w-5 h-5 text-emerald-600 shrink-0" />,
          titleColor: 'text-emerald-900',
          badgeText: 'Pro Tip'
        };
      case 'warning':
        return {
          container: 'bg-rose-50/60 border border-rose-200/80 text-rose-950',
          icon: <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />,
          titleColor: 'text-rose-900',
          badgeText: 'Warning'
        };
      case 'best_practice':
        return {
          container: 'bg-indigo-50/60 border border-indigo-200/80 text-indigo-950',
          icon: <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />,
          titleColor: 'text-indigo-900',
          badgeText: 'Best Practice'
        };
      case 'note':
      default:
        return {
          container: 'bg-slate-100/70 border border-slate-200 text-slate-900',
          icon: <Info className="w-5 h-5 text-slate-600 shrink-0" />,
          titleColor: 'text-slate-900',
          badgeText: 'Note'
        };
    }
  };

  const styles = getStyles();

  return (
    <div className={`my-6 p-4 rounded-xl ${styles.container} transition-all`}>
      <div className="flex items-start gap-3">
        {styles.icon}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {styles.badgeText}
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <h4 className={`text-sm font-semibold ${styles.titleColor}`}>
              {title}
            </h4>
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
