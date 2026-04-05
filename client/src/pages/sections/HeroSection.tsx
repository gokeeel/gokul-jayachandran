import { useRef, useState } from "react";
import { ArrowDown, MapPin } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import heroBg from "@assets/ezgif.com-webp-maker_1774277720139.webp";

const GlassCard = ({ children }: { children: React.ReactNode }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpot({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => setSpot((s) => ({ ...s, opacity: 0 }));

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 p-4 md:p-5 cursor-default transition-all duration-300"
      style={{
        boxShadow: "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* Mouse-tracking spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: spot.opacity,
          background: `radial-gradient(circle at ${spot.x}% ${spot.y}%, rgba(77,158,142,0.18) 0%, rgba(126,232,216,0.08) 40%, transparent 70%)`,
        }}
      />
      {/* Shimmer border highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: spot.opacity,
          background: `radial-gradient(circle at ${spot.x}% ${spot.y}%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
          maskImage: "linear-gradient(black, black)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, transparent 100%)",
        }}
      />
      {children}
    </div>
  );
};

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
        <div className="absolute inset-0 bg-gradient-to-l from-black/92 via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Text block */}
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
            <div className="inline-block px-3 py-1.5 rounded-xl bg-black/50 backdrop-blur-sm text-[#7ee8d8] border border-[#4d9e8e]/40 text-sm md:text-xl font-light leading-snug">
              Aspiring Techno-Functional Business Analyst
            </div>
          </div>

          {/* Interactive glassmorphism — description text only, hidden on mobile */}
          <div className="hidden sm:block">
            <GlassCard>
              <p className="relative z-10 text-[#d0d0d0] text-xs md:text-base font-light leading-relaxed">
                Building structured, scalable systems at the intersection of
                technology and strategy — BA · SAP · Blockchain · SQL · Python
              </p>
            </GlassCard>
          </div>

          {/* Buttons — outside the glass */}
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
              className="px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-sm text-white text-xs md:text-sm font-medium rounded-full border border-white/20 hover:bg-white/20 transition-colors"
            >
              View Work
            </a>
          </div>

          {/* Social links — outside the glass */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gokeeel"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-github"
              aria-label="GitHub profile"
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-200"
            >
              <SiGithub size={15} />
            </a>
            <a
              href="https://linkedin.com/in/gokeeel"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-linkedin"
              aria-label="LinkedIn profile"
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-200"
            >
              <SiLinkedin size={15} />
            </a>
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
