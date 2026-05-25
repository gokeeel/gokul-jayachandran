import profilePhoto from "@assets/profile-photo_1774278169861.jpg";

export const AboutSection = (): JSX.Element => {
  return (
    <section
      id="about"
      data-testid="section-about"
      className="py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <p className="text-[#4d9e8e] text-sm font-medium uppercase tracking-widest mb-4">
              About Me
            </p>
            <h2 className="section-heading mb-6">Technology meets Strategy</h2>
            <div className="flex flex-col gap-4">
              <p className="section-subheading leading-relaxed">
                I am an Aspiring Techno-Functional Business Analyst focused on
                building structured, scalable systems that solve real-world
                business problems.
              </p>
              <p className="text-[#a9a9a9] text-lg font-light leading-relaxed">
                My work sits at the intersection of technology and strategy,
                where I design and implement solutions that translate complex
                ideas into functional products.
              </p>
              <p className="text-[#a9a9a9] text-lg font-light leading-relaxed">
                I am particularly interested in platform-based systems,
                financial technology, and data-driven decision models.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {["SQL", "SAP", "Blockchain", "Python", "Solidity", "Figma"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="skill-pill"
                    data-testid={`badge-skill-${tag.toLowerCase()}`}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="flex-shrink-0 flex justify-center">
            <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-white/8">
              <img
                src={profilePhoto}
                alt="Gokul Jayachandran"
                data-testid="img-profile-about"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
