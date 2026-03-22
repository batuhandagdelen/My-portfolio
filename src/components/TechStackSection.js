import { techs } from "@/utils/constants";

const TechStackSection = () => {
  return (
    <section id="tech" className="relative py-24 lg:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-[#f97316] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            What I work with
          </p>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl lg:text-5xl font-bold text-white">
            Tech Stack
          </h2>
          <div className="mt-4 w-12 h-1 bg-[#f97316] rounded-full mx-auto" />
          <p className="mt-6 text-[#64748b] text-sm max-w-md mx-auto">
            Technologies and tools I use day-to-day to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="group relative bg-[#111118] border border-white/6 rounded-2xl p-5 flex flex-col gap-3 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-opacity-40"
              style={{
                "--tech-color": tech.color,
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: `0 0 0 1px ${tech.color}30, 0 8px 24px ${tech.color}10`,
                }}
              />

              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold font-[family-name:var(--font-syne)] shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: tech.bg, color: tech.color }}
              >
                {tech.abbr}
              </div>

              <div>
                <p className="text-white text-sm font-semibold leading-tight">
                  {tech.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
