import { SiPython, SiJavascript, SiHtml5, SiCss3, SiSolidity, SiMysql, SiPostgresql, SiMongodb, SiFirebase, SiGit, SiGithub, SiFigma, SiVisualstudiocode, SiJira, SiPostman } from "react-icons/si";

const skillCategories = [
  {
    title: "Programming & Scripting",
    description: "Building solutions with modern programming languages and scripting tools.",
    icons: [
      { icon: <SiPython size={32} />, label: "Python", color: "#3776AB" },
      { icon: <SiJavascript size={32} />, label: "JavaScript", color: "#F7DF1E" },
      { icon: <SiHtml5 size={32} />, label: "HTML5", color: "#E34F26" },
      { icon: <SiCss3 size={32} />, label: "CSS3", color: "#1572B6" },
      { icon: <SiSolidity size={32} />, label: "Solidity", color: "#636890" },
    ],
  },
  {
    title: "Databases",
    description: "Designing and managing databases for secure and efficient data operations.",
    icons: [
      { icon: <SiMysql size={32} />, label: "MySQL", color: "#4479A1" },
      { icon: <SiPostgresql size={32} />, label: "PostgreSQL", color: "#336791" },
      { icon: <SiMongodb size={32} />, label: "MongoDB", color: "#47A248" },
      { icon: <SiFirebase size={32} />, label: "Firebase", color: "#FFCA28" },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Leveraging industry tools for development, design, and collaboration.",
    icons: [
      { icon: <SiGit size={32} />, label: "Git", color: "#F05032" },
      { icon: <SiGithub size={32} />, label: "GitHub", color: "#fff" },
      { icon: <SiVisualstudiocode size={32} />, label: "VS Code", color: "#007ACC" },
      { icon: <SiPostman size={32} />, label: "Postman", color: "#FF6C37" },
      { icon: <SiFigma size={32} />, label: "Figma", color: "#F24E1E" },
    ],
  },
  {
    title: "BA & ERP Tools",
    description: "Proficient in enterprise tools for business analysis and process management.",
    pills: ["SAP", "JIRA", "MS Excel", "Confluence"],
  },
  {
    title: "Core Concepts",
    description: "Strong foundation in computer science principles and business analysis methodologies.",
    pills: ["Requirements Engineering", "System Design", "Process Mapping", "Gap Analysis", "Data Modeling", "Agile/Scrum"],
  },
  {
    title: "Soft Skills",
    description: "Committed to continuous learning and collaborative excellence.",
    pills: ["Stakeholder Management", "Problem Solving", "Communication", "Leadership", "Time Management"],
  },
];

export const SkillsSection = (): JSX.Element => {
  return (
    <section id="skills" data-testid="section-skills" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#4d9e8e] text-sm font-medium uppercase tracking-widest mb-4">
            Skills & Tools
          </p>
          <h2 className="section-heading">What I Work With</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              data-testid={`card-skill-${index}`}
              className="glass-card p-8 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-white font-medium text-xl">{cat.title}</h3>
                <p className="text-[#a9a9a9] text-sm font-light leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {cat.icons && (
                <div className="flex flex-wrap gap-4">
                  {cat.icons.map((item, i) => (
                    <div
                      key={i}
                      className="group flex flex-col items-center gap-2"
                    >
                      <div className="w-16 h-16 flex items-center justify-center bg-[#0a1211] rounded-2xl border border-[#1a2624] group-hover:border-[#253a37] transition-all duration-200"
                        style={{ color: item.color }}>
                        {item.icon}
                      </div>
                      <span className="text-[#a9a9a9] text-xs">{item.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {cat.pills && (
                <div className="flex flex-wrap gap-2">
                  {cat.pills.map((pill, i) => (
                    <span key={i} className="skill-pill text-xs">
                      {pill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
