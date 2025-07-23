// Project interface for portfolio projects
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'desktop' | 'other';
  imageUrl: string;
  screenshots: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completedDate: string;
  challenges: string[];
  learnings: string[];
}

// Skill interface with categories and proficiency
export interface Skill {
  id: string;
  name: string;
  category: 'languages' | 'frameworks' | 'tools' | 'soft-skills';
  proficiency: 1 | 2 | 3 | 4 | 5; // 1 = Beginner, 5 = Expert
  yearsOfExperience?: number;
  relatedProjects?: string[]; // Project IDs
}

// Contact form interface for validation
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Navigation item interface
export interface NavItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

// Social media link interface
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

// Personal information interface
export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone?: string;
  location: string;
  profileImage?: string;
  resumeUrl?: string;
  socialLinks: SocialLink[];
}

// Education interface
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  gpa?: number;
  relevantCoursework: string[];
  achievements: string[];
}

// Component props interfaces
export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  className?: string;
}

export interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}