export type TechnologyId =
  | 'environment'
  | 'html'
  | 'css'
  | 'javascript'
  | 'react'
  | 'express'
  | 'fullstack'
  | 'reference';

export type CompletionStatus = 'not_started' | 'in_progress' | 'completed';

export interface CodeExample {
  title?: string;
  code: string;
  language: 'html' | 'css' | 'javascript' | 'jsx' | 'tsx' | 'bash' | 'json';
  explanationPoints?: string[];
  commonMistakes?: string[];
}

export interface SectionContent {
  id: string;
  heading: string;
  subheading?: string;
  paragraphs?: string[];
  bulletPoints?: string[];
  numberedList?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  callout?: {
    type: 'tip' | 'note' | 'warning' | 'best_practice';
    title: string;
    text: string;
  };
  diagram?: {
    type: 'box_model' | 'request_response' | 'dom_tree' | 'react_state_flow' | 'flexbox_axes' | 'custom';
    title: string;
    description: string;
    svgContent?: string;
  };
  codeExample?: CodeExample;
}

export interface MethodDetail {
  name: string;
  syntax: string;
  description: string;
  example: string;
  exampleLanguage: 'javascript' | 'html' | 'css' | 'jsx';
  explanation: string;
  commonMistake: string;
}

export interface TopicItem {
  id: string;
  slug: string;
  technology: TechnologyId;
  techName: string;
  category: string;
  subcategory?: string;
  title: string;
  shortDescription: string;
  estimatedMinutes: number;
  breadcrumbs: string[];
  sections: SectionContent[];
  methods?: MethodDetail[];
  importantDifferences?: {
    title: string;
    itemA: { label: string; explanation: string; code?: string };
    itemB: { label: string; explanation: string; code?: string };
    keyTakeaway: string;
  }[];
  keyPoints: string[];
  relatedTopicIds: string[];
  nextTopicId?: string;
  prevTopicId?: string;
}

export interface SidebarSubItem {
  id: string;
  title: string;
  topicId: string;
}

export interface SidebarGroup {
  id: string;
  title: string;
  topicId?: string; // If the group itself has a direct overview page
  children: (SidebarSubItem | SidebarNestedGroup)[];
}

export interface SidebarNestedGroup {
  id: string;
  title: string;
  topicId?: string;
  children: SidebarSubItem[];
}

export interface TechNavigation {
  id: TechnologyId;
  name: string;
  iconName: string;
  description: string;
  groups: (SidebarGroup | SidebarSubItem)[];
}

export interface RoadmapStage {
  stageNumber: number;
  id: TechnologyId;
  title: string;
  shortDescription: string;
  goal: string;
  topics: string[];
  keyOutcomes: string[];
  estimatedHours: string;
  firstTopicId: string;
}
