export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
  architecture: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  status: string;
  category: 'Computer Vision' | 'Security & Infrastructure' | 'Enterprise Web';
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  subtext: string;
  level: string;
  iconName: string;
  description: string;
  highlights: string[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'experience' | 'achievement' | 'future';
  badge?: string;
}

export interface Certification {
  id: string;
  issuer: string;
  title: string;
  credentialId?: string;
  score?: string;
  date: string;
  skills: string[];
}
