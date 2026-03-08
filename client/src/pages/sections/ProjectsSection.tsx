import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    title: "SupplyChain on Blockchain",
    description:
      "Decentralized supply chain transparency platform using Ethereum smart contracts. Tracks goods from manufacturer to retailer with immutable audit trails.",
    tech: ["Solidity", "Web3.js", "Python", "MySQL"],
    repoUrl: "https://github.com/gokeeel",
    demoUrl: "https://github.com/gokeeel",
    accent: "#a78bfa",
  },
  {
    title: "BRD Automation Tool",
    description:
      "Python-based tool that auto-generates Business Requirement Documents from structured user input templates, reducing documentation time by ~60%.",
    tech: ["Python", "Jinja2", "SQL", "Excel"],
    repoUrl: "https://github.com/gokeeel",
    accent: "#60a5fa",
  },
  {
    title: "FinTech Dashboard",
    description:
      "Data-driven financial analytics dashboard for SMEs. Provides real-time KPI tracking, cash flow insights, and anomaly detection using SQL pipelines.",
    tech: ["Python", "SQL", "Power BI", "PostgreSQL"],
    repoUrl: "https://github.com/gokeeel",
    accent: "#34d399",
  },
  {
    title: "SAP Process Mapper",
    description:
      "Workflow documentation and gap-analysis tool built to map SAP SD/MM business processes, identify inefficiencies, and generate process flow reports.",
    tech: ["SAP", "Python", "Excel", "Figma"],
    repoUrl: "https://github.com/gokeeel",
    accent: "#fbbf24",
  },
];

export const ProjectsSection = (): JSX.Element => {
  return (
    <section id="projects" data-testid="section-projects" className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#a78bfa] text-sm font-medium uppercase tracking-widest mb-4">
            Featured Work
          </p>
          <h2 className="section-heading">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              data-testid={`card-project-${index}`}
              className="glass-card p-8 flex flex-col gap-6 group"
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: project.accent }}
                />
                <div className="flex items-center gap-3">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-project-repo-${index}`}
                    className="text-[#a9a9a9] hover:text-white transition-colors"
                  >
                    <SiGithub size={18} />
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-project-demo-${index}`}
                      className="text-[#a9a9a9] hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-white font-medium text-2xl group-hover:text-[#a78bfa] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#a9a9a9] text-base font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#141414] rounded-full text-[#a9a9a9] text-xs border border-[#2a2a2a]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
