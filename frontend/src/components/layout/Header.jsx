import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Brain,
    ChevronRight,
    LogIn
} from "lucide-react";
function Header() {
    return (
        <motion.header
    initial={{
        y: -60,
        opacity: 0
    }}
    animate={{
        y: 0,
        opacity: 1
    }}
    transition={{
        duration: 0.6
    }}
    className="
        fixed
        top-0
        z-50
        w-full
        border-b
        border-white/10
        bg-[#0B0F14]/80
        backdrop-blur-xl
    "
>
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                <Link
    to="/"
    className="flex items-center gap-3"
>

    <div
        className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-slate-700
            bg-slate-900
        "
    >

        <Brain className="h-6 w-6 text-indigo-400" />

    </div>

    <div>

        <h2 className="font-bold text-xl tracking-tight">

            Smart Reasoning

        </h2>

        <p className="text-xs text-slate-500">

            Multi-Agent AI

        </p>

    </div>

</Link>

                <nav className="hidden items-center gap-10 md:flex">

    {[
        "Features",
        "How it Works",
        "Technology"
    ].map((item) => (

        <motion.a
    key={item}
    href="#"
    whileHover={{
        y: -2
    }}
    transition={{
        duration: 0.2
    }}
    className="
        relative
        text-sm
        text-slate-400
        transition
        hover:text-white
    "
>
            {item}
        </motion.a>

    ))}

</nav>

                <div className="flex items-center gap-3">
                    <motion.div
    whileHover={{
        y: -2,
        scale: 1.02
    }}
    whileTap={{
        scale: 0.98
    }}
>

    <Link
        to="/login"
        className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-slate-700
            bg-slate-900
            px-5
            py-2.5
            transition
            hover:border-indigo-500
        "
    >

        <LogIn className="h-4 w-4" />

        Login

    </Link>
</motion.div>
<motion.div
    whileHover={{
        y: -2,
        scale: 1.02
    }}
    whileTap={{
        scale: 0.98
    }}
>
    <Link
        to="/register"
        className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-indigo-600
            px-5
            py-2.5
            transition
            hover:bg-indigo-500
        "
    >

        Get Started

        <ChevronRight className="h-4 w-4" />

    </Link>
    </motion.div>

</div>

            </div>
        </motion.header>
    );
}

export default Header;