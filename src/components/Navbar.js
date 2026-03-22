"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/utils/constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080810]/85 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-[family-name:var(--font-syne)] text-lg font-bold tracking-tight select-none"
        >
          <span className="text-[#f97316]">&lt;</span>
          Batuhan Dağdelen
          <span className="text-[#f97316]">/&gt;</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-[#94a3b8] hover:text-[#f97316] transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#f97316] rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:dagdelenbatuhan98@gmail.com"
          className="hidden md:inline-flex items-center bg-[#f97316] hover:bg-[#ea580c] text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0"
        >
          Contact Me
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-px w-6 bg-white rounded-full transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-white rounded-full transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#111118] border-t border-white/5 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#94a3b8] hover:text-[#f97316] text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:dagdelenbatuhan98@gmail.com"
            className="mt-1 flex justify-center items-center bg-[#f97316] hover:bg-[#ea580c] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
