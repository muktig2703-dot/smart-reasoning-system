import { useState } from "react";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import Sidebar from "../components/dashboard/Sidebar";
import Workspace from "../components/dashboard/Workspace";

export default function Dashboard() {

    const [history, setHistory] = useState([]);

    const [selectedAnalysis, setSelectedAnalysis] = useState(null);

    return (
        <div className="h-screen bg-[#0B0F14] text-white flex flex-col overflow-hidden">

            <DashboardHeader />

            <div className="flex flex-1 overflow-hidden">

                <Sidebar
                    history={history}
                    onSelect={setSelectedAnalysis}
                />

                <Workspace
                    history={history}
                    setHistory={setHistory}
                    selectedAnalysis={selectedAnalysis}
                />

            </div>

        </div>
    );
}