import { RevealOnScreen } from "../RevealOnscreen";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScreen>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ERP System Card */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
              <h3 className="text-xl font-bold mb-2">ERP System</h3>
              <p className="text-gray-400 mb-4">
                A system to streamline sales, production, and inventory management for a clothing business. Provides real-time stock tracking, production order processing, and raw material allocation.
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "Java", "SpringBoot", "MySQL", "HTML", "CSS", "Bootstrap"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] hover:bg-blue-500/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Dulki270/diluclothing.git"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* ERP System Card */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
              <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
              <p className="text-gray-400 mb-4">
                A personal portfolio website built with React and Tailwind CSS to showcase my projects,
                skills, and contact information. Deployed using GitHub Pages.
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwind CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] hover:bg-blue-500/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Dulki270/diluclothing.git"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Calculator Card */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
              <h3 className="text-xl font-bold mb-2">Web-based Calculator</h3>
              <p className="text-gray-400 mb-4">
                Perform real-time calculations with +, -, *, /. Handles edge cases, provides responsive UI built with HTML, CSS, and JavaScript, and prevents invalid results.
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "HTML", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] hover:bg-blue-500/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Dulki270/Calculator.git"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScreen>
    </section>
  );
};
