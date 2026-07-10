export default function Sidebar({
    history,
    onSelect
}) {

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

                {history.length === 0 ? (

                    <div className="text-center text-slate-500 mt-10">

                        <p>No analyses yet.</p>

                    </div>

                ) : (

                    history.map((item) => (

                        <div
                            key={item.id}
                            onClick={() => onSelect(item)}
                            className="
                                rounded-xl
                                border
                                border-slate-800
                                bg-slate-900
                                p-4
                                hover:border-indigo-500
                                hover:bg-slate-800
                                transition
                                cursor-pointer
                            "
                        >

                            <p className="text-sm font-medium text-slate-200 line-clamp-2">

                                {item.problem}

                            </p>

                            <span className="text-xs text-slate-500 mt-2 block">

                                {item.time}

                            </span>

                        </div>

                    ))

                )}

            </div>

        </aside>

    );

}