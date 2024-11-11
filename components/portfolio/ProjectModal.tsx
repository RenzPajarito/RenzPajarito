"use client";

import Image from "next/image";
import { PortfolioProject } from "@/types/types";

type ProjectModalProps = {
  project: PortfolioProject | null;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 sm:flex flex-none items-center justify-center p-4 overflow-y-auto bg-black/50 top-[-40px]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl p-6 bg-white rounded-xl shadow-lg my-8"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="relative h-64 w-full mb-6">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {project.title}
        </h2>

        <p className="text-gray-600 mb-6">{project.description}</p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Features</h3>
          <ul className="list-disc list-inside space-y-2">
            {project.features?.map((feature, index) => (
              <li key={index} className="text-gray-600">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
