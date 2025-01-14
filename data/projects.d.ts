declare module "@/data/projects.json" {
  import { PortfolioProject } from "@/types/types";

  interface ProjectsData {
    portfolioProjects: PortfolioProject[];
  }

  const data: ProjectsData;
  export default data;
}
