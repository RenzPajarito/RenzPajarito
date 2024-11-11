import {
  Code2,
  FileCode,
  FileType2,
  FileJson2,
  Palette,
  Blocks,
  Flame,
  GitFork,
  Terminal,
  Smartphone,
  Database,
  FileJson,
  Code,
  Pencil,
} from "lucide-react";
import Footer from "@/components/portfolio/footer";
import Header from "@/components/portfolio/header";

const detailedSkills = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", icon: Code2 },
      { name: "Next.js", icon: Blocks },
      { name: "React Native", icon: Smartphone },
      { name: "TypeScript", icon: FileType2 },
      { name: "JavaScript", icon: FileJson2 },
      { name: "HTML/CSS", icon: FileCode },
      { name: "TailwindCSS", icon: Palette },
      { name: "Shadcn/UI", icon: Blocks },
    ],
  },
  {
    category: "Backend & Tools",
    skills: [
      { name: "PHP", icon: FileCode },
      { name: "MySQL", icon: Database },
      { name: "Firebase", icon: Flame },
      { name: "Git", icon: GitFork },
      { name: "JSON", icon: FileJson },
      { name: "VS Code", icon: Code },
      { name: "Figma", icon: Pencil },
      { name: "Terminal", icon: Terminal },
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen p-3 mx-auto space-y-6 bg-[#ecf0f3]">
      <Header />

      <main className="min-h-[705px] max-w-4xl mx-auto space-y-8 p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Technical Skills
        </h1>

        {detailedSkills.map((category) => (
          <div key={category.category} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {category.category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <skill.icon className="w-6 h-6 text-[#ff4848]" />
                    <h3 className="font-medium text-gray-700">{skill.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}
