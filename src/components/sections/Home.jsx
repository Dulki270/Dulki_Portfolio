import { RevealOnScreen } from "../RevealOnscreen";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center
       justify-center relative">

        <RevealOnScreen>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md-text-7xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent leading-right">
                    Hi, I am Dulki Kavindya
                </h1>
                <p  className="text-gray-40 text-lg m-8 max-w-lg mx-auto">
                    I’m a passionate software engineering student with experience in web development, database design, and building full-stack applications. I enjoy creating efficient, user-friendly systems and have worked on projects like a Sales & Production Management System for clothing buisness. Explore my portfolio to see my work and skills in action.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                    hover:shadow[0_0_15px_rgba(59,130,246,0.4)]">
                        View Projects
                    </a>
                     <a href="#contact" className= "border border-blue-500/50 py-3 px-6 rounded font-medium transition-all duration-200 hover:bg-blue-500/10 hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(59,130,246,0.4)]">
                       Contact Me
                    </a>
                </div>
            </div>
            </RevealOnScreen>
        </section>
    );
}   