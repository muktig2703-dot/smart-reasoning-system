import { useState } from "react";
import { motion } from "framer-motion";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Sidebar from "../components/dashboard/Sidebar";
import Workspace from "../components/dashboard/Workspace";
import AnimatedBackground from "../components/background/AnimatedBackground";
export default function Dashboard() {
    const [history, setHistory] = useState([]);
    const [selectedAnalysis, setSelectedAnalysis] = useState(null);
    return (
        <div
    className="
        relative
        h-screen
        overflow-hidden
        bg-[#0B0F14]
        text-white
    "
>
    <AnimatedBackground />

            <div className="relative z-10 flex h-full flex-col">
    <DashboardHeader />
    <motion.div
    className="
    flex
    flex-1
    overflow-hidden
    border-t
    border-slate-800/60
"
    initial={{
    opacity: 0,
    y: 15
}}
animate={{
    opacity: 1,
    y: 0
}}
transition={{
    duration: 0.6,
    ease: "easeOut"
}}
>
                <Sidebar
                    history={history}
                    onSelect={setSelectedAnalysis}
                />
                <Workspace
                    history={history}
                    setHistory={setHistory}
                    selectedAnalysis={selectedAnalysis}
                />
            </motion.div>
            </div>
        </div>
    );
}