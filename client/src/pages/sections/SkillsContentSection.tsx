import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const frontEndIcons = [
  {
    src: "/figmaAssets/logos-html5-plain.svg",
    alt: "HTML5",
    className: "w-[51px] h-[51px]",
  },
  {
    src: "/figmaAssets/logos-javascript-plain.svg",
    alt: "JavaScript",
    className: "w-[50px] h-[50px]",
  },
  {
    src: "/figmaAssets/logos-typescript-plain.svg",
    alt: "TypeScript",
    className: "w-[50px] h-[50px]",
  },
];

const frontEndIconsRow2 = [
  {
    src: "/figmaAssets/logos-nextjs-original.svg",
    alt: "Next.js",
    className: "w-[61px] h-[61px]",
    hasBackground: true,
  },
  {
    src: "/figmaAssets/logos-redux-original.svg",
    alt: "Redux",
    className: "w-[50px] h-[50px]",
  },
  {
    src: "/figmaAssets/logos-react-original.svg",
    alt: "React",
    className: "w-[60px] h-[60px]",
  },
];

const backEndIcons = [
  {
    src: "/figmaAssets/logos-nodejs-plain-wordmark.svg",
    alt: "Node.js",
    className: "w-[70px] h-[70px]",
  },
  {
    src: "/figmaAssets/logos-express-original-wordmark.svg",
    alt: "Express",
    className: "w-[70px] h-[70px]",
  },
  {
    src: "/figmaAssets/logos-django-plain-wordmark.svg",
    alt: "Django",
    className: "w-[70px] h-[70px]",
  },
  {
    src: "/figmaAssets/logos-rails-plain-wordmark.svg",
    alt: "Rails",
    className: "w-[70px] h-[70px]",
  },
];

const coreConceptsRow1 = [
  { label: "Operating Systems" },
  { label: "Computer Networks" },
];

const coreConceptsRow2 = [
  { label: "Object-Oriented Programming" },
  { label: "DSA" },
];

const coreConceptsRow3 = [{ label: "System Design" }];

const personalDevRow1 = [
  { label: "Time Management" },
  { label: "Problem Solving" },
];

const personalDevRow2 = [{ label: "Communication" }, { label: "Leadership" }];

const stylingIconsRow1 = [
  {
    src: "/figmaAssets/logos-css3-plain.svg",
    alt: "CSS3",
    className: "w-[50px] h-[50px]",
  },
  {
    src: "/figmaAssets/logos-tailwindcss-plain.svg",
    alt: "Tailwind CSS",
    className: "w-[50px] h-[50px]",
  },
  {
    src: "/figmaAssets/logos-bootstrap-original.svg",
    alt: "Bootstrap",
    className: "w-[60px] h-[60px]",
  },
];

const stylingIconsRow2 = [
  {
    src: "/figmaAssets/logos-sass-original.svg",
    alt: "Sass",
    className: "w-[60px] h-[60px]",
  },
  {
    src: "/figmaAssets/logos-materialui-original.svg",
    alt: "Material UI",
    className: "w-[60px] h-[60px]",
  },
];

const cloudIconsRow1 = [
  {
    src: "/figmaAssets/logos-docker-plain.svg",
    alt: "Docker",
    className: "w-[60px] h-[60px]",
  },
  {
    src: "/figmaAssets/logos-azure-original.svg",
    alt: "Azure",
    className: "w-[50px] h-[50px]",
  },
  {
    src: "/figmaAssets/image-7.png",
    alt: "Cloud Platform",
    className: "w-[50px] h-[50px] object-cover",
  },
];

const testingIcons = [
  {
    src: "/figmaAssets/frame-38.svg",
    alt: "Testing Framework",
    className: "w-[98px] h-[98px]",
  },
  {
    src: "/figmaAssets/logos-jest-plain.svg",
    alt: "Jest",
    className: "w-10 h-10",
  },
  {
    src: "/figmaAssets/logos-selenium-original.svg",
    alt: "Selenium",
    className: "w-[50px] h-[50px]",
  },
];

const programmingLanguages = [
  {
    src: "/figmaAssets/logos-python-original.svg",
    alt: "Python",
    className: "w-[60px] h-[60px]",
  },
  {
    src: "/figmaAssets/logos-c-original.svg",
    alt: "C",
    className: "w-[60px] h-[60px]",
  },
  {
    src: "/figmaAssets/frame-41-1.svg",
    alt: "Programming Language",
    className: "w-[100px] h-[100px]",
  },
  {
    src: "/figmaAssets/logos.svg",
    alt: "Programming Language",
    className: "w-[50px] h-[50px]",
  },
];

const databaseIcons = [
  {
    src: "/figmaAssets/logos-mysql-plain-wordmark.svg",
    alt: "MySQL",
    className: "w-[70px] h-[70px]",
  },
  {
    src: "/figmaAssets/logos-postgresql-plain.svg",
    alt: "PostgreSQL",
    className: "w-[50px] h-[50px]",
  },
  {
    src: "/figmaAssets/logos-mongodb-plain-wordmark.svg",
    alt: "MongoDB",
    className: "w-[60px] h-[60px]",
  },
  {
    src: "/figmaAssets/logos-firebase-plain.svg",
    alt: "Firebase",
    className: "w-[60px] h-[60px]",
  },
];

const versionControlIcons = [
  {
    src: "/figmaAssets/logos-github-original.svg",
    alt: "GitHub",
    className: "w-[60px] h-[60px]",
  },
  {
    src: "/figmaAssets/logos-git-plain.svg",
    alt: "Git",
    className: "w-[60px] h-[60px]",
  },
];

const uiUxTags = [{ label: "Prototyping" }, { label: "Wireframing" }];

export const SkillsContentSection = (): JSX.Element => {
  return (
    <div className="flex items-start gap-5 w-full">
      <div className="flex flex-col items-center gap-5 flex-1">
        <Card className="w-full bg-[#1e1e1e] border-none rounded-[32px]">
          <CardContent className="flex flex-col items-start gap-[29px] px-10 py-[50px]">
            <div className="relative w-full h-[220px]">
              <div className="flex items-start gap-[30px] absolute top-0 left-0">
                {frontEndIcons.map((icon, index) => (
                  <div
                    key={`frontend-icon-${index}`}
                    className="inline-flex items-center justify-center gap-2.5 p-6 bg-[#141414] rounded-[200px] overflow-hidden"
                  >
                    <img
                      className={`relative ${icon.className}`}
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-[30px] absolute top-[120px] left-0 right-0">
                {frontEndIconsRow2.map((icon, index) => (
                  <div
                    key={`frontend-icon-row2-${index}`}
                    className="relative w-[100px] h-[100px] bg-[#141414] rounded-[200px] overflow-hidden"
                  >
                    {icon.hasBackground && (
                      <div className="absolute top-5 left-5 w-[60px] h-[59px] bg-[#d9d9d9] rounded-[30px/29.5px]" />
                    )}
                    <img
                      className={`absolute ${icon.hasBackground ? "top-[19px] left-[19px]" : "top-[25px] left-[25px]"} ${icon.className}`}
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-2.5">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]">
                Front-End Development
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] font-light text-[#a9a9a9] text-xl tracking-[0] leading-[normal]">
                Building engaging and user-friendly web interfaces using modern
                frameworks and technologies with expertise.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full bg-[#1e1e1e] border-none rounded-[32px]">
          <CardContent className="flex flex-col items-start gap-[30px] px-10 py-[50px]">
            <div className="flex h-[100px] items-center justify-center gap-[30px] w-full">
              {backEndIcons.map((icon, index) => (
                <div
                  key={`backend-icon-${index}`}
                  className="relative w-[100px] h-[100px] bg-[#141414] rounded-[200px] overflow-hidden"
                >
                  <img
                    className={`absolute ${index === 0 ? "top-3.5 left-3.5" : index === 1 ? "top-[18px] left-4" : "top-[15px] left-4"} ${icon.className}`}
                    alt={icon.alt}
                    src={icon.src}
                  />
                </div>
              ))}
            </div>

            <div className="w-full flex flex-col items-start gap-2.5">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]">
                Back-End Development
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] font-light text-[#a9a9a9] text-xl tracking-[0] leading-[normal]">
                Developing robust server-side logic and APIs to power dynamic
                and scalable web applications.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full bg-[#1e1e1e] border-none rounded-[32px]">
          <CardContent className="flex flex-col items-start gap-[30px] px-10 py-[50px]">
            <div className="flex flex-col items-start gap-[15px]">
              <div className="flex h-[50px] items-center gap-2.5">
                {coreConceptsRow1.map((item, index) => (
                  <Badge
                    key={`core-concept-row1-${index}`}
                    className="h-[50px] bg-[#141414] rounded-[200px] px-6 hover:bg-[#141414]"
                  >
                    <span className="[font-family:'DM_Sans',Helvetica] font-light text-white text-xl tracking-[0] leading-[normal]">
                      {item.label}
                    </span>
                  </Badge>
                ))}
              </div>

              <div className="flex h-[50px] items-center gap-2.5">
                {coreConceptsRow2.map((item, index) => (
                  <Badge
                    key={`core-concept-row2-${index}`}
                    className="h-[50px] bg-[#141414] rounded-[200px] px-6 hover:bg-[#141414]"
                  >
                    <span className="[font-family:'DM_Sans',Helvetica] font-light text-white text-xl tracking-[0] leading-[normal]">
                      {item.label}
                    </span>
                  </Badge>
                ))}
              </div>

              <div className="flex h-[50px] items-center gap-2.5">
                {coreConceptsRow3.map((item, index) => (
                  <Badge
                    key={`core-concept-row3-${index}`}
                    className="h-[50px] bg-[#141414] rounded-[200px] px-6 hover:bg-[#141414]"
                  >
                    <span className="[font-family:'DM_Sans',Helvetica] font-light text-white text-xl tracking-[0] leading-[normal]">
                      {item.label}
                    </span>
                  </Badge>
                ))}
              </div>
            </div>

            <div className="w-full flex flex-col items-start gap-2.5">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]">
                Core Computer Science Concepts
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] font-light text-[#a9a9a9] text-xl tracking-[0] leading-[normal]">
                Demonstrating a strong foundation in core computer science
                principles, including problem-solving, system design, and
                efficient computing techniques.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full bg-[#1e1e1e] border-none rounded-[32px]">
          <CardContent className="flex flex-col items-start gap-[30px] px-10 py-[50px]">
            <div className="flex flex-col items-start gap-[15px]">
              <div className="flex h-[50px] items-center gap-2.5">
                {personalDevRow1.map((item, index) => (
                  <Badge
                    key={`personal-dev-row1-${index}`}
                    className="h-[50px] bg-[#141414] rounded-[200px] px-6 hover:bg-[#141414]"
                  >
                    <span className="[font-family:'DM_Sans',Helvetica] font-light text-white text-xl tracking-[0] leading-[normal]">
                      {item.label}
                    </span>
                  </Badge>
                ))}
              </div>

              <div className="flex h-[50px] items-center gap-2.5">
                {personalDevRow2.map((item, index) => (
                  <Badge
                    key={`personal-dev-row2-${index}`}
                    className="h-[50px] bg-[#141414] rounded-[200px] px-6 hover:bg-[#141414]"
                  >
                    <span className="[font-family:'DM_Sans',Helvetica] font-light text-white text-xl tracking-[0] leading-[normal]">
                      {item.label}
                    </span>
                  </Badge>
                ))}
              </div>
            </div>

            <div className="w-full flex flex-col items-start gap-2.5">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]">
                Personal Development
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] font-light text-[#a9a9a9] text-xl tracking-[0] leading-[normal]">
                Committed to continuous learning and personal growth to excel in
                both professional and collaborative environments.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col items-start gap-5">
        <Card className="bg-[#1e1e1e] border-none rounded-[32px]">
          <CardContent className="flex flex-col items-start gap-10 px-[42px] py-[50px]">
            <div className="flex flex-col items-start gap-[30px]">
              <div className="flex h-[100px] items-start gap-[30px]">
                {stylingIconsRow1.map((icon, index) => (
                  <div
                    key={`styling-icon-row1-${index}`}
                    className={`${index === 0 ? "inline-flex items-center justify-center gap-2.5 p-6" : "relative w-[100px] h-[100px]"} bg-[#141414] rounded-[200px] overflow-hidden`}
                  >
                    <img
                      className={`${index === 0 ? "relative" : "absolute top-[25px] left-[25px]"} ${icon.className}`}
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </div>
                ))}
              </div>

              <div className="flex h-[100px] items-center justify-center gap-[30px]">
                {stylingIconsRow2.map((icon, index) => (
                  <div
                    key={`styling-icon-row2-${index}`}
                    className="relative w-[100px] h-[100px] bg-[#141414] rounded-[200px] overflow-hidden"
                  >
                    <img
                      className={`absolute top-5 left-5 ${icon.className}`}
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-[358px] flex flex-col items-start gap-2.5">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]">
                Styling &amp; Design
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] font-light text-[#a9a9a9] text-xl tracking-[0] leading-[normal]">
                Crafting visually appealing and responsive designs with advanced
                styling tools and frameworks.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="w-[442px] bg-[#1e1e1e] border-none rounded-[32px]">
          <CardContent className="flex flex-col items-start gap-[30px] px-[42px] py-[50px]">
            <img
              className="w-[358px] h-[100px]"
              alt="Web Animations"
              src="/figmaAssets/frame-40.svg"
            />

            <div className="w-[358px] flex flex-col items-start gap-2.5">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]">
                Web Animations
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] font-light text-[#a9a9a9] text-xl tracking-[0] leading-[normal]">
                Creating seamless animations and transitions to enhance user
                engagement and interactivity.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1e1e1e] border-none rounded-[32px]">
          <CardContent className="flex flex-col items-start gap-10 px-[42px] py-[50px]">
            <div className="flex flex-col items-start gap-[30px]">
              <div className="flex h-[100px] items-start gap-[30px]">
                {cloudIconsRow1.map((icon, index) => (
                  <div
                    key={`cloud-icon-${index}`}
                    className="relative w-[100px] h-[100px] bg-[#141414] rounded-[200px] overflow-hidden"
                  >
                    <img
                      className={`absolute ${index === 0 ? "top-[19px] left-[19px]" : "top-[25px] left-[25px]"} ${icon.className}`}
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </div>
                ))}
              </div>

              <img
                className="w-full h-[100px]"
                alt="Cloud Platforms"
                src="/figmaAssets/frame-41.svg"
              />
            </div>

            <div className="w-[358px] flex flex-col items-start gap-2.5">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]">
                Cloud &amp; Deployment
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] font-light text-[#a9a9a9] text-xl tracking-[0] leading-[normal]">
                Experienced in deploying and managing applications using modern
                cloud platforms and tools.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="w-[442px] bg-[#1e1e1e] border-none rounded-[32px]">
          <CardContent className="flex flex-col items-start gap-[30px] px-[42px] py-[50px]">
            <div className="flex w-[358px] h-[100px] items-start gap-[30px]">
              {testingIcons.map((icon, index) => (
                <div
                  key={`testing-icon-${index}`}
                  className={`${index === 0 ? "" : "relative w-[100px] h-[100px] bg-[#141414] rounded-[200px] overflow-hidden"}`}
                >
                  <img
                    className={`${index === 0 ? "w-[98px] h-[98px]" : `absolute ${index === 1 ? "top-[30px] left-[30px]" : "top-[25px] left-[25px]"}`} ${icon.className}`}
                    alt={icon.alt}
                    src={icon.src}
                  />
                </div>
              ))}
            </div>

            <div className="w-[358px] flex flex-col items-start gap-2.5">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]">
                Testing &amp; Debugging
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] font-light text-[#a9a9a9] text-xl tracking-[0] leading-[normal]">
                Ensuring code quality and reliability through rigorous testing
                and debugging processes.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col items-center gap-5 flex-1">
        <Card className="w-full bg-[#1e1e1e] border-none rounded-[32px]">
          <CardContent className="flex flex-col items-start gap-[30px] px-10 py-[50px]">
            <div className="flex h-[100px] items-center justify-center gap-[30px] w-full">
              {programmingLanguages.map((icon, index) => (
                <div
                  key={`programming-lang-${index}`}
                  className={`${index === 2 ? "" : "relative w-[100px] h-[100px] bg-[#141414] rounded-[200px] overflow-hidden"}`}
                >
                  <img
                    className={`${index === 2 ? "w-[100px] h-[100px]" : `absolute ${index === 3 ? "top-[25px] left-[26px]" : "top-5 left-5"}`} ${icon.className}`}
                    alt={icon.alt}
                    src={icon.src}
                  />
                </div>
              ))}
            </div>

            <div className="w-full flex flex-col items-start gap-2.5">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]">
                Programming Languages
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] font-light text-[#a9a9a9] text-xl tracking-[0] leading-[normal]">
                Proficient in problem-solving and applying programming languages
                to implement efficient data structures and algorithms.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full bg-[#1e1e1e] border-none rounded-[32px]">
          <CardContent className="flex flex-col items-start gap-10 px-10 py-[50px]">
            <div className="flex items-center justify-center gap-[30px] w-full">
              {databaseIcons.map((icon, index) => (
                <div
                  key={`database-icon-${index}`}
                  className="relative w-[100px] h-[100px] bg-[#141414] rounded-[200px] overflow-hidden"
                >
                  <img
                    className={`absolute ${index === 0 ? "top-2.5 left-[15px]" : index === 1 ? "top-[25px] left-[25px]" : "top-5 left-5"} ${icon.className}`}
                    alt={icon.alt}
                    src={icon.src}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start gap-2.5">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]">
                Database Management
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] font-light text-[#a9a9a9] text-xl tracking-[0] leading-[normal]">
                Designing and managing databases to ensure secure and efficient
                data storage and retrieval.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-start gap-5 w-full">
          <Card className="w-[267px] bg-[#1e1e1e] border-none rounded-[32px]">
            <CardContent className="flex flex-col items-start gap-10 px-10 py-[50px]">
              <div className="flex items-center gap-[30px] w-full">
                <div className="w-[99px] h-[99px] relative bg-[#141414] rounded-[200px] overflow-hidden">
                  <img
                    className="top-[17px] left-0 w-[99px] h-[66px] absolute object-cover"
                    alt="Mobile Development"
                    src="/figmaAssets/image-6.png"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col items-start gap-2.5">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]">
                  Mobile App Development
                </h3>
                <p className="[font-family:'DM_Sans',Helvetica] font-light text-[#a9a9a9] text-xl tracking-[0] leading-[normal]">
                  Creating cross-platform mobile apps with sleek designs and
                  robust functionality.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1 bg-[#1e1e1e] border-none rounded-[32px]">
            <CardContent className="flex flex-col items-start gap-10 px-10 py-[50px]">
              <div className="flex items-center justify-between w-full">
                {versionControlIcons.map((icon, index) => (
                  <div
                    key={`version-control-icon-${index}`}
                    className="w-[99px] h-[99px] relative bg-[#141414] rounded-[200px] overflow-hidden"
                  >
                    <img
                      className={`absolute top-5 left-5 ${icon.className}`}
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </div>
                ))}
              </div>

              <div className="w-full flex flex-col items-start gap-2.5">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]">
                  Version Control &amp; Collaboration
                </h3>
                <p className="[font-family:'DM_Sans',Helvetica] font-light text-[#a9a9a9] text-xl tracking-[0] leading-[normal]">
                  Effectively managing code and collaborating on projects to
                  ensure seamless teamwork.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="w-full bg-[#1e1e1e] border-none rounded-[32px]">
          <CardContent className="flex flex-col items-start gap-[30px] px-[42px] py-[50px]">
            <div className="flex items-center justify-between w-full">
              <div className="bg-[#141414] rounded-[200px] overflow-hidden w-[98px] h-[98px]">
                <img
                  className="absolute top-6 left-6 w-[50px] h-[50px]"
                  alt="Figma"
                  src="/figmaAssets/logos-figma-original.svg"
                />
              </div>

              <div className="inline-flex items-center justify-center gap-2.5">
                {uiUxTags.map((tag, index) => (
                  <Badge
                    key={`uiux-tag-${index}`}
                    className="bg-[#141414] rounded-[200px] px-[37px] py-2.5 hover:bg-[#141414]"
                  >
                    <span className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
                      {tag.label}
                    </span>
                  </Badge>
                ))}
              </div>
            </div>

            <div className="w-full flex flex-col items-start gap-2.5">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]">
                UI/UX Design
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] font-light text-[#a9a9a9] text-xl tracking-[0] leading-[normal]">
                Designing user-centric interfaces that are intuitive, visually
                appealing, and easy to navigate.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
