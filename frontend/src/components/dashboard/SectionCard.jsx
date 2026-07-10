export default function SectionCard({ title, icon, children }) {
    return (
        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/20">
            <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{icon}</span>
                <h2 className="text-xl font-semibold">{title}</h2>
            </div>

            {children}
        </section>
    );
}