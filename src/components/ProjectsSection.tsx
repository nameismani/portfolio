"use client";
import React from "react";
import { Section } from "./common";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

type ProjectCategory = "organization" | "personal" | "freelance";
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl?: string;
  category: ProjectCategory;
};

const projects: Project[] = [
  // Organization Projects
  {
    id: 1,
    title: "AEC SaaS Product (IntoAEC)",
    description:
      "SaaS for AEC field: manage products, services, invoices, Chrome extension, asset management, etc.",
    image: "/projects/Organization_Projects/intoaec.webp",
    tags: ["Next.js", "Express.js", "AWS"],
    demoUrl: "https://app.intoaec.ai/",
    category: "organization",
  },
  {
    id: 2,
    title: "TestPrep SaaS (i2Global)",
    description:
      "Learning platform: enroll, join live/recorded classes, chat, forums, student tracking, etc.",
    image: "/projects/Organization_Projects/test_prep.jpg",
    tags: ["Nextjs", "Fast Api", "MongoDB"],
    demoUrl: "https://proedge.i2global.in/",
    category: "organization",
  },
  {
    id: 3,
    title: "Transport SaaS (i2Global)",
    description:
      "Student transport booking and management system for i2Global.",
    image: "/projects/Organization_Projects/transport.png",
    tags: ["Nextjs", "Fast Api", "MongoDB"],
    demoUrl: "https://i2global.in/transport/",
    category: "organization",
  },
  // Personal Projects
  {
    id: 4,
    title: "Personal Assistant Bot",
    description:
      "AI-powered chatbot trained on resume/technical data to answer queries about my profile.",
    image: "/projects/own/personal-assistant.png",
    tags: ["Next.js", "LangChain", "AI Embeddings"],
    demoUrl: "https://personal-assistant-sigma-ashen.vercel.app/",
    githubUrl: "https://github.com/nameismani/personal-assistant",
    category: "personal",
  },
  {
    id: 5,
    title: "Turf Slot Booking",
    description:
      "Slot booking and schedule management app with serverless cron jobs and NextAuth.",
    image: "/projects/own/turf.png",
    tags: ["Next.js", "Node-Cron", "Vercel"],
    demoUrl: "https://turfproject.vercel.app/",
    githubUrl: "https://github.com/nameismani/turfproject",
    category: "personal",
  },
  // Freelance Projects
  {
    id: 6,
    title: "JInterior Design Site",
    description:
      "Showcase website for a friend's interior shop; React carousel, SEO migration.",
    image: "/projects/freelance_projects/jinterior_freelance.png",
    tags: ["Next.js", "React", "SEO"],
    demoUrl: "https://jinteriorssr.netlify.app/",
    githubUrl: "https://github.com/nameismani/J-Interior",
    category: "freelance",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProjectSection = () => {
  const categories: (ProjectCategory | "all")[] = [
    "all",
    "organization",
    "personal",
    "freelance",
  ];
  const [activeCategory, setActiveCategory] = React.useState<
    ProjectCategory | "all"
  >("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Section id="projects" className="bg-secondary/30">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Featured <span className="text-primary">Projects</span>
      </h2>
      <p className="text-center text-muted-foreground mb-6 max-w-xl mx-auto text-base">
        These are some of my projects—spanning organization, personal, and
        freelance work.
      </p>
      {/* Category Buttons - Horizontal scroll on mobile/tablet */}
      <div className="mb-10 w-full overflow-x-auto scrollbar-hide">
        <div className="flex justify-start md:justify-center gap-4 px-4 min-w-max md:min-w-0 md:flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={clsx(
                "px-5 py-2 rounded-full transition-all duration-200 capitalize cursor-pointer active:scale-[0.98] whitespace-nowrap",
                activeCategory === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        key={activeCategory}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {filtered.map((project, index) => (
          <motion.div
            key={`${activeCategory}-${project.id}`}
            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full"
            variants={fadeUp}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="h-48 overflow-hidden flex items-center justify-center bg-secondary/20">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex justify-start items-center mt-auto pt-2">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default ProjectSection;
