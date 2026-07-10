import Header from "../components/layout/Header";
import InputForm from "../components/InputForm";

function Dashboard() {
    return (
        <div className="min-h-screen bg-[#0B0F14] text-white">

            <Header />

            <div className="max-w-7xl mx-auto px-8 py-8 flex gap-8">

                {/* Sidebar */}

                <aside className="hidden lg:block w-72">

                    <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">

                        <h2 className="text-xl font-semibold mb-5">
                            History
                        </h2>

                        <div className="space-y-3">

                            <div className="rounded-xl bg-[#1A2330] p-4 cursor-pointer hover:bg-[#202c3d] transition">
                                Should I buy a laptop?
                            </div>

                            <div className="rounded-xl bg-[#1A2330] p-4 cursor-pointer hover:bg-[#202c3d] transition">
                                Career Decision
                            </div>

                            <div className="rounded-xl bg-[#1A2330] p-4 cursor-pointer hover:bg-[#202c3d] transition">
                                Investment Plan
                            </div>

                        </div>

                    </div>

                </aside>

                {/* Workspace */}

                <main className="flex-1">

                    <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

                        <h1 className="text-4xl font-bold mb-3">
                            AI Reasoning Workspace
                        </h1>

                        <p className="text-gray-400 mb-8">
                            Describe your problem and let multiple AI agents
                            analyze it step by step.
                        </p>

                        <InputForm />

                    </div>

                </main>

            </div>

        </div>
    );
}

export default Dashboard;