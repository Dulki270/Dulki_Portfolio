import { useEffect, useState } from "react";

export const NavBar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        // if menu is open then hidden the scroll of the body
        document.body.style.overflow = menuOpen ? "hidden" : "";

    }, [menuOpen])  //track every time when menuopen changes

    // always fix nav bar to top
    return <nav className="fixed top-0 w-full z-40 bg-black/60 backdrop-blur-lg  border-white/10 shadow-lg">

        <div className="max-w-5xl mx-auto px-4">


            {/* logo of the website */}
            <div className="flex justify-between items-center h-16">

                {/* mobile menu start */}
                <a href="#home" className="font-mono text-xl font-bold text-white">
                    <h2>Dulki kavindya</h2>
                </a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen(prev=>!prev)}>
                    &#9776;
                </div>
                {/* mobile menu end */}

                {/* desktop menu start */}
                <div className="hidden md:flex items-center space-x-6">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
                </div>
                {/* desktop menu end */}

            </div>

        </div>

    </nav>
}