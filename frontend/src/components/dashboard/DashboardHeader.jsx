import {
    Brain,
    Settings,
    Bell,
    ChevronDown
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
export default function DashboardHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    return (

        <header
    className="
        sticky
        top-0
        z-50
        flex
        h-20
        items-center
        justify-between
        border-b
        border-slate-800
        bg-[#0B0F14]/90
        px-8
        backdrop-blur-xl
    "
>

    {/* Left */}

    <div className="flex items-center gap-4">

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

            <Brain className="h-6 w-6 text-indigo-400 drop-shadow-[0_0_10px_rgb(99_102_241)]" />

        </div>

        <div>

            <h1 className="text-xl font-bold tracking-tight">
                Smart Reasoning System
            </h1>

            <p className="text-sm text-slate-500">
                AI Multi-Agent Workspace
            </p>

        </div>

    </div>

    {/* Right */}

    <div className="flex items-center gap-3">
        {/* Status */}

<div
    className="
        hidden
        md:flex
        items-center
        gap-2
        rounded-full
        border
        border-emerald-500/20
        bg-emerald-500/10
        px-4
        py-2
    "
>
    <div className="h-2 w-2 rounded-full bg-emerald-400" />

    <span className="text-sm text-emerald-300">
        Reasoning Engine Online
    </span>

</div>

{/* Notifications */}

<button
    className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-slate-700
        bg-slate-900
        transition-all
        duration-300
        hover:border-indigo-500
        hover:bg-slate-800
        hover:-translate-y-1
    "
>

    <Bell className="h-5 w-5 text-slate-300" />

</button>

{/* Settings */}

<button
    className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-slate-700
        bg-slate-900
        transition-all
        duration-300
        hover:border-indigo-500
        hover:bg-slate-800
        hover:-translate-y-1
    "
>

    <Settings className="h-5 w-5 text-slate-300" />

</button>
{/* User */}
<div
    onClick={() => setMenuOpen(!menuOpen)}
    className="
        relative
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-slate-700
        bg-slate-900
        px-3
        py-2
        cursor-pointer
    "
>

    <div
        className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-indigo-600
            font-semibold
        "
    >
        {user?.name?.charAt(0).toUpperCase() || "U"}
    </div>

    <div className="hidden lg:block">
        <p className="text-sm font-semibold">
            {user?.name || "User"}
        </p>

        <p className="text-xs text-slate-500">
            AI Developer
        </p>
    </div>

    <ChevronDown className="h-4 w-4 text-slate-500" />

    {menuOpen && (
        <div
            className="
                absolute
                right-0
                top-16
                w-44
                rounded-xl
                border
                border-slate-700
                bg-slate-900
                shadow-xl
                overflow-hidden
            "
        >
            <button
                onClick={(e) => {
    e.stopPropagation();
    logout();
    navigate("/");
}}
                className="
                    w-full
                    px-4
                    py-3
                    text-left
                    text-sm
                    hover:bg-slate-800
                    transition
                "
            >
                Logout
            </button>
        </div>
    )}

</div>
</div>
        </header>

    );

}