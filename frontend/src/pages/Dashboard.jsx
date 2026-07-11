import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getHistory } from "../api/historyApi";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Sidebar from "../components/dashboard/Sidebar";
import Workspace from "../components/dashboard/Workspace";
import AnimatedBackground from "../components/background/AnimatedBackground";
import { deleteHistory } from "../api/historyApi";
import { searchHistory } from "../api/historyApi";
export default function Dashboard() {
    const [history, setHistory] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedAnalysis, setSelectedAnalysis] = useState(null);
    const handleDelete = async (id) => {

    try {

        await deleteHistory(id);

        setHistory(prev =>
            prev.filter(item => item.id !== id)
        );

    } catch (error) {

        console.error(error);

    }

};
    useEffect(() => {

    const loadHistory = async () => {

        try {

            const response = await getHistory();

            const formattedHistory = response.data.map(item => ({

                ...item,

                result: JSON.parse(item.result)

            }));

            setHistory(formattedHistory);

        } catch (error) {

            console.error("Failed to load history:", error);

        }

    };
    loadHistory();

}, []);

useEffect(() => {

    const fetchSearch = async () => {

        try {

            if (!searchQuery.trim()) {

                const response = await getHistory();

                setHistory(
                    response.data.map(item => ({
                        ...item,
                        result: JSON.parse(item.result)
                    }))
                );

                return;
            }

            const response = await searchHistory(searchQuery);

            setHistory(
                response.data.map(item => ({
                    ...item,
                    result: JSON.parse(item.result)
                }))
            );

        } catch (error) {

            console.error(error);

        }

    };

    fetchSearch();

}, [searchQuery]);

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
    onDelete={handleDelete}
    searchQuery={searchQuery}
    setSearchQuery={setSearchQuery}
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