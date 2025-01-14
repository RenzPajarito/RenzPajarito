import Footer from "@/components/portfolio/footer";
import Header from "@/components/portfolio/header";
import { Card } from "@/components/ui/card";
import { Github, Facebook, Linkedin, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Code2, // for HTML
  FileCode, // for CSS
  FileType2, // for JavaScript
  FileJson2, // for TypeScript
  Palette, // for TailwindCSS
  Blocks, // for React
  Flame, // for Firebase
  Globe, // for Web Development
  Smartphone, // for Mobile Development
  Layers, // for Full-Stack Development
} from "lucide-react";
import {
  PortfolioProject,
  Project,
  Skill,
  SocialLink,
  Talent,
} from "@/types/types";
import projectsData from "@/data/projects.json";
import ViewCounter from "./actions/view-counter";

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export default async function Component() {
  const socialLinks: SocialLink[] = [
    {
      href: "https://github.com/renzpajarito",
      icon: Github,
      label: "GitHub Profile",
    },
    {
      href: "https://linkedin.com/in/renzpajarito",
      icon: Linkedin,
      label: "LinkedIn Profile",
    },
    {
      href: "https://facebook.com/renz.codes",
      icon: Facebook,
      label: "Facebook Profile",
    },
  ];

  const portfolioProjects: PortfolioProject[] = projectsData.portfolioProjects;

  const skills: Skill[] = [
    {
      name: "HTML",
      icon: Code2,
    },
    {
      name: "CSS",
      icon: FileCode,
    },
    {
      name: "JavaScript",
      icon: FileType2,
    },
    {
      name: "TypeScript",
      icon: FileJson2,
    },
    {
      name: "TailwindCSS",
      icon: Palette,
    },
    {
      name: "React",
      icon: Blocks,
    },
    {
      name: "Firebase",
      icon: Flame,
    },
    {
      name: "More Skills",
      icon: MoreHorizontal,
    },
  ];

  const services: Project[] = [
    {
      title: "Web Development",
      description:
        "Creating responsive and modern websites using React, Next.js, and TailwindCSS",
      icon: Globe,
    },
    {
      title: "Mobile Development",
      description:
        "Building cross-platform mobile applications using React Native",
      icon: Smartphone,
    },
    {
      title: "Full-Stack Development",
      description:
        "Developing end-to-end web applications with modern tech stack",
      icon: Layers,
    },
  ];

  const talents: Talent[] = [
    { name: "Performing Samurai" },
    { name: "Performing Wushu" },
    { name: "Digital Artist" },
    { name: "Traditional Artist" },
    { name: "Drawing" },
    { name: "Song Composer" },
    { name: "Playing Ukulele" },
    { name: "Beatbox" },
    { name: "Singer" },
    { name: "Photo Manipulation" },
  ];

  return (
    <div className="min-h-screen p-3 mx-auto space-y-2 bg-[#ecf0f3]">
      <Header />

      <ViewCounter />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <Card className="h-fit min-h-[380px] bg-[#ecf0f3] relative shadow-sm border-white">
          <div className="flex flex-col h-full p-4 md:p-6">
            <div className="pb-2 md:pb-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-700">
                Introduction
              </h2>
              <div className="h-1 w-16 md:w-20 bg-[#ff4848] mt-1 md:mt-2"></div>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow py-4 md:py-6 sm:mt-0 mt-12">
              <div className="text-center space-y-1 md:space-y-2">
                <p className="text-lg md:text-2xl font-medium text-gray-600">
                  Hello, World!
                </p>
                <h1 className="text-2xl md:text-5xl font-bold text-gray-700 py-1 md:py-2">
                  Hi, I am <span className="text-[#ff4848]">Renz Pajarito</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-700 font-semibold">
                  &lt;/&gt;{" "}
                  <span className="text-[#ff4848]">Software Engineer</span>
                </p>
              </div>

              <div className="flex items-center gap-3 md:gap-4 mt-4 md:mt-6">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <Link
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 md:p-2 rounded-full hover:bg-gray-100 transition-colors bg-white/10 border-white border"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Card>
        <Card className="h-fit min-h-[380px] bg-[#ecf0f3] shadow-sm border-white">
          <div className="flex flex-col h-full p-4 md:p-6">
            <div className="pb-2 md:pb-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-700">
                Featured Projects
              </h2>
              <div className="h-1 w-16 md:w-20 bg-[#ff4848] mt-1 md:mt-2"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
              {portfolioProjects.map((project, index) => (
                <Link
                  key={index}
                  href={project.link || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="aspect-video w-full bg-gray-100 border">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={400}
                      className="w-full h-[240px] object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
                    <h3 className="text-lg font-semibold text-center">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-200 mt-2 text-center">
                      {truncateText(project.description, 100)}
                    </p>
                    <div className="mt-4 p-2 rounded-full bg-[#ff4848] text-white text-sm">
                      View Project
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="h-fit min-h-[350px] bg-[#ecf0f3] shadow-sm border-white">
          <div className="flex flex-col h-full p-4 md:p-6">
            <div className="pb-2 md:pb-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-700">
                Skills
              </h2>
              <div className="h-1 w-16 md:w-20 bg-[#ff4848] mt-1 md:mt-2"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
              {skills.map((skill) =>
                skill.name === "More Skills" ? (
                  <Link
                    key={skill.name}
                    href="/skills"
                    className="flex flex-col items-center p-3 rounded-lg bg-[#ecf0f3] shadow-sm hover:shadow-lg transition-all"
                  >
                    <skill.icon className="w-8 h-8 text-[#ff4848]" />
                    <span className="mt-2 text-sm font-medium text-gray-700">
                      {skill.name}
                    </span>
                  </Link>
                ) : (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-3 rounded-lg bg-[#ecf0f3] shadow-sm hover:shadow-lg transition-all"
                  >
                    <skill.icon className="w-8 h-8 text-[#ff4848]" />
                    <span className="mt-2 text-sm font-medium text-gray-700">
                      {skill.name}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </Card>

        <Card className="h-fit min-h-[350px] bg-[#ecf0f3] shadow-sm border-white">
          <div className="flex flex-col h-full p-4 md:p-6">
            <div className="pb-2 md:pb-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-700">
                Services
              </h2>
              <div className="h-1 w-16 md:w-20 bg-[#ff4848]"></div>
            </div>

            <div className="flex flex-col space-y-4 mt-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex items-start gap-4 p-2 rounded-lg hover:shadow-lg transition-all"
                >
                  <div className="p-3 rounded-full bg-[#ecf0f3] shrink-0">
                    <service.icon className="w-6 h-6 text-[#ff4848]" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-md font-semibold text-gray-700">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="h-fit min-h-[350px] bg-[#ecf0f3] shadow-sm">
          <div className="flex flex-col h-full p-4 md:p-6">
            <div className="pb-2 md:pb-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-700">
                Personal Talents
              </h2>
              <div className="h-1 w-16 md:w-20 bg-[#ff4848] mt-1 md:mt-2"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              {talents.map((talent) => (
                <div key={talent.name} className="flex items-center p-1">
                  &gt;{" "}
                  <span className="text-sm text-gray-700">{talent.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
