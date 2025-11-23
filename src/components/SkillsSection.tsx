"use client";
import clsx from "clsx";
import React, { useState } from "react";
import { MotionDiv } from "@/motion/framer_motion";
import { Section } from "./common";
import { skills, categories } from "@/constants/skill.constants";
import { SkillCategory } from "@/types/skill.types";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <Section id="skills" className="bg-secondary/30">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        My <span className="text-primary"> Skills</span>
      </h2>

      {/* Category Buttons - Horizontal scroll on mobile/tablet */}
      <div className="mb-12 w-full overflow-x-auto scrollbar-hide">
        <div className="flex justify-start md:justify-center gap-3 px-4 min-w-max md:min-w-0 md:flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={clsx(
                "px-5 py-2 rounded-full transition-all duration-200 capitalize cursor-pointer active:scale-[0.98] whitespace-nowrap",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Animated skill cards - Regular grid layout */}
      <MotionDiv
        key={activeCategory}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {filteredSkills.map((skill, index) => (
          <MotionDiv
            key={skill.name}
            className="bg-card p-6 rounded-lg shadow-xs card-hover"
            variants={fadeUp}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-left mb-4">
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
              <MotionDiv
                className="bg-primary h-2 rounded-full origin-left"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="text-right mt-1">
              <span className="text-sm text-muted-foreground">
                {skill.level}%
              </span>
            </div>
          </MotionDiv>
        ))}
      </MotionDiv>
    </Section>
  );
};

export default SkillsSection;
