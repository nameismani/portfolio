"use client";

import React, { useState } from "react";
import {
  User,
  Shield,
  Terminal,
  Award,
  Mail as MailIcon,
  Github,
  Linkedin,
  ExternalLink,
  FileText,
  Send,
  Loader2,
} from "lucide-react";
import { projects } from "@/constants/project.contacts";
import { experiences } from "@/constants/experience.contsatns";
import { githubUrl, linkedinUrl } from "@/constants/common.constant";
import Link from "next/link";

export default function MobileView() {
  const topProjects = projects.slice(0, 2);
  const allExperiences = experiences;

  // form state (same pattern as Mail app)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Mani_Resume.pdf"; // ensure file exists in /public
    link.download = "Mani_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          setName("");
          setEmail("");
          setMessage("");
          setStatus("idle");
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Error sending email:", err);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black flex flex-col">
      {/* Header / message */}
      <div className="text-center mb-6 mt-6 px-4">
        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center text-xl font-bold text-gray-400">
          MB
        </div>
        <h1 className="text-2xl font-bold">Manikandan B</h1>
        <p className="text-gray-500 text-sm">Full Stack Developer · Chennai</p>

        <div className="mt-3 inline-flex items-center justify-center rounded-lg bg-blue-50 px-3 py-2 border border-blue-100">
          <p className="text-[11px] text-blue-700 font-medium leading-snug">
            For the full <span className="font-semibold">macOS‑style</span>{" "}
            desktop experience, please visit this portfolio on a{" "}
            <span className="underline">laptop or desktop</span>.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-900 text-white text-xs font-medium hover:bg-black transition-all active:scale-[0.98] duration-200"
          >
            <Github size={14} />
            GitHub
          </Link>
          <Link
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 transition-all active:scale-[0.98] duration-200"
          >
            <Linkedin size={14} />
            LinkedIn
          </Link>
          <button
            onClick={handleDownloadResume}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-gray-300 text-xs font-medium text-gray-800 hover:bg-gray-100 transition-all active:scale-[0.98] duration-200"
          >
            <FileText size={14} />
            Resume
          </button>
          <a
            href="mailto:nameismani19@gmail.com"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-200 text-gray-700 text-xs font-medium hover:bg-gray-300 transition-all active:scale-[0.98] duration-200"
          >
            <MailIcon size={14} />
            Email
          </a>
        </div>
      </div>

      <div className="px-4 pb-24 space-y-4 flex-1 overflow-y-auto">
        {/* About */}
        <MobileCard
          icon={User}
          title="About Me"
          desc="Full‑stack / MERN developer with 2+ years experience building scalable web apps in startup and product environments. Enjoys solving complex UI problems and creating smooth user experiences."
        />

        {/* Skills */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-blue-50 text-blue-500 rounded-lg">
              <Terminal size={22} />
            </div>
            <div className="font-semibold">Skills</div>
          </div>
          <p className="text-sm text-gray-500 mb-2">
            A quick snapshot of what is used most often.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <Tag>React</Tag>
            <Tag>Next.js</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Tailwind CSS</Tag>
            <Tag>Node.js</Tag>
            <Tag>MongoDB</Tag>
            <Tag>PostgreSQL</Tag>
            <Tag>Framer Motion</Tag>
            <Tag>TanStack Query</Tag>
            <Tag>FastAPI</Tag>
          </div>
        </div>

        {/* Projects (top 2) */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-blue-50 text-blue-500 rounded-lg">
              <Shield size={22} />
            </div>
            <div className="font-semibold">Projects</div>
          </div>
          {topProjects.map((p) => (
            <div
              key={p.title}
              className="border border-gray-100 rounded-lg p-3 mb-3 hover:border-blue-200 transition-colors"
            >
              <div className="flex justify-between items-start gap-2">
                <div>
                  <div className="text-sm font-semibold">{p.title}</div>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-3">
                    {p.description}
                  </p>
                  <p className="mt-1 text-[11px] text-gray-400">
                    {p.tags.join(" · ")}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {p.demoUrl && (
                    <Link
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-900 text-white text-[11px] hover:bg-black transition-all active:scale-[0.98]"
                    >
                      <ExternalLink size={12} />
                      Demo
                    </Link>
                  )}
                  {p.githubUrl && (
                    <Link
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 px-2 py-1 rounded-md border border-gray-300 text-[11px] text-gray-700 hover:bg-gray-50 transition-all active:scale-[0.98]"
                    >
                      <Github size={12} />
                      Code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
          {projects.length > 2 && (
            <div className="text-[11px] text-gray-400">
              More projects are available on the desktop version.
            </div>
          )}
        </div>

        {/* Experience – show all */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-blue-50 text-blue-500 rounded-lg">
              <Award size={22} />
            </div>
            <div className="font-semibold">Experience</div>
          </div>
          {allExperiences.map((exp) => (
            <div
              key={exp.title + exp.company}
              className="border border-gray-100 rounded-lg p-3 mb-3 hover:border-blue-200 transition-colors"
            >
              <div className="flex justify-between items-start gap-2">
                <div>
                  <div className="text-sm font-semibold">{exp.title}</div>
                  <div className="text-xs text-gray-500">{exp.company}</div>
                </div>
                <span className="text-[11px] font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                  {exp.period}
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-500">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Contact + inline form */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-blue-50 text-blue-500 rounded-lg">
              <MailIcon size={22} />
            </div>
            <div className="font-semibold">Contact</div>
          </div>
          <p className="text-sm text-gray-500 mb-3">
            Prefer email first, then a call for deeper discussions.
          </p>

          <div className="space-y-2 text-sm mb-4">
            <div>
              <div className="text-xs text-gray-500 uppercase font-semibold">
                Email
              </div>
              <a
                href="mailto:nameismani19@gmail.com"
                className="text-blue-600 underline"
              >
                nameismani19@gmail.com
              </a>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase font-semibold">
                Phone
              </div>
              <div className="text-gray-700">9566195492, 9962453404</div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSend} className="space-y-3 mt-2">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
              />
            </div>

            <div className="flex justify-end items-center gap-3 pt-1">
              {status === "success" && (
                <span className="text-green-600 text-xs font-medium">
                  Sent successfully!
                </span>
              )}
              {status === "error" && (
                <span className="text-red-500 text-xs font-medium">
                  Failed to send. Try again.
                </span>
              )}

              <button
                type="submit"
                disabled={isSending || status === "success"}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer active:scale-[0.98] duration-200 text-sm"
              >
                {isSending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* bottom note */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-200 text-center text-xs text-gray-400">
        Visit on desktop for the full macOS‑style experience.
      </div>
    </div>
  );
}

function MobileCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
      <div className="p-2 bg-blue-50 text-blue-500 rounded-lg">
        <Icon size={24} />
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-500">{desc}</div>
      </div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
      {children}
    </span>
  );
}
