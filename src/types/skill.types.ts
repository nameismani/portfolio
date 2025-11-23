export type SkillCategory = "frontend" | "backend" | "tools" | "all";

export type Skill = {
  name: string;
  level: number;
  category: Exclude<SkillCategory, "all">;
};
