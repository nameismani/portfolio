import { AboutSection, HeroSection, ProjectsSection, SkillsSection, StarBackground, ThemeToggle } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
       {/* Theme Toggle */}
      <ThemeToggle />
     {/* Background Effects */}
      <StarBackground />
   <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        {/* <ContactSection /> */}
      </main>
    </div>
  );
}
