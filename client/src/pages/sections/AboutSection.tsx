import { Briefcase, Code, Database, BarChart3 } from "lucide-react";

const highlights = [
  {
    icon: <Briefcase size={24} />,
    title: "Requirements Engineering",
    desc: "BRD, FRS, User Stories, Gap Analysis",
  },
  {
    icon: <Code size={24} />,
    title: "ERP Consulting",
    desc: "SAP Modules, Process Mapping, Workflow Design",
  },
  {
    icon: <Database size={24} />,
    title: "Blockchain Solutions",
    desc: "Smart Contracts, Decentralized Apps, Web3",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Data & Analytics",
    desc: "SQL, Python, Reporting, Decision Models",
  },
];

export const AboutSection = (): JSX.Element => {
  return (
    <section id="about" data-testid="section-about" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <p className="text-[#a78bfa] text-sm font-medium uppercase tracking-widest mb-4">
              About Me
            </p>
            <h2 className="section-heading mb-6">
              Technology meets Strategy
            </h2>
            <div className="flex flex-col gap-4">
              <p className="section-subheading leading-relaxed">
                I am an Aspiring Techno-Functional Business Analyst focused on building
                structured, scalable systems that solve real-world business problems.
              </p>
              <p className="text-[#a9a9a9] text-lg font-light leading-relaxed">
                My work sits at the intersection of technology and strategy, where I
                design and implement solutions that translate complex ideas into
                functional products.
              </p>
              <p className="text-[#a9a9a9] text-lg font-light leading-relaxed">
                I am particularly interested in platform-based systems, financial
                technology, and data-driven decision models.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {["SQL", "SAP", "Blockchain", "Python", "Solidity", "Figma", "JIRA"].map((tag) => (
                <span key={tag} className="skill-pill" data-testid={`badge-skill-${tag.toLowerCase()}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, index) => (
              <div
                key={index}
                data-testid={`card-highlight-${index}`}
                className="glass-card p-6 flex flex-col gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#a78bfa]/10 text-[#a78bfa] rounded-xl">
                  {item.icon}
                </div>
                <h3 className="text-white font-medium text-lg">{item.title}</h3>
                <p className="text-[#a9a9a9] text-sm font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
