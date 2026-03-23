import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export const ContactSection = (): JSX.Element => {
  return (
    <section id="contact" data-testid="section-contact" className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#4d9e8e] text-sm font-medium uppercase tracking-widest mb-4">
          Get In Touch
        </p>
        <h2 className="section-heading mb-6">Let's Connect</h2>
        <p className="section-subheading mx-auto mb-12">
          I'm always open to interesting conversations, internship opportunities,
          and collaborative projects in BA, ERP, FinTech, or Blockchain.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:gokuljai2006@gmail.com"
            data-testid="button-email-contact"
            className="flex items-center gap-3 px-8 py-4 bg-[#4d9e8e] text-white font-medium rounded-full hover:bg-[#3f857a] transition-colors"
          >
            <Mail size={18} />
            Drop Me a Mail
            <ArrowUpRight size={16} />
          </a>
          <a
            href="https://linkedin.com/in/gokeeel"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-linkedin-contact"
            className="flex items-center gap-3 px-8 py-4 bg-[#0d1715] text-white font-medium rounded-full border border-[#1a2624] hover:border-[#253a37] transition-colors"
          >
            <SiLinkedin size={18} />
            Connect on LinkedIn
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-[#a9a9a9] text-sm">
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>Chennai, India</span>
          </div>
          <span className="text-[#1a2624]">|</span>
          <a
            href="https://github.com/gokeeel"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-github-contact"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <SiGithub size={14} />
            <span>gokeeel</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-[#0d1715] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#a9a9a9] text-sm">
        <span data-testid="text-copyright">Gokul Jayachandran</span>
        <span className="font-light">Aspiring Techno-Functional Business Analyst</span>
      </div>
    </section>
  );
};
