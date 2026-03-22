import { socials } from "@/utils/constants";

const Footer = () => {
  return (
    <footer className="relative bg-[#080810] border-t border-white/5 py-10">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/8 text-[#94a3b8] hover:text-[#f97316] hover:border-orange-500/40 hover:bg-orange-500/8 transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4.5 h-4.5"
              >
                <path d={s.d} />
              </svg>
            </a>
          ))}
        </div>

        <div className="w-full h-px bg-white/5" />

        <p className="text-[#475569] text-sm text-center">
          © {new Date().getFullYear()} Designed by{" "}
          <a
            href="#home"
            className="font-[family-name:var(--font-syne)] font-bold text-[#94a3b8] hover:text-[#f97316] transition-colors duration-300 select-none"
          >
            <span className="text-[#f97316]">&lt;</span>
            Batuhan Dağdelen
            <span className="text-[#f97316]">/&gt;</span>
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
