"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section } from "./common";
import { HiOutlineBriefcase } from "react-icons/hi";
import { experiences } from "@/constants/experience.contsatns";
import { MotionDiv, MotionSpan } from "@/motion/framer_motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Individual Experience Card Component with scroll animation
const ExperienceCard = ({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0.5]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.95]
  );
  const x = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -20]);

  return (
    <MotionDiv
      ref={ref}
      style={{ opacity, scale, x }}
      className="relative flex gap-8 mb-12 last:mb-0"
    >
      {/* Step circle with icon */}
      <div className="relative flex-shrink-0">
        <MotionDiv
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 relative"
        >
          <HiOutlineBriefcase className="w-5 h-5 text-primary-foreground" />
        </MotionDiv>
      </div>

      {/* Content card */}
      <MotionDiv
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.02, x: 5 }}
        className="flex-1 bg-card p-6 rounded-lg shadow-xs border border-border card-hover"
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
          <div>
            <h3 className="font-semibold text-xl text-primary mb-1">
              {exp.title}
            </h3>
            <p className="text-sm text-foreground font-medium">{exp.company}</p>
          </div>
          <span className="text-sm text-muted-foreground mt-1 sm:mt-0">
            {exp.period}
          </span>
        </div>

        <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>

        <div className="flex flex-wrap gap-2">
          {exp.skills.map((skill, idx) => (
            <MotionSpan
              key={skill}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
              className="px-3 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground"
            >
              {skill}
            </MotionSpan>
          ))}
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="experience" className="bg-secondary/30">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        My <span className="text-primary">Experience</span>
      </motion.h2>

      {/* Desktop: Vertical Stepper with scroll animation */}
      <div
        ref={containerRef}
        className="hidden md:block relative max-w-4xl mx-auto"
      >
        {/* Vertical line - static background */}
        <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-border" />

        {/* Animated progress line */}
        <MotionDiv
          style={{ height: lineHeight }}
          className="absolute left-[19px] top-0 w-0.5 bg-primary origin-top"
        />

        {experiences.map((exp, idx) => (
          <ExperienceCard key={exp.company} exp={exp} index={idx} />
        ))}
      </div>

      {/* Mobile/Tablet: Horizontal Scroll Stepper */}
      <div className="md:hidden w-full overflow-x-auto scrollbar-hide pb-4">
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex gap-6 px-4 min-w-max relative"
        >
          {/* Horizontal line */}
          <div className="absolute left-0 right-0 top-[19px] h-0.5 bg-border" />

          {experiences.map((exp, idx) => (
            <MotionDiv
              key={exp.company}
              variants={fadeUp}
              className="relative flex flex-col items-center w-[280px] flex-shrink-0"
            >
              {/* Step circle with icon */}
              <MotionDiv
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="size-10 min-w-10 min-h-10 rounded-full bg-primary flex items-center justify-center z-10 mb-4 relative"
              >
                <HiOutlineBriefcase className="w-5 h-5 text-primary-foreground" />
              </MotionDiv>

              {/* Content card */}
              <MotionDiv
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-card p-5 rounded-lg shadow-xs border border-border w-full h-full flex flex-col"
              >
                <h3 className="font-semibold text-lg text-primary mb-1">
                  {exp.title}
                </h3>
                <p className="text-xs text-foreground font-medium mb-1">
                  {exp.company}
                </p>
                <span className="text-xs text-muted-foreground mb-3">
                  {exp.period}
                </span>

                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.skills.map((skill, skillIdx) => (
                    <MotionSpan
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: idx * 0.1 + skillIdx * 0.05,
                      }}
                      className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </MotionSpan>
                  ))}
                </div>
              </MotionDiv>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>

      {/* Mobile scroll hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="md:hidden text-center text-muted-foreground mt-6 text-sm"
      >
        ← Swipe to view more experience →
      </motion.p>
    </Section>
  );
};

export default ExperienceSection;
