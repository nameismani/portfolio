"use client";
import React from "react";
import { ArrowDown } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { MotionDiv, MotionH1, MotionParagraph } from "@/motion/framer_motion";

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

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-1 md:px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <MotionH1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            <span className=" opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Manikadna
            </span>
            <span className=" ml-2 opacity-0 animate-fade-in-delay-2"> B</span>
          </MotionH1>

          <MotionParagraph
            variants={fadeUp}
            className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto"
          >
            I am highly energetic person and learning lot of things to upgrade
            my skills to make best out of it
          </MotionParagraph>

          <MotionParagraph
            variants={fadeUp}
            className="text-base md:text-lg text-primary font-semibold max-w-2xl mx-auto"
          >
            You’re in the right place—whether you need a dedicated teammate or a
            sharp freelancer for your website. Fast, dependable, and focused on
            results.
          </MotionParagraph>

          <MotionDiv
            variants={fadeUp}
            className="pt-4 active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={0}
              className="cosmic-button cursor-pointer"
            >
              View My Work
            </ScrollLink>
          </MotionDiv>
        </MotionDiv>
      </div>

      <MotionDiv
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary cursor-pointer" />
      </MotionDiv>
    </section>
  );
};

export default HeroSection;
