import DashboardHeader from "../components/dashboard/DashboardHeader";
import Sidebar from "../components/dashboard/Sidebar";
import Workspace from "../components/dashboard/Workspace";

export default function Dashboard() {
    return (
        <div className="h-screen bg-[#0B0F14] text-white flex flex-col overflow-hidden">

    <DashboardHeader />

    <div className="flex flex-1 overflow-hidden">

        <Sidebar />

        <Workspace />

    </div>

</div>
    );
}