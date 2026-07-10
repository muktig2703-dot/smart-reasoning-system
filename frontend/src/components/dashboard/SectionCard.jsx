export default function SectionCard({ title, icon, children }) {
    return (
        <section
            className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/70
                p-6
                shadow-lg
                shadow-black/20
                transition-all
                duration-300
                hover:border-slate-700
                hover:-translate-y-1
            "
        >
            <div className="flex items-center gap-3 mb-6">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 border border-slate-700">

                    {icon}

                </div>

                <h2 className="text-xl font-semibold tracking-tight">
                    {title}
                </h2>

            </div>

            {children}

        </section>
    );
}