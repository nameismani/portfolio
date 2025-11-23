import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  Footer,
  HeroSection,
  ProjectsSection,
  SkillsSection,
  StarBackground,
  ThemeToggle,
} from "@/components";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Toaster />
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
