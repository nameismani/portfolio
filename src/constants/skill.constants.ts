import { Skill, SkillCategory } from "@/types/skill.types";

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5/CSS3", level: 90, category: "frontend" },
  { name: "JavaScript DOM", level: 90, category: "frontend" },
  { name: "Bootstrap", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "JQuery", level: 80, category: "frontend" },
  { name: "React Native", level: 60, category: "frontend" },

  // Backend
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Express", level: 90, category: "backend" },
  { name: "MongoDB", level: 90, category: "backend" },
  { name: "MySQL", level: 85, category: "backend" },
  { name: "TypeORM", level: 90, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "Flask", level: 60, category: "backend" },
  { name: "FastAPI", level: 85, category: "backend" },
  { name: "Razorpay", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "AWS", level: 65, category: "tools" },
  { name: "Linux", level: 65, category: "tools" },
  { name: "TanStack Query", level: 85, category: "tools" },
  { name: "React Hook Form", level: 75, category: "tools" },
  { name: "Framer Motion", level: 80, category: "tools" },
  { name: "AI/ML", level: 50, category: "tools" },
];

export const categories: SkillCategory[] = [
  "all",
  "frontend",
  "backend",
  "tools",
];
