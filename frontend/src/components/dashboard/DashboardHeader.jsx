export default function DashboardHeader() {

    return (

        <header className="h-16 border-b border-slate-800 bg-[#0B0F14]/90 backdrop-blur flex items-center justify-between px-8 sticky top-0 z-50">

            <div>

                <h1 className="font-bold text-xl">
                    🧠 Smart Reasoning System
                </h1>

            </div>

            <div className="flex items-center gap-5">

                <button className="text-slate-400 hover:text-white">
                    Settings
                </button>

                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold">
                    M
                </div>

            </div>

        </header>

    );

}