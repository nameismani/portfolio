"use client";
import React from "react";
import { Section } from "./common";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ProjectCategory } from "@/types/project.types";
import { projects } from "@/constants/project.contacts";
import { MotionDiv } from "@/motion/framer_motion";

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
      <MotionDiv
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
          <MotionDiv
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
          </MotionDiv>
        ))}
      </MotionDiv>
    </Section>
  );
};

export default ProjectSection;
