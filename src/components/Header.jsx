import { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Header({ theme, setTheme }) {

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <header className="relative min-w-dvw py-6 bg-header flex justify-center items-center">
            <a href="/" className="logo justify-center items-center flex gap-1">
                <DotLottieReact src="/chef.lottie" layout={{ fit: 'cover', alignment: [0.5, 0.5] }} autoplay style={{ width: 60, height: 84 }} />
                <h1 className="text-4xl text-hero-orange mt-4 sm:tracking-wide">
                    <span className="font-[Sora]">Chef</span>
                    <span className="font-[Sora] font-medium">Byte</span>
                </h1>
            </a>
            <div id="change-theme-wrapper" className="absolute right-5 translate-y-1/2 bottom-1/2" onClick={setTheme}>
                {/* USEEFFECT MAY BE BREAKING THE DISPLAY AND NEED TO WORK ON THE CLASSES OF THE BTNS */}
                <button className="absolute"><img id="sun" onClick={toggleTheme} src="/sun.svg" className="hover:rotate-90 hover:-translate-y-1 transition-all duration-400" /></button>
                <button className="absolute hidden"><img id="moon" onClick={toggleTheme} src="/moon.svg" className="hover:rotate-90 hover:-translate-y-1 transition-all duration-400" /></button>
            </div>
        </header>
    );
};