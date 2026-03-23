import { Building2, Link2 } from "lucide-react";

const experiences = [
  {
    role: "Business Analyst Intern",
    company: "Dummy Corp Pvt. Ltd.",
    period: "Jun 2024 - Aug 2024",
    description:
      "Worked on requirement gathering, stakeholder interviews, and drafting BRDs for an internal ERP migration project. Mapped AS-IS vs TO-BE processes and assisted in UAT documentation.",
    tags: ["BRD", "ERP", "UAT", "Stakeholder Interviews"],
  },
  {
    role: "Blockchain Research Intern",
    company: "Dummy Blockchain Labs",
    period: "Jan 2024 - Mar 2024",
    description:
      "Researched use cases of smart contracts in supply chain finance. Assisted in writing whitepapers and created process flow diagrams for decentralized audit systems.",
    tags: ["Smart Contracts", "Whitepapers", "Supply Chain", "Web3"],
  },
];

const certifications = [
  { name: "SAP Fundamentals", issuer: "SAP Learning Hub", year: "2024" },
  { name: "SQL for Data Analysis", issuer: "Coursera / Google", year: "2024" },
  { name: "Blockchain Basics", issuer: "NPTEL / Coursera", year: "2023" },
  { name: "Business Analysis Fundamentals", issuer: "Udemy / IIBA", year: "2024" },
];

export const ExperienceSection = (): JSX.Element => {
  return (
    <section id="experience" data-testid="section-experience" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[#4d9e8e] text-sm font-medium uppercase tracking-widest mb-4">
              Career
            </p>
            <h2 className="section-heading mb-10">Experience</h2>

            <div className="flex flex-col gap-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  data-testid={`card-experience-${index}`}
                  className="glass-card p-8 relative"
                >
                  <div className="absolute top-8 left-0 w-1 h-12 bg-[#4d9e8e] rounded-r" />
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h3 className="text-white font-medium text-xl">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-[#4d9e8e] text-sm mt-1">
                          <Building2 size={14} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <span className="text-[#a9a9a9] text-sm font-light">{exp.period}</span>
                    </div>
                    <p className="text-[#a9a9a9] text-base font-light leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <span key={i} className="skill-pill text-xs">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[#4d9e8e] text-sm font-medium uppercase tracking-widest mb-4">
              Credentials
            </p>
            <h2 className="section-heading mb-10">Certifications</h2>

            <div className="flex flex-col gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  data-testid={`card-certification-${index}`}
                  className="glass-card p-6 flex items-center gap-5"
                >
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#4d9e8e]/10 text-[#4d9e8e] rounded-xl">
                    <Link2 size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium text-base truncate">{cert.name}</h4>
                    <p className="text-[#a9a9a9] text-sm font-light">{cert.issuer}</p>
                  </div>
                  <span className="text-[#4d9e8e] text-sm font-medium flex-shrink-0">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
