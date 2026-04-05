import { useState, useEffect } from "react";
import { Menu, X, UserRound, Cpu, Lightbulb, Network, MessageSquare, FileText } from "lucide-react";

const navItems = [
  { label: "About",      Icon: UserRound,     href: "#about" },
  { label: "Skills",     Icon: Cpu,           href: "#skills" },
  { label: "Projects",   Icon: Lightbulb,     href: "#projects" },
  { label: "Experience", Icon: Network,        href: "#experience" },
  { label: "Contact",    Icon: MessageSquare, href: "#contact" },
];

export const NavSection = (): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarHovered, setSidebarHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Top navbar — visible only at top, fades out on scroll ── */}
      <nav
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "opacity-0 pointer-events-none -translate-y-3" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <a
            href="#"
            data-testid="link-home"
            className="font-medium text-white text-lg tracking-tight"
          >
            Gokul<span className="text-[#4d9e8e]">.</span>
          </a>

          {/* Desktop floating glass pill */}
          <div className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
                className="px-4 py-1.5 text-[#c0c0c0] hover:text-white text-sm font-light rounded-full hover:bg-white/10 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-resume"
              className="ml-1 px-5 py-2 rounded-full text-sm font-medium text-[#7ee8d8] bg-[#4d9e8e]/20 border border-[#4d9e8e]/35 hover:bg-[#4d9e8e]/35 hover:border-[#4d9e8e]/60 backdrop-blur-sm transition-all duration-200"
            >
              Resume
            </a>
          </div>

          {/* Mobile hamburger (top, only at landing) */}
          <button
            data-testid="button-mobile-menu"
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white hover:bg-white/20 transition-all duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden mx-4 mb-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 px-5 py-5 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
                className="text-[#c0c0c0] hover:text-white text-base font-light transition-colors px-2 py-1 rounded-lg hover:bg-white/8"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-mobile-resume"
              className="mt-2 px-5 py-2.5 rounded-full text-sm font-medium text-[#7ee8d8] bg-[#4d9e8e]/20 border border-[#4d9e8e]/35 hover:bg-[#4d9e8e]/35 transition-all duration-200 text-center"
            >
              Resume
            </a>
          </div>
        )}
      </nav>

      {/* ── Right vertical sidebar — desktop only, appears on scroll ── */}
      <div
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col pr-3 transition-all duration-500 ${
          scrolled ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6 pointer-events-none"
        }`}
        onMouseEnter={() => setSidebarHovered(true)}
        onMouseLeave={() => setSidebarHovered(false)}
      >
        <div
          className={`flex flex-col gap-0.5 p-2 rounded-2xl border transition-all duration-300 water-shimmer ${
            sidebarHovered
              ? "bg-[#4d9e8e]/22 border-[#4d9e8e]/45 backdrop-blur-xl"
              : "bg-white/6 border-white/12 backdrop-blur-md"
          }`}
          style={{
            boxShadow: sidebarHovered
              ? "0 8px 32px rgba(77,158,142,0.25), inset 0 1px 0 rgba(126,232,216,0.15)"
              : "0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {navItems.map(({ label, Icon, href }) => (
            <a
              key={href}
              href={href}
              data-testid={`link-sidebar-${label.toLowerCase()}`}
              className={`flex items-center gap-2.5 rounded-xl text-white transition-all duration-200 hover:scale-105 hover:bg-white/12 ${
                sidebarHovered ? "px-4 py-2.5 justify-start" : "px-2.5 py-2.5 justify-center"
              }`}
            >
              <Icon size={16} className="text-[#7ee8d8] shrink-0" />
              <span
                className="text-sm font-light text-[#e8e8e8] whitespace-nowrap overflow-hidden transition-all duration-300"
                style={{
                  maxWidth: sidebarHovered ? "7rem" : "0",
                  opacity: sidebarHovered ? 1 : 0,
                }}
              >
                {label}
              </span>
            </a>
          ))}

          <div className="h-px bg-white/10 mx-1 my-1" />

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-sidebar-resume"
            className={`flex items-center gap-2.5 rounded-xl text-[#7ee8d8] bg-[#4d9e8e]/20 border border-[#4d9e8e]/35 hover:bg-[#4d9e8e]/40 hover:scale-105 transition-all duration-200 ${
              sidebarHovered ? "px-4 py-2.5 justify-start" : "px-2.5 py-2.5 justify-center"
            }`}
          >
            <FileText size={15} className="shrink-0" />
            <span
              className="text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-300"
              style={{
                maxWidth: sidebarHovered ? "7rem" : "0",
                opacity: sidebarHovered ? 1 : 0,
              }}
            >
              Resume
            </span>
          </a>
        </div>
      </div>

      {/* ── Floating hamburger — mobile only, appears on scroll ── */}
      <button
        data-testid="button-floating-menu"
        className={`fixed bottom-6 right-5 z-50 md:hidden w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-md border text-white transition-all duration-500 ${
          scrolled
            ? "opacity-100 bg-[#4d9e8e]/30 border-[#4d9e8e]/45 hover:bg-[#4d9e8e]/50"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Navigation menu"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile overlay drawer — triggered from floating button when scrolled */}
      {mobileOpen && scrolled && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-4 top-4 bottom-4 w-60 rounded-2xl bg-[#4d9e8e]/12 backdrop-blur-xl border border-[#4d9e8e]/25 px-5 py-8 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#e0e0e0] hover:text-white text-base font-light py-2.5 border-b border-white/8 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-5 py-3 rounded-full text-sm font-medium text-[#7ee8d8] bg-[#4d9e8e]/25 border border-[#4d9e8e]/40 text-center hover:bg-[#4d9e8e]/40 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
};
