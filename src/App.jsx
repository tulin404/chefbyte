import { useEffect, useState } from "react"
import Header from "./components/Header"


export default function App() {
    const browserTheme = () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    };

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || browserTheme();
    });

    useEffect(() => {
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');

    if (!sun || !moon) return;

    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        sun.classList.add('rotate-90', 'opacity-0');
        sun.inert = true;
        moon.classList.remove('rotate-90', 'opacity-0');
        moon.inert = false;
    } else {
        document.documentElement.classList.remove('dark');
        moon.classList.add('rotate-90', 'opacity-0');
        moon.inert = true
        sun.classList.remove('rotate-90', 'opacity-0');
        sun.inert = false
    };

    localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <Header theme={theme} setTheme={setTheme} />
    )
};