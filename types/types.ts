import { LucideIcon } from "lucide-react";

export interface HeaderLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
  isEmail?: boolean;
}

export interface PortfolioProject {
  technologies: string[];
  title: string;
  description: string;
  image: string;
  link?: string;
  features?: string[];
}

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Talent {
  name: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
