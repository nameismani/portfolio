import React, { useState } from "react";
import {
  User,
  Book,
  Monitor,
  Cpu,
  Code2,
  Briefcase,
  Award,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { skills } from "@/constants/skill.constants";
import { projects } from "@/constants/project.contacts";
import { experiences } from "@/constants/experience.contsatns";
import { githubUrl, linkedinUrl } from "@/constants/common.constant";

const getSkillLabel = (level: number) => {
  if (level >= 85) return "Professional";
  if (level >= 65) return "Intermediate";
  if (level >= 50) return "Beginner";
  return "Basics";
};

export default function Finder() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="flex h-full text-black font-sans selection:bg-blue-100">
      {/* Sidebar - Mac Style */}
      <div className="w-56 bg-gray-100/80 backdrop-blur-xl p-3 flex flex-col gap-1 border-r border-gray-300/50 pt-4">
        <div className="text-xs font-semibold text-gray-500 px-3 py-1 mb-1">
          Favorites
        </div>
        <SidebarItem
          icon={User}
          label="About Me"
          active={activeSection === "about"}
          onClick={() => setActiveSection("about")}
        />
        <SidebarItem
          icon={Code2}
          label="Skills & Tech"
          active={activeSection === "skills"}
          onClick={() => setActiveSection("skills")}
        />
        <SidebarItem
          icon={Briefcase}
          label="Projects"
          active={activeSection === "projects"}
          onClick={() => setActiveSection("projects")}
        />
        <SidebarItem
          icon={Award}
          label="Experience"
          active={activeSection === "experience"}
          onClick={() => setActiveSection("experience")}
        />
        <div className="text-xs font-semibold text-gray-500 px-3 py-1 mt-4 mb-1">
          System
        </div>
        <SidebarItem icon={Monitor} label="Applications" active={false} />
        <SidebarItem icon={Cpu} label="System Info" active={false} />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white p-8 overflow-y-auto scrollbar-hide">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h1 className="text-3xl font-bold mb-2 tracking-tight">
            Manikandan B
          </h1>
          <p className="text-gray-600 font-medium flex items-center gap-2">
            Full Stack Developer
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
            Chennai, Tamil Nadu
          </p>
          <div className="flex gap-4 mt-4">
            <SocialLink icon={Github} label="GitHub" href={githubUrl} />
            <SocialLink icon={Linkedin} label="LinkedIn" href={linkedinUrl} />
            <SocialLink
              icon={Mail}
              label="Email"
              href="mailto:nameismani19@gmail.com"
            />
          </div>
        </div>

        {/* Dynamic Content */}
        {activeSection === "about" && (
          <div className="space-y-8 max-w-4xl">
            <Section title="Bio">
              <p className="text-gray-700 leading-relaxed text-lg">
                MERN Stack Developer with 2+ years of experience in startup and
                product environments. Passionate about building scalable web
                applications across frontend and backend, and continuously
                learning new technologies. I thrive in solving challenging tasks
                and creating interactive, user-focused solutions.
              </p>
            </Section>
            <Section title="Education">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-lg text-gray-900">
                      Panimalar Engineering College
                    </div>
                    <div className="text-gray-600">
                      BE Mechanical Engineering
                    </div>
                  </div>
                  <span className="text-sm font-mono bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    2018 - 2022
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Summary: Strong foundation in engineering, now focused on web
                  development and software solutions.
                </div>
              </div>
            </Section>
          </div>
        )}

        {activeSection === "skills" && (
          <Section title="Technical Arsenal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === "frontend")
                    .map((s) => (
                      <SkillBadge
                        key={s.name}
                        name={s.name}
                        label={getSkillLabel(s.level)}
                      />
                    ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === "backend")
                    .map((s) => (
                      <SkillBadge
                        key={s.name}
                        name={s.name}
                        label={getSkillLabel(s.level)}
                      />
                    ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === "tools")
                    .map((s) => (
                      <SkillBadge
                        key={s.name}
                        name={s.name}
                        label={getSkillLabel(s.level)}
                      />
                    ))}
                </div>
              </div>
            </div>
          </Section>
        )}

        {activeSection === "projects" && (
          <Section title="Projects">
            {projects.map((proj, i) => (
              <ProjectCard
                key={i}
                title={proj.title}
                tech={proj.tags.join(", ")}
                desc={proj.description}
                demoUrl={proj.demoUrl}
                githubUrl={proj.githubUrl}
              />
            ))}
            <div className="mt-6 text-center text-gray-500">
              For more project details, visit my Personal Assistant Bot:{" "}
              <a
                href="https://personal-assistant-sigma-ashen.vercel.app"
                className="text-blue-600 underline"
              >
                Personal Assistant
              </a>
            </div>
          </Section>
        )}

        {activeSection === "experience" && (
          <Section title="Experience">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors mb-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-bold text-lg text-gray-900">
                      {exp.title}
                    </div>
                    <div className="text-gray-600">{exp.company}</div>
                  </div>
                  <span className="text-sm font-mono bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{exp.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Section>
        )}

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-400 text-sm">
          © 2025 Manikandan B. Designed with love & code.
        </div>
      </div>
    </div>
  );
}

// --- Sub Components ---

function SidebarItem({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: any;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className={`group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium cursor-pointer my-[1px] transition-all duration-200 ${
        active
          ? "bg-blue-500 text-white shadow-md"
          : "hover:bg-gray-200/50 text-gray-600"
      }`}
      onClick={onClick}
    >
      <Icon
        size={18}
        className={
          active ? "text-white" : "text-gray-500 group-hover:text-gray-700"
        }
      />
      <span>{label}</span>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
        {title}
        <div className="h-px bg-gray-200 flex-1 ml-4" />
      </h2>
      {children}
    </div>
  );
}

function SkillBadge({ name, label }: { name: string; label: string }) {
  return (
    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors cursor-default">
      {name} ({label})
    </span>
  );
}

function ProjectCard({
  title,
  tech,
  desc,
  demoUrl,
  githubUrl,
}: {
  title: string;
  tech: string;
  desc: string;
  demoUrl?: string;
  githubUrl?: string;
}) {
  return (
    <div className="group p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all cursor-pointer mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <div className="flex gap-2">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink
                size={16}
                className="text-gray-400 group-hover:text-blue-500"
              />
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github
                size={16}
                className="text-gray-400 group-hover:text-blue-500"
              />
            </a>
          )}
        </div>
      </div>
      <div className="text-xs font-medium text-blue-600 mb-2 uppercase tracking-wide">
        {tech}
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function SocialLink({
  icon: Icon,
  label,
  href,
}: {
  icon: any;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors"
    >
      <Icon size={16} />
      {label}
    </a>
  );
}
