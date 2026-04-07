import { useEffect, useState } from "react"
import Header from "./components/Header"

/* eslint-disable */

export default function App() {
    const browsewrTheme = () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    };

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || browserTheme();
    });

    useEffect(() => {
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <Header theme={theme} setTheme={setTheme} />
    )
};