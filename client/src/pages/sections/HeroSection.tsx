import { ArrowDown, MapPin } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import heroBg from "@assets/image_1774278080132.png";
import profilePhoto from "@assets/profile-photo_1774278169861.jpg";

export const HeroSection = (): JSX.Element => {
  return (
    <section
      data-testid="section-hero"
      className="relative min-h-screen flex items-end md:items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-0 pt-28 flex items-center justify-between gap-12">
        <div className="max-w-xl flex flex-col gap-6 flex-shrink-0">
          <div className="flex items-center gap-2 text-[#a9a9a9] text-sm">
            <MapPin size={13} />
            <span>Chennai, India</span>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-tight">
              Gokul<br />Jayachandran
            </h1>
            <p className="text-lg md:text-xl text-[#4d9e8e] font-light">
              Aspiring Techno-Functional Business Analyst
            </p>
          </div>

          <p className="text-[#c0c0c0] text-base md:text-lg font-light leading-relaxed max-w-md">
            Building structured, scalable systems at the intersection of
            technology and strategy — BA · SAP · Blockchain · SQL · Python
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="mailto:gokuljai2006@gmail.com"
              data-testid="link-email-hero"
              className="px-6 py-3 bg-[#4d9e8e] text-white text-sm font-medium rounded-full hover:bg-[#3f857a] transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              data-testid="link-view-work"
              className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20 hover:bg-white/20 transition-colors"
            >
              View Work
            </a>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://github.com/gokeeel"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-github"
              aria-label="GitHub profile"
              className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-200"
            >
              <SiGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/gokeeel"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-linkedin"
              aria-label="LinkedIn profile"
              className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-200"
            >
              <SiLinkedin size={18} />
            </a>
          </div>
        </div>

        <div className="hidden lg:flex items-end justify-center flex-1 self-end pb-0">
          <div
            className="relative"
            style={{
              width: 340,
              height: 420,
            }}
          >
            <img
              src={profilePhoto}
              alt="Gokul Jayachandran"
              data-testid="img-profile-hero"
              className="w-full h-full object-cover object-top"
              style={{
                maskImage:
                  "radial-gradient(ellipse 82% 92% at 50% 44%, black 42%, rgba(0,0,0,0.6) 60%, transparent 78%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 82% 92% at 50% 44%, black 42%, rgba(0,0,0,0.6) 60%, transparent 78%)",
              }}
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        data-testid="link-scroll-down"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
};
