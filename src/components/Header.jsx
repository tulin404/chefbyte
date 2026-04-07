export default function Header() {
    return (
        <a href="/" className="logo">
            <header className="min-w-dvw py-6 bg-white justify-center items-center flex gap-3">
                <img className="h-14" src="/chef.svg" alt="Chef Logo" />
                <h1 className="text-4xl text-hero-orange mt-4 tracking-wide">
                    <span className="font-[Sora]">Chef</span>
                    <span className="font-[Sora] font-medium">Byte</span>
                </h1>
            </header>
        </a>
    );
};