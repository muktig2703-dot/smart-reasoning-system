export default function SkeletonCard({ lines = 4 }) {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 animate-pulse">

            <div className="h-6 w-48 rounded bg-slate-700 mb-6" />

            <div className="space-y-4">

                {[...Array(lines)].map((_, index) => (

                    <div
                        key={index}
                        className="h-4 rounded bg-slate-800"
                    />

                ))}

            </div>

        </div>
    );
}