export type ProjectCategory = "organization" | "personal" | "freelance";
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl?: string;
  category: ProjectCategory;
};
