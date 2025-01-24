export type Theme = 'light' | 'dark';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
}