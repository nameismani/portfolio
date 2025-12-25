"use client";

import React, { useState, useEffect, useRef } from "react";

import type { Project } from "@/types/project.types";

import { categories, skills } from "@/constants/skill.constants";
import { experiences } from "@/constants/experience.contsatns";
import { projects } from "@/constants/project.contacts";
import { githubUrl } from "@/constants/common.constant";

type LineType = "input" | "output" | "error" | "system";

interface HistoryLine {
  text: string;
  type: LineType;
}

export default function Terminal({
  onCommand,
}: {
  onCommand?: (cmd: string) => void;
}) {
  const initialLines: string[] = [
    "   _____  __  __   _____  _____  ___  ___  ",
    "  / ___/  \\ \\/ /  / ___/ |_   _| |  \\/  | ",
    "  \\___ \\   \\  /   \\___ \\   | |   | |\\/| | ",
    " ____) |   |  |   ____) |  | |   | |  | | ",
    "|_____/    |_|   |_____/   |_|   |_|  |_| ",
    "                                           ",
    "System Initialized... [Version 2.0.0]",
    "Connected to: PORTFOLIO_OS :: MANIKANDAN_B",
    "Type 'help' to see available commands.",
    "------------------------------------------------------------",
  ];

  const [history, setHistory] = useState<HistoryLine[]>(
    initialLines.map((line) => ({ text: line, type: "system" }))
  );
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  // Map level to skill rank
  const getSkillLevel = (level: number) => {
    if (level >= 85) return "Professional";
    if (level >= 65) return "Intermediate";
    if (level >= 50) return "Beginner";
    return "Basics";
  };

  const formatSkills = () => {
    const byCategory = (cat: (typeof categories)[number]) =>
      skills
        .filter((s) => cat === "all" || s.category === cat)
        .map((s) => `- ${s.name} (${getSkillLevel(s.level)})`)
        .join("\n");

    return [
      "--- SKILL MATRIX ---",
      "[Frontend]",
      byCategory("frontend"),
      "",
      "[Backend]",
      byCategory("backend"),
      "",
      "[Tools]",
      byCategory("tools"),
    ];
  };

  const formatExperiences = () => {
    const lines: string[] = ["--- EXPERIENCE LOG ---"];
    experiences.forEach((exp) => {
      lines.push(
        `Role     : ${exp.title}`,
        `Company  : ${exp.company}`,
        `Period   : ${exp.period}`,
        `Summary  : ${exp.description}`,
        `Stack    : ${exp.skills.join(", ")}`,
        "------------------------------------------------------------"
      );
    });
    return lines;
  };

  const formatProjectsByCategory = (category?: Project["category"]) => {
    const header =
      category === "organization"
        ? "--- ORGANIZATION PROJECTS ---"
        : category === "personal"
        ? "--- PERSONAL PROJECTS ---"
        : category === "freelance"
        ? "--- FREELANCE PROJECTS ---"
        : "--- ALL PROJECTS ---";

    const filtered =
      category != null
        ? projects.filter((p) => p.category === category)
        : projects;

    const lines: string[] = [header];

    filtered.forEach((p, index) => {
      lines.push(
        `${index + 1}. ${p.title}`,
        `   Type : ${p.category.toUpperCase()}`,
        `   Stack: ${p.tags.join(", ")}`,
        `   Demo : ${p.demoUrl || "N/A"}`,
        `   Code : ${p.githubUrl || "Private / N/A"}`,
        `   Info : ${p.description}`,
        "------------------------------------------------------------"
      );
    });

    if (filtered.length === 0) {
      lines.push("No projects found in this category.");
    }

    lines.push(
      "To know more about my projects, go to my Personal Assistant Bot:",
      "https://personal-assistant-sigma-ashen.vercel.app"
    );

    return lines;
  };

  const formatProfile = () => {
    return [
      "--- PROFILE ---",
      "Name      : Manikandan B",
      "Role      : Full Stack / MERN Stack Developer",
      "Location  : Chennai, Tamil Nadu, India",
      "Summary   : MERN Stack Developer with 2+ years experience in startup & product teams,",
      "            building scalable web apps across frontend and backend.",
      "Portfolio : https://portfolio.nameismani.com",
      `GitHub    : ${githubUrl}`,
      "Assistant : https://personal-assistant-sigma-ashen.vercel.app",
    ];
  };

  const formatContact = () => {
    return [
      "--- CONTACT CHANNELS ---",
      "Email     : nameismani19@gmail.com | mm2729025@gmail.com",
      "Phone     : 9566195492, 9962453404",
      "Location  : Avadi, Chennai - 600054",
      "Portfolio : https://portfolio.nameismani.com",
      `GitHub    : ${githubUrl}`,
      "Assistant : https://personal-assistant-sigma-ashen.vercel.app",
    ];
  };

  const processCommand = (cmd: string) => {
    const lowerCmd = cmd.trim().toLowerCase();
    const response: string[] = [];
    let type: LineType = "output";

    switch (true) {
      case lowerCmd === "help":
        response.push(
          "Available Commands:",
          "  whoami              - Show developer profile",
          "  skills              - List technical skills (grouped)",
          "  experience          - Show work experience timeline",
          "  projects            - List all projects",
          "  projects org        - Only organization projects",
          "  projects personal   - Only personal projects",
          "  projects freelance  - Only freelance projects",
          "  contact             - Contact details & links",
          "  clear               - Clear terminal",
          "  sudo                - Execute command as Super User",
          "  arise               - [LOCKED] Hidden protocol"
        );
        break;

      case lowerCmd === "whoami":
        response.push(...formatProfile());
        break;

      case lowerCmd === "skills":
      case lowerCmd === "list-skills":
        response.push(...formatSkills());
        break;

      case lowerCmd === "experience":
      case lowerCmd === "exp":
        response.push(...formatExperiences());
        break;

      case lowerCmd === "projects":
        response.push(...formatProjectsByCategory());
        break;

      case lowerCmd === "projects org":
      case lowerCmd === "projects organization":
        response.push(...formatProjectsByCategory("organization"));
        break;

      case lowerCmd === "projects personal":
        response.push(...formatProjectsByCategory("personal"));
        break;

      case lowerCmd === "projects freelance":
        response.push(...formatProjectsByCategory("freelance"));
        break;

      case lowerCmd === "contact":
        response.push(...formatContact());
        break;

      case lowerCmd === "arise":
        type = "system";
        response.push(
          "ACCESS DENIED.",
          "Shadow protocol requires higher clearance.",
          "Hint: Keep building and shipping, power scales with experience."
        );
        break;

      case lowerCmd === "sudo":
        type = "error";
        response.push(
          "User 'mani' is not in the sudoers file. This incident will be reported."
        );
        break;

      case lowerCmd === "":
        break;

      default:
        type = "error";
        response.push(
          `Command not found: ${cmd}. Type 'help' for available commands.`
        );
    }

    return { response, type };
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = input.trim();
      if (!cmd) return;

      const newEntry: HistoryLine = {
        text: `nameismani@portfolio-os:~$ ${cmd}`,
        type: "input",
      };

      if (cmd.toLowerCase() === "clear") {
        setHistory([]);
        setInput("");
        return;
      }

      const { response, type } = processCommand(cmd);
      const outputEntries: HistoryLine[] = response.map((line) => ({
        text: line,
        type,
      }));

      setHistory((prev) => [...prev, newEntry, ...outputEntries]);
      setCmdHistory((prev) => [...prev, cmd]);
      setHistoryIndex(-1);
      setInput("");
      onCommand?.(cmd);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? cmdHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= cmdHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(cmdHistory[newIndex]);
        }
      }
    }
  };

  return (
    <div
      className="h-full w-full bg-black/90 text-blue-400 p-4 font-mono text-sm overflow-auto scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-transparent"
      onClick={handleClick}
    >
      {history.map((line, i) => (
        <div
          key={i}
          className={`mb-1 whitespace-pre-wrap ${
            line.type === "input"
              ? "text-white font-semibold mt-2"
              : line.type === "error"
              ? "text-red-500"
              : line.type === "system"
              ? "text-blue-300 opacity-80"
              : "text-blue-400"
          }`}
        >
          {line.text}
        </div>
      ))}

      <div className="flex gap-2 mt-2">
        <span className="text-green-500 font-bold">
          nameismani@portfolio-os:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent outline-none flex-1 text-white caret-blue-500"
          autoFocus
          autoComplete="off"
          spellCheck="false"
        />
      </div>
      <div ref={endRef} />
    </div>
  );
}
