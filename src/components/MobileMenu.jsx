export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`top-0 left-0 fixed w-full bg-black z-40 flex flex-col items-center justify-center h-screen
     text-2xl font-mono font-bold text-gray-300 space-y-8 transition-all duration-300 ease-in-out

            ${menuOpen
                ? "h-screen opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"}

                `}
        >

            {/* create x close button for mobile menu close */}
            {/* when click button menu is closed */}
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-3xl text-white transition-colors 
  focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>

            {/* in mobile menu when user click menu it should be hiden */}
            <a href="#home" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4  transform transition-transform duration-300
                ${menuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-5 opacity-0"}
                `}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4  transform transition-transform duration-300
                ${menuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-5 opacity-0"}
                `}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4  transform transition-transform duration-300
                ${menuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-5 opacity-0"}
                `}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4  transform transition-transform duration-300
                ${menuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-5 opacity-0"}
                `}>Contact</a>

        </div>
    )

}