export default function Sidebar() {

    return (

        <aside className="w-72 border-r border-slate-800 bg-[#0D1117] flex flex-col">

            <div className="p-6 border-b border-slate-800">

                <h2 className="text-lg font-semibold">
                    History
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                    Previous analyses
                </p>

            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">

                {[1,2,3,4].map((item)=>(
                    <div
                        key={item}
                        className="rounded-xl border border-slate-800 bg-slate-900 p-4 hover:border-indigo-500 transition cursor-pointer"
                    >
                        <p className="text-sm text-slate-300">
                            Should I buy a laptop?
                        </p>

                        <span className="text-xs text-slate-500">
                            2 minutes ago
                        </span>

                    </div>
                ))}

            </div>

        </aside>

    );

}