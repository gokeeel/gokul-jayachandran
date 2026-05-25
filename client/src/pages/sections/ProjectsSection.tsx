import { ExternalLink, Lock } from "lucide-react";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    title: "DeFiScore: Privacy-Preserving On-Chain Credit System",
    description:
      "Production-ready decentralized credit scoring platform that computes wallet creditworthiness off-chain and verifies eligibility on-chain using Zero-Knowledge proofs — enabling under-collateralized DeFi lending without exposing credit scores or transaction history.",
    tech: ["Solidity", "Python", "Blockchain", "ZK Proofs", "Smart Contracts"],
    isPrivate: true,
    accent: "#4d9e8e",
  },
  {
    title: "Marquelytix: Real-time Customer Sentiment SaaS",
    description:
      "Full-stack SaaS platform for real-time customer sentiment monitoring targeted at micro and small businesses. Provides Brand24-style analytics with ML-powered sentiment analysis across social media and review sources.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Hugging Face API"],
    repoUrl: "https://github.com/gokeeel/Marquelytix",
    accent: "#60a5fa",
  },
  {
    title: "Anvikshan: Risk-Based Data Privacy Enforcement",
    description:
      "Government-grade data privacy enforcement system for unit-level datasets. Assesses anonymisation and encryption effectiveness, applies risk-based safeguards to sensitive identifiers, and enables controlled data dissemination while maintaining analytical utility and compliance.",
    tech: ["Python", "Encryption", "PostgreSQL", "Data Governance"],
    isPrivate: true,
    accent: "#34d399",
  },
  {
    title: "IndiCraft: Artisan Marketplace Platform",
    description:
      "AI-powered global marketplace connecting Indian artisans with international buyers. Features smart product discovery, regional and seasonal categorization, seller verification, and the DNK Scheme for affordable global export logistics — empowering rural creators through digital commerce.",
    tech: ["React", "Python", "AI/ML", "PostgreSQL"],
    demoUrl: "https://indicraft.vercel.app/login",
    accent: "#fbbf24",
  },
];

export const ProjectsSection = (): JSX.Element => {
  return (
    <section id="projects" data-testid="section-projects" className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#4d9e8e] text-sm font-medium uppercase tracking-widest mb-4">
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
                  className="w-3 h-3 rounded-full mt-1"
                  style={{ backgroundColor: project.accent }}
                />
                <div className="flex items-center gap-3">
                  {project.isPrivate ? (
                    <span className="flex items-center gap-1.5 text-[#a9a9a9] text-xs border border-white/10 px-2.5 py-1 rounded-full">
                      <Lock size={11} />
                      Private
                    </span>
                  ) : (
                    <>
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid={`link-project-repo-${index}`}
                          className="text-[#a9a9a9] hover:text-white transition-colors"
                          aria-label="GitHub repository"
                        >
                          <SiGithub size={18} />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid={`link-project-demo-${index}`}
                          className="text-[#a9a9a9] hover:text-white transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-white font-medium text-xl group-hover:text-[#4d9e8e] transition-colors leading-snug">
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
                    className="px-3 py-1 bg-[#0a1211] rounded-full text-[#a9a9a9] text-xs border border-[#1a2624]"
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
