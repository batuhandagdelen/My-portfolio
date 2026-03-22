import { socials } from "@/utils/constants";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 pb-10 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-orange-500/6 blur-[120px]" />
        <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex justify-center order-1 lg:order-1">
            <div className="relative animate-float">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-orange-500/20 via-orange-500/5 to-transparent blur-2xl" />

              <div className="absolute -inset-3 rounded-full border border-dashed border-orange-500/20" />

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden border-2 border-orange-500/30 bg-gradient-to-br from-[#1a1a2e] to-[#0d0d14] flex items-center justify-center shadow-2xl shadow-orange-500/10">
                <img
                  src="/batuhan.jpeg"
                  alt="Batuhan"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 15%" }}
                />
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-2 flex flex-col gap-5 items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#f97316] rounded-full" />
              <span className="text-[#94a3b8] text-sm tracking-widest uppercase font-medium">
                Hi, I am
              </span>
            </div>

            <div className="space-y-1">
              <h1 className="font-[family-name:var(--font-syne)] text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-none tracking-tight">
                Batuhan
              </h1>
              <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl lg:text-4xl font-bold">
                <span className="text-[#f97316]">Frontend</span>
                <span className="text-white"> Developer</span>
              </h2>
            </div>

            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/8 text-[#94a3b8] hover:text-[#f97316] hover:border-orange-500/40 hover:bg-orange-500/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/15"
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

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:dagdelenbatuhan98@gmail.com"
                className="inline-flex items-center bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1 active:translate-y-0"
              >
                Contact Me
              </a>
              <a
                href="/"
                className="inline-flex items-center border border-[#f97316]/60 text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-1 active:translate-y-0 hover:shadow-xl hover:shadow-orange-500/20"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
