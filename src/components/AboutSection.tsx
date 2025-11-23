"use client";
import { Code } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { MotionDiv, MotionH3, MotionParagraph } from "@/motion/framer_motion";
import Link from "next/link";
import { Section } from "@/components/common";
import { HiOutlineBriefcase } from "react-icons/hi";

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

const AboutSection = () => {
  return (
    <Section id="about">
      <MotionDiv
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <MotionH3
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold mb-6 md:mb-12 text-center"
        >
          About <span className="text-primary"> Me</span>
        </MotionH3>
        <MotionParagraph
          variants={fadeUp}
          className="text-sm md:text-xl text-center mb-3 md:mb-6"
        >
          MERN Stack Developer with Python FastAPI & Flask • 2+ Years in web app
          development
        </MotionParagraph>
        <MotionParagraph
          variants={fadeUp}
          className="text-muted-foreground text-xs md:text-base text-center mb-3 md:mb-6"
        >
          Worked with startups to build organization-scale SaaS products, and
          launched personal projects in automation and booking.
        </MotionParagraph>
        <MotionParagraph
          variants={fadeUp}
          className="text-primary font-medium text-center text-xs md:text-base mb-3 md:mb-6"
        >
          Now seeking to contribute to a stable organization where I can grow,
          collaborate, and build a long-term career.
        </MotionParagraph>

        <MotionDiv
          variants={fadeUp}
          className="flex flex-row gap-4 pt-4 justify-center"
        >
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={0}
            className="cosmic-button cursor-pointer leading-none flex items-center "
          >
            Get In Touch
          </ScrollLink>
          <Link
            href="/Mani_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
          >
            Download CV
          </Link>
        </MotionDiv>

        <MotionDiv
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2"
        >
          {/* Organization Experience */}
          <MotionDiv
            variants={fadeUp}
            className="gradient-border p-6 card-hover"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col lg:flex-row items-center  lg:items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <HiOutlineBriefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-base md:text-lg mb-2 ">
                  Organization Products (AEC SaaS & TestPrep)
                </h4>
                <ul className="list-disc ml-3 text-muted-foreground text-xs md:-sm">
                  <li>
                    Built Product & Service modules, Product Clipper Chrome
                    Extension for AEC SaaS etc.
                  </li>
                  <li>
                    Developed chat, forum, and video analytics PoC for
                    E-Learning SaaS (TestPrep) etc.
                  </li>
                </ul>
              </div>
            </div>
          </MotionDiv>

          {/* Personal Projects */}
          <MotionDiv
            variants={fadeUp}
            className="gradient-border p-6 card-hover"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col lg:flex-row  items-center  lg:items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-base md:text-lg mb-2 ">
                  Personal Projects & Automation
                </h4>
                <ul className="list-disc ml-3 text-muted-foreground text-xs md:text-sm">
                  <li>
                    Turf slot booking app with schedule management via GitHub
                    Actions
                  </li>
                  <li>
                    Built & deployed a Personal Assistant bot (
                    <Link
                      href="https://personal-assistant-sigma-ashen.vercel.app/"
                      target="_blank"
                      className="underline text-primary"
                    >
                      demo
                    </Link>
                    ) with AI/automation to share info about me
                  </li>
                </ul>
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </MotionDiv>
    </Section>
  );
};

export default AboutSection;
