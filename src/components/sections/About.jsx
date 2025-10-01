import { RevealOnScreen } from "../RevealOnscreen";

export const About = () => {
  const frontEndSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Bootstrap"
  ];

  const backEndSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Spring Boot",
    "MySQL",
    "Java",
    "Postman"
  ];


  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-20">
      <RevealOnScreen>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I am an IT undergraduate passionate about web development and software engineering. I enjoy creating user-friendly applications and constantly improving my skills in modern technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Front End */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Front End</h3>
                <div className="flex flex-wrap gap-2">
                  {frontEndSkills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm border border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Back End */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Back End</h3>
                <div className="flex flex-wrap gap-2">
                  {backEndSkills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm border border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong className="text-gray-100">Bachelor Degree:</strong>
                  <p>Bachelor of Information Technology - University of Colombo School of Computing (2021-2025)</p>
                </li>
                <li>
                  <strong className="text-gray-100">Relevant Coursework:</strong>
                  <p>Course certificate in Web Design</p>
                  <p>Course certificate in Introduction to C</p>
                  <p>Course certificate in Web Development</p>
                  <p>Course certificate in Introduction to SQL</p>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              <div className="space-y-4 text-gray-300">
                {/* c */}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScreen>
    </section>
  );
};
