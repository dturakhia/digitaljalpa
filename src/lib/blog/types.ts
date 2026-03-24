export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: 'Comparison' | 'How-To' | 'Tool Review' | 'Workflow' | 'Opinion';
  tags: string[];
  content: string; // HTML
}
