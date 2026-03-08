import backgroundPhoto from "@assets/background-photo_1772994711019.png";
import profilePhoto from "@assets/profile-photo_1772994762740.jpg";
import { ArrowDown, MapPin } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export const HeroSection = (): JSX.Element => {
  return (
    <section data-testid="section-hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundPhoto}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8 pt-20">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#a78bfa]/40 shadow-2xl animate-fade-in">
          <img
            src={profilePhoto}
            alt="Gokul Jayachandran"
            data-testid="img-profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center gap-4 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight">
            Gokul Jayachandran
          </h1>
          <p className="text-xl md:text-2xl text-[#a78bfa] font-light">
            Aspiring Techno-Functional Business Analyst
          </p>
          <p className="text-[#a9a9a9] text-lg font-light max-w-2xl leading-relaxed mt-2">
            Building structured, scalable systems that solve real-world business problems
            at the intersection of technology and strategy.
          </p>

          <div className="flex items-center gap-2 text-[#a9a9a9] text-sm mt-2">
            <MapPin size={14} />
            <span>Chennai, India</span>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://github.com/gokeeel"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-github"
              className="w-12 h-12 flex items-center justify-center bg-[#1e1e1e] rounded-full text-white hover:bg-[#2a2a2a] hover:text-[#a78bfa] transition-all duration-200"
            >
              <SiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/gokeeel"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-linkedin"
              className="w-12 h-12 flex items-center justify-center bg-[#1e1e1e] rounded-full text-white hover:bg-[#2a2a2a] hover:text-[#0077B5] transition-all duration-200"
            >
              <SiLinkedin size={20} />
            </a>
            <a
              href="mailto:gokuljai2006@gmail.com"
              data-testid="link-email-hero"
              className="px-6 py-3 bg-[#a78bfa] text-white text-sm font-medium rounded-full hover:bg-[#9171e8] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <a
          href="#about"
          data-testid="link-scroll-down"
          className="absolute bottom-10 animate-bounce text-[#a9a9a9] hover:text-white transition-colors"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};
