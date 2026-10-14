import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { CodeExample } from '../types/curriculum';

interface CodeBlockProps {
  example: CodeExample;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ example }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(example.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const lines = example.code.split('\n');

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xs">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-mono text-slate-400 uppercase tracking-wider font-semibold">
            {example.language}
          </span>
          {example.title && (
            <>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300 font-medium">{example.title}</span>
            </>
          )}
        </div>
        <button
          onClick={handleCopy}
          aria-label="Copy code snippet"
          className="flex items-center gap-1.5 px-2.5 py-1 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-md transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed text-slate-100 flex">
          {/* Line Numbers */}
          <span className="select-none text-slate-600 text-right pr-4 border-r border-slate-800/80 mr-4 font-mono tabular-nums inline-block">
            {lines.map((_, i) => (
              <span key={i} className="block leading-relaxed">
                {i + 1}
              </span>
            ))}
          </span>
          {/* Code Text */}
          <code className="block flex-1 leading-relaxed font-mono whitespace-pre">
            {example.code}
          </code>
        </pre>
      </div>

      {/* Structured Explanations Underneath (Outside code comments) */}
      {example.explanationPoints && example.explanationPoints.length > 0 && (
        <div className="p-4 bg-slate-950/70 border-t border-slate-800/80 text-xs text-slate-300">
          <p className="font-semibold text-slate-200 mb-2 uppercase tracking-wider text-[11px]">
            Code Explanation
          </p>
          <ul className="space-y-1.5 list-disc list-inside text-slate-300 leading-normal">
            {example.explanationPoints.map((point, idx) => (
              <li key={idx} className="leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Common Mistakes Warning */}
      {example.commonMistakes && example.commonMistakes.length > 0 && (
        <div className="p-4 bg-amber-950/20 border-t border-amber-900/30 text-xs text-amber-200/90">
          <p className="font-semibold text-amber-300 mb-1.5 uppercase tracking-wider text-[11px]">
            Common Mistake to Avoid
          </p>
          <ul className="space-y-1 list-disc list-inside leading-relaxed text-amber-200/80">
            {example.commonMistakes.map((mistake, idx) => (
              <li key={idx}>{mistake}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
