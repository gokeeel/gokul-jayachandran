import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const NavSection = (): JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      data-testid="navbar"
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <a
          href="#"
          data-testid="link-home"
          className="font-medium text-white text-lg tracking-tight"
        >
          Gokul<span className="text-[#4d9e8e]">.</span>
        </a>

        {/* Desktop nav — floating glass pill */}
        <div className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`link-nav-${link.label.toLowerCase()}`}
              className="px-4 py-1.5 text-[#c0c0c0] hover:text-white text-sm font-light rounded-full hover:bg-white/10 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          {/* CTA — teal glass button */}
          <a
            href="mailto:gokuljai2006@gmail.com"
            data-testid="button-hire-me"
            className="ml-1 px-5 py-2 rounded-full text-sm font-medium text-[#7ee8d8] bg-[#4d9e8e]/20 border border-[#4d9e8e]/35 hover:bg-[#4d9e8e]/35 hover:border-[#4d9e8e]/60 backdrop-blur-sm transition-all duration-200"
          >
            Hire Me
          </a>
        </div>

        <button
          data-testid="button-mobile-menu"
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white hover:bg-white/20 transition-all duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu — glass panel */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden mx-4 mb-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 px-5 py-5 flex flex-col gap-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`link-mobile-${link.label.toLowerCase()}`}
              className="text-[#c0c0c0] hover:text-white text-base font-light transition-colors px-2 py-1 rounded-lg hover:bg-white/8"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:gokuljai2006@gmail.com"
            data-testid="button-mobile-hire-me"
            className="mt-2 px-5 py-2.5 rounded-full text-sm font-medium text-[#7ee8d8] bg-[#4d9e8e]/20 border border-[#4d9e8e]/35 hover:bg-[#4d9e8e]/35 hover:border-[#4d9e8e]/60 transition-all duration-200 text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};
