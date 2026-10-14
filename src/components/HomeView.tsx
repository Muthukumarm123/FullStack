import React from 'react';
import {
  ArrowRight,
  BookOpen,
  Code2,
  Palette,
  Braces,
  Atom,
  Server,
  Layers,
  Sparkles,
  CheckCircle2,
  Map
} from 'lucide-react';
import { TECH_NAVIGATION_CONFIG } from '../content/index';
import { TechnologyId, CompletionStatus } from '../types/curriculum';

interface HomeViewProps {
  onNavigateRoadmap: () => void;
  onNavigateTopic: (topicId: string) => void;
  progressMap: Record<string, CompletionStatus>;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigateRoadmap,
  onNavigateTopic,
  progressMap
}) => {
  const getTechIcon = (id: TechnologyId) => {
    switch (id) {
      case 'environment': return <Code2 className="w-6 h-6 text-emerald-500" />;
      case 'html': return <Code2 className="w-6 h-6 text-orange-500" />;
      case 'css': return <Palette className="w-6 h-6 text-blue-500" />;
      case 'javascript': return <Braces className="w-6 h-6 text-amber-500" />;
      case 'react': return <Atom className="w-6 h-6 text-cyan-500" />;
      case 'express': return <Server className="w-6 h-6 text-emerald-600" />;
      case 'fullstack': return <Layers className="w-6 h-6 text-purple-600" />;
      default: return <BookOpen className="w-6 h-6 text-slate-600" />;
    }
  };

  const popularTopics = [
    {
      id: 'js-primitive-string',
      title: 'JavaScript: Strings & String Methods',
      category: 'JavaScript · Data Types',
      desc: 'Immutable text primitives, template literals, and in-depth method breakdowns (slice, trim, includes).'
    },
    {
      id: 'css-layout-flexbox',
      title: 'CSS: Flexbox 1D Layout Engine',
      category: 'CSS · Layout',
      desc: 'Mastering main axis vs cross axis alignment, justify-content, and align-items.'
    },
    {
      id: 'react-state',
      title: 'React: State & useState Hook',
      category: 'React · State',
      desc: 'Component memory, updater functions, and declarative UI re-rendering cycles.'
    },
    {
      id: 'css-box-model-content',
      title: 'CSS: The Box Model & box-sizing',
      category: 'CSS · Box Model',
      desc: 'Concentric geometry of Content, Padding, Border, and Margin without layout overflow bugs.'
    },
    {
      id: 'express-middleware',
      title: 'Express: Middleware & Error Pipelines',
      category: 'Express.js · Middleware',
      desc: 'The request-response chain, custom logging, authentication guards, and centralized error handling.'
    },
    {
      id: 'html-semantic-html',
      title: 'HTML: Semantic Web Architecture',
      category: 'HTML · Basics',
      desc: 'Structuring documents with main, nav, article, and section for screen reader accessibility and SEO.'
    },
    {
      id: 'react-environment-setup',
      title: 'React: Project Setup & Where Code Lives',
      category: 'React · Introduction',
      desc: 'Step-by-step Vite scaffolding, understanding App.tsx, running the local dev server at localhost:5173, and live editing.'
    },
    {
      id: 'express-environment-setup',
      title: 'Express: Backend Setup & Testing',
      category: 'Express.js · Introduction',
      desc: 'Where backend code runs (Node.js in terminal, NOT browser!), package.json config, nodemon, and testing endpoints with curl and Postman.'
    },
    {
      id: 'env-react-express-local-setup',
      title: 'Connecting React & Express Locally',
      category: 'Dev Environment · Full-Stack',
      desc: 'Running React (port 5173) and Express (port 5000) concurrently using two terminals and configuring Vite API proxying.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Structured Web Development Reference & Learning</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 text-balance leading-tight">
          Learn Web Development from First Principles
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed text-balance">
          A modern, encyclopedia-grade documentation platform teaching the core technologies of the web. Clear explanations, practical code examples, and structured roadmaps—without the noise.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex items-center justify-center flex-wrap gap-4">
          <button
            onClick={onNavigateRoadmap}
            className="px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-xs flex items-center gap-2"
          >
            <Map className="w-4 h-4" />
            <span>Start Learning with the Roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigateTopic('js-primitive-string')}
            className="px-5 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors shadow-2xs"
          >
            Explore String Lesson
          </button>
        </div>
      </section>

      {/* Recommended Learning Path Strip */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Recommended Sequential Progression
          </span>
          <button
            onClick={onNavigateRoadmap}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1"
          >
            <span>View Full Interactive Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center justify-between overflow-x-auto gap-3 py-2 text-xs font-semibold text-slate-700">
          <div className="px-3.5 py-2 rounded-lg bg-orange-50 border border-orange-200 text-orange-950 whitespace-nowrap">
            1. HTML
          </div>
          <span className="text-slate-300">→</span>
          <div className="px-3.5 py-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-950 whitespace-nowrap">
            2. CSS
          </div>
          <span className="text-slate-300">→</span>
          <div className="px-3.5 py-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-950 whitespace-nowrap">
            3. JavaScript
          </div>
          <span className="text-slate-300">→</span>
          <div className="px-3.5 py-2 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-950 whitespace-nowrap">
            4. React
          </div>
          <span className="text-slate-300">→</span>
          <div className="px-3.5 py-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 whitespace-nowrap">
            5. Express.js
          </div>
          <span className="text-slate-300">→</span>
          <div className="px-3.5 py-2 rounded-lg bg-purple-50 border border-purple-200 text-purple-950 whitespace-nowrap">
            6. Full Stack
          </div>
        </div>
      </section>

      {/* Main Technology Modules Cards */}
      <section className="space-y-6">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Core Curriculum Technologies
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Deep-dive lessons organized into hierarchical topics and subtopics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_NAVIGATION_CONFIG.filter((t) => t.id !== 'reference').map((tech) => {
            // Safely resolve the first topic in this technology category
            const firstGroup = tech.groups[0] as any;
            const firstChild = firstGroup?.children?.[0];
            const firstTopic =
              firstChild?.topicId ||
              firstChild?.children?.[0]?.topicId ||
              firstGroup?.topicId;

            return (
              <div
                key={tech.id}
                onClick={() => firstTopic && onNavigateTopic(firstTopic)}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getTechIcon(tech.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600">
                  <span>Browse Lessons</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Popular Topics Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Explore Essential Lessons
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Jump directly into popular beginner and intermediate web dev concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTopics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => onNavigateTopic(topic.id)}
              className="p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs transition-all cursor-pointer group space-y-2"
            >
              <span className="text-[11px] font-semibold text-indigo-600 block uppercase tracking-wider">
                {topic.category}
              </span>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {topic.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                {topic.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
