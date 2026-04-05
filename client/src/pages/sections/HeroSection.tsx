import { ArrowDown, MapPin } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import heroBg from "@assets/ezgif.com-webp-maker_1774277720139.webp";

export const HeroSection = (): JSX.Element => {
  return (
    <section
      data-testid="section-hero"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Gokul Jayachandran overlooking a quarry lake"
          className="absolute inset-0 w-full h-full object-cover object-[center_55%]"
        />
        {/* Right-side darkening for text — all screen sizes */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/92 via-black/55 to-transparent" />
        {/* Top vignette for nav */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        {/* Bottom vignette for grounding */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Subtle overall dark layer */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Text block — absolutely pinned to the right side */}
      <div className="absolute right-6 md:right-12 bottom-20 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-10 w-[52%] md:max-w-lg">
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-center gap-2 text-[#a9a9a9] text-xs md:text-sm">
            <MapPin size={12} />
            <span>Chennai, India</span>
          </div>

          <div className="flex flex-col gap-2 md:gap-3">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-tight">
              Gokul<br />Jayachandran
            </h1>
            <p className="text-sm md:text-xl font-light">
              <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-[#7ee8d8] border border-[#4d9e8e]/40">
                Aspiring Techno-Functional Business Analyst
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-5 p-4 md:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
            <p className="text-[#d0d0d0] text-xs md:text-base font-light leading-relaxed hidden sm:block">
              Building structured, scalable systems at the intersection of
              technology and strategy — BA · SAP · Blockchain · SQL · Python
            </p>

            <div className="flex items-center gap-2 md:gap-3 flex-wrap">
              <a
                href="mailto:gokuljai2006@gmail.com"
                data-testid="link-email-hero"
                className="px-4 py-2 md:px-6 md:py-3 bg-[#4d9e8e] text-white text-xs md:text-sm font-medium rounded-full hover:bg-[#3f857a] transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                data-testid="link-view-work"
                className="px-4 py-2 md:px-6 md:py-3 bg-white/10 text-white text-xs md:text-sm font-medium rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              >
                View Work
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/gokeeel"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-github"
                aria-label="GitHub profile"
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-white/20 transition-all duration-200"
              >
                <SiGithub size={15} />
              </a>
              <a
                href="https://linkedin.com/in/gokeeel"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-linkedin"
                aria-label="LinkedIn profile"
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-white/20 transition-all duration-200"
              >
                <SiLinkedin size={15} />
              </a>
            </div>
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
