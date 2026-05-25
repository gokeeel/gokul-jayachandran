import { Building2, Award, Trophy } from "lucide-react";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "SprintXplore",
    period: "Jan 2026 – Apr 2026",
    description:
      "Developed DeFiScore, a privacy-preserving on-chain credit verification system using blockchain technology. Implemented smart contracts for under-collateralized DeFi lending and built cryptographic solutions that enable credit verification without exposing sensitive transaction data.",
    tags: ["Blockchain", "Smart Contracts", "Solidity", "ZK Proofs", "DeFi"],
  },
  {
    role: "Marketing & Sales Intern",
    company: "DOT CoWork",
    period: "Jun 2025 – Jul 2025",
    description:
      "Handled 50+ cold calls and led lead generation initiatives, conducting workspace tours for potential clients. Managed client onboarding processes and developed marketing strategies to optimize conversion rates. Utilized marketing funnels and UI/UX principles to enhance customer engagement and retention.",
    tags: ["Lead Generation", "Client Onboarding", "Marketing Strategy", "UI/UX"],
  },
];

const certifications = [
  { name: "Business to Business Marketing", issuer: "NPTEL", year: "2024" },
  { name: "Programming in Java", issuer: "NPTEL", year: "2024" },
  { name: "The Joy of Computing using Python", issuer: "NPTEL", year: "2023" },
  { name: "Agile Scrum in Practice", issuer: "Infosys", year: "2024" },
  { name: "National Level STTP 2k24", issuer: "Brainovision Solutions", year: "2024" },
];

const achievements = [
  { icon: "🥇", title: "Hackathon Winner", detail: "ChemOvate 2026" },
  { icon: "🏅", title: "Hackathon Finalist", detail: "ChemOvate 2025 · NxtGen 2026 · Statathon 2025 · Hack the Horizon 2025" },
  { icon: "🎓", title: "Campus Leadership", detail: "President – Youth United Council of India" },
  { icon: "🚨", title: "Club Influencer", detail: "Disaster Management & Safety Club" },
];

export const ExperienceSection = (): JSX.Element => {
  return (
    <section id="experience" data-testid="section-experience" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — Experience */}
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

          {/* Right — Certifications + Achievements */}
          <div className="flex flex-col gap-12">

            {/* Certifications */}
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
                    className="glass-card p-5 flex items-center gap-5"
                  >
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#4d9e8e]/10 text-[#4d9e8e] rounded-xl">
                      <Award size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm leading-snug">{cert.name}</h4>
                      <p className="text-[#a9a9a9] text-xs font-light mt-0.5">{cert.issuer}</p>
                    </div>
                    <span className="text-[#4d9e8e] text-sm font-medium flex-shrink-0">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <p className="text-[#4d9e8e] text-sm font-medium uppercase tracking-widest mb-4">
                Highlights
              </p>
              <h2 className="section-heading mb-10">Achievements</h2>

              <div className="flex flex-col gap-4">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    data-testid={`card-achievement-${index}`}
                    className="glass-card p-5 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#4d9e8e]/10 rounded-xl text-lg">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm">{item.title}</h4>
                      <p className="text-[#a9a9a9] text-xs font-light leading-relaxed mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
