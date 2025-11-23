"use client";
import { motion } from "framer-motion";
import { Section } from "./common";
import { HiOutlineBriefcase } from "react-icons/hi";
import { MotionDiv } from "@/motion/framer_motion";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "i2Global",
    period: "Apr 2025 - Nov 2025",
    description:
      "React Hook Form, TanStack Query, Framer Motion, Razorpay, FastAPI. Built TestPrep education platform (live classes, chat/forum, coupons, student management) and Transport App for school management.",
    skills: ["Nextjs", "FastAPI", "Google Maps", "MongoDB"],
  },
  {
    title: "Product Engineer",
    company: "Siara Tech Solutions (IntoAEC)",
    period: "Apr 2024 - Mar 2025",
    description:
      "Developed AEC SaaS modules (CRM, Procurement, Asset, Invoice) for architects & engineers. Built Chrome extension for product clipping, notifications, workflow tools.",
    skills: ["Nextjs", "TypeScript", "TypeORM", "AWS", "Chrome Extension"],
  },
  {
    title: "Web App Dev Trainee",
    company: "Novalnet e-Solutions",
    period: "Aug 2023 - Jan 2024",
    description:
      "Frontend & backend training. Built user feedback, session lockout, real-time notification/admin tools.",
    skills: ["Node.js", "Express", "Ejs", "Maria DB"],
  },
  {
    title: "Graduate Engineer Trainee",
    company: "HCL Tech",
    period: "Jul 2022 - Jul 2023",
    description:
      "HTML, CSS, JS DOM, React JS, gained hands-on IT and web dev experience.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
];

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

const ExperienceSection = () => (
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

    {/* Desktop: Vertical Stepper */}
    <MotionDiv
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="hidden md:block relative max-w-4xl mx-auto"
    >
      {/* Vertical line */}
      <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-border" />

      {experiences.map((exp, idx) => (
        <MotionDiv
          key={exp.company}
          variants={fadeUp}
          className="relative flex gap-8 mb-12 last:mb-0"
        >
          {/* Step circle with icon */}
          <div className="relative flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 relative">
              <HiOutlineBriefcase className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>

          {/* Content card */}
          <MotionDiv
            whileHover={{ scale: 1.02, x: 5 }}
            transition={{ duration: 0.3 }}
            className="flex-1 bg-card p-6 rounded-lg shadow-xs border border-border card-hover"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <div>
                <h3 className="font-semibold text-xl text-primary mb-1">
                  {exp.title}
                </h3>
                <p className="text-sm text-foreground font-medium">
                  {exp.company}
                </p>
              </div>
              <span className="text-sm text-muted-foreground mt-1 sm:mt-0">
                {exp.period}
              </span>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </MotionDiv>
        </MotionDiv>
      ))}
    </MotionDiv>

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
            <div className="size-10 min-w-10 min-h-10 rounded-full bg-primary flex items-center justify-center z-10 mb-4 relative">
              <HiOutlineBriefcase className="w-5 h-5 text-primary-foreground" />
            </div>

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
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </MotionDiv>
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>

    {/* Mobile scroll hint */}
    <p className="md:hidden text-center text-muted-foreground mt-6 text-sm">
      ← Swipe to view more experience →
    </p>
  </Section>
);

export default ExperienceSection;
