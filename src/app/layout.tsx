import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manikandan — Full Stack Developer, FastAPI & AI Enthusiast",
  description:
    "Manikandan is a full stack developer specializing in React, Next.js, TypeScript, Tailwind CSS, FastAPI, and AI/GenAI integration. Available for freelance projects involving modern web development and AI-powered solutions.",
  keywords: [
    "Manikandan",
    "Full Stack Developer",
    "Freelance Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "Python Developer",
    "AI Developer",
    "Generative AI",
    "GenAI",
    "AI Integration",
    "Freelancer Portfolio",
  ],
  authors: [{ name: "Manikandan" }],
  openGraph: {
    title: "Manikandan — Full Stack Developer, FastAPI & AI Enthusiast",
    description:
      "Experienced full stack developer with expertise in React, Next.js, FastAPI, and AI-powered web applications. Offering freelance services in modern web and AI development.",
    url: "https://portfolio.nameismani.com/",
    siteName: "Manikandan Developer Portfolio",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://portfolio.nameismani.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
