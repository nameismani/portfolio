import {
  RotateCw,
  Shield,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
} from "lucide-react";
import type { Project } from "@/types/project.types";
import { newprojects } from "@/constants/project.contacts";

export default function Safari() {
  return (
    <div className="flex flex-col h-full bg-[#FBFBFB] text-black overflow-hidden">
      {/* Glassmorphic Toolbar */}
      <div className="h-12 bg-white/80 backdrop-blur-md border-b border-gray-200/80 flex items-center px-4 gap-4 shrink-0 z-10">
        <div className="flex gap-1">
          <button className="p-1.5 rounded hover:bg-black/5 text-gray-500 transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button className="p-1.5 rounded hover:bg-black/5 text-gray-500 transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
        {/* Address Bar */}
        <div className="flex-1 bg-gray-100/80 h-8 rounded-lg flex items-center justify-center text-sm text-gray-600 border border-gray-200/50 shadow-sm gap-2 px-2 transition-all hover:bg-gray-100 group cursor-text">
          <Shield
            size={12}
            className="text-gray-400 group-hover:text-green-600 transition-colors"
          />
          <span className="selection:bg-blue-200">nameismani/projects</span>
        </div>
        <button className="p-1.5 rounded hover:bg-black/5 text-gray-500 transition-colors">
          <RotateCw size={16} />
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-10 bg-gradient-to-b from-gray-50 to-[#FBFBFB]">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Featured Work
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These are some of my personal and organization work projects
              spanning full-stack development, system utilities, and AI
              integrations.
            </p>
          </header>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-10">
            {newprojects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center text-gray-400 text-sm py-8">
            End of Results
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { title, description, tags, image, demoUrl, githubUrl, category } =
    project;

  const categoryConfig = {
    organization: {
      label: "Organization",
      color: "bg-gray-100 text-gray-700 border-gray-300",
      hoverColor: "group-hover:bg-gray-200",
    },
    personal: {
      label: "Personal",
      color: "bg-gray-100 text-gray-700 border-gray-300",
      hoverColor: "group-hover:bg-gray-200",
    },
    freelance: {
      label: "Freelance",
      color: "bg-gray-100 text-gray-700 border-gray-300",
      hoverColor: "group-hover:bg-gray-200",
    },
  };

  const categoryStyle =
    categoryConfig[category as keyof typeof categoryConfig] ||
    categoryConfig.personal;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out">
      {/* Image Container with Enhanced Zoom Effect */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/10 transition-all duration-300 z-10"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Category Badge - Top Left */}
        <div className="absolute top-3 left-3 z-20">
          <span
            className={`px-3 py-1.5 text-xs font-bold rounded-full border backdrop-blur-md shadow-lg transition-all duration-300 ${categoryStyle.color} ${categoryStyle.hoverColor}`}
          >
            {categoryStyle.label}
          </span>
        </div>

        {/* Action Buttons - Top Right */}
        <div className="absolute top-3 right-3 flex gap-2 z-20">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/95 p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg backdrop-blur-sm hover:bg-blue-500 hover:text-white hover:scale-110 transform"
              title="View Live Demo"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} className="transition-colors" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/95 p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg backdrop-blur-sm hover:bg-gray-800 hover:text-white hover:scale-110 transform"
              title="View Source Code"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} className="transition-colors" />
            </a>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2.5 group-hover:text-blue-600 transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3 min-h-[3.6rem]">
          {description}
        </p>

        {/* Tech Tags with Top Border */}
        <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
          {tags.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold bg-gray-50 text-gray-600 rounded-lg border border-gray-200 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-700 transition-all duration-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
