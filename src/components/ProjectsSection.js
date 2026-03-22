import { projects } from "@/utils/constants";
import { GitHubIcon } from "@/utils/constants";

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-[#0d0d15]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-[#f97316] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            What I&apos;ve built
          </p>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl lg:text-5xl font-bold text-white">
            My Projects
          </h2>
          <div className="mt-4 w-12 h-1 bg-[#f97316] rounded-full" />
          <p className="mt-6 text-[#64748b] text-sm max-w-md">
            A selection of projects I&apos;ve worked on — from side projects to
            client work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#111118] border border-white/6 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/25 hover:shadow-2xl hover:shadow-orange-500/8 cursor-pointer"
            >
              <div
                className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.gradient}`}
              >
                {project.preview ? (
                  <>
                    <img
                      src={project.preview}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111118]/80 via-transparent to-transparent" />
                  </>
                ) : (
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                )}
                <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                  <span className="font-[family-name:var(--font-syne)] text-5xl font-extrabold text-white/20 select-none leading-none">
                    0{i + 1}
                  </span>
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${project.dotColor} shadow-lg`}
                  />
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4">
                <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-white group-hover:text-[#f97316] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-[#64748b] text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-[#94a3b8] uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
