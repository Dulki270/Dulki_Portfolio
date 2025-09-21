import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {

    // create text variable and function for  that text 
    const [text, setText] = useState("");
    // create a full text variable
    const fulltext = "Crafting Modern Web Experiences";

    // set up useEWffect to update the text variable every 100ms
    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {

            // implement setext to add one character at a time from fulltext to text
            setText(fulltext.substring(0, currentIndex + 1));
            currentIndex++;

            // clear interval when fulltext is reached
            if (currentIndex > fulltext.length) {
                clearInterval(interval);
                // after 500ms call onComplete function
                setTimeout(() => {
                    onComplete();
                }, 1000)
            }


        }, 100)
        return () => clearInterval(interval);

    }, [onComplete])

    return <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">

        {/* add text */}
        <div className="mb-4 text-4xl font-mono font-bold">{text}
            <span className="animate-blink ml-1">|</span>
        </div>

        {/* add bar button of the text */}
        <div className="w-[400px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
            <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
        </div>
    </div>
}