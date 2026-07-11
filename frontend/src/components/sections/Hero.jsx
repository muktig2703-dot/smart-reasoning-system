import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReasoningVisualization
from "../background/ReasoningVisualization";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import {
    ArrowRight,
    Brain,
    ShieldCheck,
    Cpu
} from "lucide-react";

function Hero() {
    return (
        <section className="min-h-[90vh] grid lg:grid-cols-2 items-center gap-20">

            {/* LEFT */}

            <motion.div
    initial={{
        opacity: 0,
        y: 40
    }}
    animate={{
        opacity: 1,
        y: 0
    }}
    transition={{
        duration: 0.8,
        ease: "easeOut"
    }}
>

                <Badge>
                    AI Powered • Multi-Agent • Explainable
                </Badge>

                <h1 className="mt-8 text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">

    Think Better

    <br />

    <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">

        with AI Reasoning

    </span>

</h1>

                <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-400">

    Transform complex questions into structured reasoning with an
    intelligent multi-agent system that plans, analyzes, critiques,
    and explains every decision.

</p>

                <div className="mt-10 flex flex-wrap gap-5">

    <Link to="/dashboard">

        <Button>

            <span className="flex items-center gap-2">

                Get Started

                <ArrowRight className="h-5 w-5" />

            </span>

        </Button>

    </Link>

    <Link to="/login">

        <Button variant="secondary">

            Login

        </Button>

    </Link>

</div>
<div className="mt-12 flex flex-wrap gap-4">

    {[
        {
            icon: Brain,
            text: "Multi-Agent AI"
        },
        {
            icon: ShieldCheck,
            text: "Self Critique"
        },
        {
            icon: Cpu,
            text: "Explainable Reasoning"
        }
    ].map((item) => (

        <motion.div
            key={item.text}
            className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/60
                px-5
                py-3
                backdrop-blur-sm
            "
        >

            <item.icon className="h-5 w-5 text-indigo-400" />

            <span className="text-sm text-slate-300">

                {item.text}

            </span>

        </motion.div>

    ))}

</div>
<div className="mt-14 flex flex-wrap gap-10">

    {[
        {
            value: "4",
            label: "AI Agents"
        },
        {
            value: "100%",
            label: "Explainable"
        },
        {
            value: "24/7",
            label: "AI Available"
        }
    ].map((item) => (

        <motion.div key={item.label}>

            <h3 className="text-3xl font-bold text-white">
                {item.value}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
                {item.label}
            </p>

        </motion.div>

    ))}

</div>

            </motion.div>

            {/* RIGHT */}

            <motion.div
    initial={{
        opacity: 0,
        scale: 0.95
    }}
    animate={{
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration: 0.8,
        delay: 0.25
    }}
    className="relative h-[550px]"
>

                <ReasoningVisualization />

            </motion.div>

        </section>
    );
}

export default Hero;