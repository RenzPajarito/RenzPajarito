"use client";

import Footer from "@/components/portfolio/footer";
import Header from "@/components/portfolio/header";
import ProjectModal from "@/components/portfolio/ProjectModal";
import projectsData from "@/data/projects.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ViewCounter from "../actions/view-counter";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData.portfolioProjects)[0] | null
  >(null);

  const handleOpenModal = (
    project: (typeof projectsData.portfolioProjects)[0]
  ) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen p-3 mx-auto space-y-8 bg-[#ecf0f3]">
      <Header />

      <ViewCounter />

      <main className="container min-h-[690px] mx-auto sm:px-4 px-2">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link
                href={project.link || ""}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 line-clamp-3 mb-2">
                  {truncateText(project.description, 200)}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href={project.link || ""}
                    target={project.link ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 group/link"
                  >
                    <span className="text-sm font-medium">View Project</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>

                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenModal(project);
                    }}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <Footer />
    </div>
  );
}
