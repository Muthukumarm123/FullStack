import React from 'react';
import { ArrowRight, Server, Globe, Cpu, RefreshCw, MoveHorizontal, MoveVertical } from 'lucide-react';

interface DiagramBoxProps {
  type: 'box_model' | 'request_response' | 'dom_tree' | 'react_state_flow' | 'flexbox_axes' | 'custom';
  title: string;
  description: string;
  svgContent?: string;
}

export const DiagramBox: React.FC<DiagramBoxProps> = ({ type, title, description }) => {
  return (
    <div className="my-8 rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
      <div className="mb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 block mb-0.5">
          Visual Architecture Diagram
        </span>
        <h4 className="text-base font-semibold text-slate-900">{title}</h4>
        <p className="text-xs text-slate-500 mt-0.5">{description}</p>
      </div>

      <div className="bg-slate-50/70 border border-slate-200/80 rounded-lg p-6 flex items-center justify-center">
        {type === 'box_model' && (
          <div className="w-full max-w-lg select-none">
            {/* Margin Box */}
            <div className="border border-dashed border-amber-400 bg-amber-50/40 rounded-xl p-6 text-center relative">
              <span className="absolute top-2 left-3 text-[11px] font-mono font-semibold text-amber-700 uppercase">
                Margin (External Spacing)
              </span>

              {/* Border Box */}
              <div className="border-2 border-slate-700 bg-slate-100/60 rounded-lg p-6 text-center relative mt-2">
                <span className="absolute top-2 left-3 text-[11px] font-mono font-semibold text-slate-700 uppercase">
                  Border (1px - 4px)
                </span>

                {/* Padding Box */}
                <div className="border border-emerald-300 bg-emerald-50/50 rounded-md p-6 text-center relative mt-2">
                  <span className="absolute top-2 left-3 text-[11px] font-mono font-semibold text-emerald-800 uppercase">
                    Padding (Internal Clearance)
                  </span>

                  {/* Content Box */}
                  <div className="border border-indigo-400 bg-indigo-50 rounded p-4 text-center mt-2 shadow-xs">
                    <span className="text-xs font-mono font-bold text-indigo-900 block">
                      Content Box (width × height)
                    </span>
                    <span className="text-[11px] text-indigo-700">
                      Text, images, child elements
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {type === 'flexbox_axes' && (
          <div className="w-full max-w-lg space-y-4 select-none">
            <div className="relative border border-slate-300 bg-white rounded-lg p-5">
              <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
                <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <MoveHorizontal className="w-4 h-4 text-indigo-600" />
                  Main Axis: <code className="text-indigo-600 font-mono">justify-content</code>
                </span>
                <span className="text-xs text-slate-500 font-mono">flex-direction: row</span>
              </div>
              <div className="flex items-center justify-between gap-3 h-16 bg-slate-100 rounded-md p-3">
                <div className="bg-indigo-600 text-white text-xs font-mono px-3 py-2 rounded shadow-xs">
                  Item 1
                </div>
                <div className="bg-indigo-600 text-white text-xs font-mono px-3 py-2 rounded shadow-xs">
                  Item 2
                </div>
                <div className="bg-indigo-600 text-white text-xs font-mono px-3 py-2 rounded shadow-xs">
                  Item 3
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                  <MoveVertical className="w-4 h-4 text-emerald-600" />
                  Cross Axis: <code className="text-emerald-700 font-mono">align-items</code>
                </span>
                <span className="text-[11px]">stretch · center · start · end</span>
              </div>
            </div>
          </div>
        )}

        {type === 'request_response' && (
          <div className="w-full max-w-lg select-none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
              {/* Client */}
              <div className="bg-white border border-slate-200 rounded-lg p-3 text-center shadow-xs">
                <Globe className="w-6 h-6 text-indigo-600 mx-auto mb-1" />
                <h5 className="text-xs font-bold text-slate-900">Client (Browser)</h5>
                <p className="text-[10px] text-slate-500 mt-0.5">React SPA</p>
                <div className="mt-2 text-[10px] bg-slate-100 rounded p-1 font-mono text-slate-700">
                  fetch('/api/users')
                </div>
              </div>

              {/* Pipeline Arrow */}
              <div className="flex flex-col items-center justify-center text-center px-1">
                <div className="flex items-center gap-1 text-[11px] font-mono text-indigo-600 font-medium">
                  <span>GET Request</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
                <div className="w-full border-t border-dashed border-slate-300 my-1"></div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-700 font-medium">
                  <span>JSON 200 OK</span>
                  <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                </div>
              </div>

              {/* Express Server */}
              <div className="bg-white border border-slate-200 rounded-lg p-3 text-center shadow-xs">
                <Server className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                <h5 className="text-xs font-bold text-slate-900">Express Server</h5>
                <p className="text-[10px] text-slate-500 mt-0.5">Node.js Runtime</p>
                <div className="mt-2 text-[10px] bg-slate-100 rounded p-1 font-mono text-slate-700">
                  res.status(200).json(...)
                </div>
              </div>
            </div>
          </div>
        )}

        {type === 'react_state_flow' && (
          <div className="w-full max-w-lg select-none">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center text-xs">
              <div className="bg-white border border-slate-200 rounded-lg p-3 w-full sm:w-1/3 shadow-xs">
                <span className="font-mono text-[10px] text-indigo-600 font-bold block mb-1">
                  1. TRIGGER
                </span>
                <span className="font-semibold text-slate-800 text-xs block">User Action</span>
                <span className="text-[11px] text-slate-500">onClick or input event</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 rotate-90 sm:rotate-0 shrink-0" />
              <div className="bg-white border border-slate-200 rounded-lg p-3 w-full sm:w-1/3 shadow-xs">
                <span className="font-mono text-[10px] text-indigo-600 font-bold block mb-1">
                  2. UPDATE
                </span>
                <span className="font-semibold text-slate-800 text-xs block">setState()</span>
                <span className="text-[11px] text-slate-500">Schedules re-render</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 rotate-90 sm:rotate-0 shrink-0" />
              <div className="bg-white border border-slate-200 rounded-lg p-3 w-full sm:w-1/3 shadow-xs">
                <span className="font-mono text-[10px] text-emerald-600 font-bold block mb-1">
                  3. RECONCILE
                </span>
                <span className="font-semibold text-slate-800 text-xs block">DOM Patched</span>
                <span className="text-[11px] text-slate-500">Minimal diff applied</span>
              </div>
            </div>
          </div>
        )}

        {type === 'dom_tree' && (
          <div className="w-full max-w-md select-none text-xs font-mono">
            <div className="border border-slate-200 bg-white rounded-lg p-3 text-center font-bold text-slate-800">
              Document
            </div>
            <div className="w-0.5 h-3 bg-slate-300 mx-auto"></div>
            <div className="border border-slate-200 bg-white rounded-lg p-2 text-center font-semibold text-indigo-700">
              &lt;html&gt;
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-3 bg-slate-300"></div>
                <div className="border border-slate-200 bg-slate-100 rounded p-2 w-full text-center text-slate-700">
                  &lt;head&gt;
                  <span className="block text-[10px] text-slate-400">&lt;title&gt;, &lt;meta&gt;</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-3 bg-slate-300"></div>
                <div className="border border-slate-200 bg-emerald-50 rounded p-2 w-full text-center text-emerald-800">
                  &lt;body&gt;
                  <span className="block text-[10px] text-emerald-600">&lt;main&gt;, &lt;h1&gt;, &lt;p&gt;</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {type === 'custom' && (
          <div className="w-full max-w-lg select-none text-center py-2">
            <div className="flex items-center justify-center gap-4 text-xs font-mono text-slate-700">
              <span className="bg-white border border-slate-200 rounded px-3 py-1.5 shadow-xs">
                React Frontend
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
              <span className="bg-white border border-slate-200 rounded px-3 py-1.5 shadow-xs">
                Express REST API
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
              <span className="bg-white border border-slate-200 rounded px-3 py-1.5 shadow-xs">
                Database Store
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
