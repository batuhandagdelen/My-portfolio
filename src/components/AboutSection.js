const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#0d0d15]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-[#f97316] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Get to know me
          </p>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl lg:text-5xl font-bold text-white">
            About Me
          </h2>
          <div className="mt-4 w-12 h-1 bg-[#f97316] rounded-full" />
        </div>

        <div className="flex flex-col gap-4 text-[#94a3b8] text-base leading-relaxed max-w-2xl">
          <p>
            Hi, I'm <span className="text-white font-semibold">Batuhan</span> —
            a passionate Frontend Developer focused on building modern,
            user-friendly, and high-performance web applications. I specialize
            in{" "}
            <span className="text-[#f97316]">
              JavaScript, TypeScript, React, and Next.js
            </span>
            , creating responsive and scalable interfaces that deliver a smooth
            user experience across all devices.
          </p>
          <p>
            I care deeply about writing clean, maintainable, and readable code,
            and I always strive to follow best practices in my projects. I'm
            constantly learning new technologies, improving my skills, and
            exploring better ways to solve problems.
          </p>
          <p>
            My goal is to craft products that are not only visually appealing
            but also functional and efficient, with a strong focus on user
            experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
