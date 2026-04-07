import { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Header({ theme, setTheme }) {

    return (
        <header className="relative min-w-dvw py-6 bg-white flex justify-center items-center">
            <a href="/" className="logo justify-center items-center flex gap-1">
                <DotLottieReact src="/chef.lottie" layout={{ fit: 'cover', alignment: [0.5, 0.5] }} autoplay style={{ width: 60, height: 84 }} />
                <h1 className="text-4xl text-hero-orange mt-4 sm:tracking-wide">
                    <span className="font-[Sora]">Chef</span>
                    <span className="font-[Sora] font-medium">Byte</span>
                </h1>
            </a>
            <button id="change-theme" className="absolute" onClick={setTheme}>
                
            </button>
        </header>
    );
};