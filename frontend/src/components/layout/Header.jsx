import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0B0F14]/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                <Link
                    to="/"
                    className="text-xl font-bold tracking-tight"
                >
                    🧠 Smart Reasoning
                </Link>

                <nav className="hidden gap-10 text-sm md:flex">

                    <a href="#features">Features</a>

                    <a href="#how-it-works">How it Works</a>

                    <a href="#tech">Technology</a>

                </nav>

                <div className="flex gap-3">

                    <Link
                        to="/login"
                        className="rounded-lg border border-white/15 px-5 py-2 hover:bg-white/5 transition"
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="rounded-lg bg-indigo-600 px-5 py-2 hover:bg-indigo-500 transition"
                    >
                        Register
                    </Link>

                </div>

            </div>
        </header>
    );
}

export default Header;