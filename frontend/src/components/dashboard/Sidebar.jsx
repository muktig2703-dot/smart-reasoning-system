import { motion } from "framer-motion";
import {
    History,
    Search,
    Clock3,
    Trash2
} from "lucide-react";
export default function Sidebar({
    history,
    onSelect,
    onDelete,
    searchQuery,
    setSearchQuery
}) {

    return (

        <motion.aside
        initial={{
    x: -40,
    opacity: 0
}}

animate={{
    x: 0,
    opacity: 1
}}

transition={{
    duration: 0.6,
    ease: "easeOut"
}}
className="
w-80
border-r
border-slate-800
bg-[#0D1117]
flex
flex-col
">

            <div className="p-6 border-b border-slate-800">

    <div className="flex items-center gap-3">

        <div className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-slate-700
            bg-slate-900
        ">

            <History className="h-5 w-5 text-indigo-400" />

        </div>

        <div>

            <h2 className="text-lg font-semibold">
                History
            </h2>

            <p className="text-sm text-slate-500">
                Previous analyses
            </p>

        </div>

    </div>

</div>
<div className="p-4 border-b border-slate-800">

    <div
className="
flex
items-center
gap-3
rounded-xl
border
border-slate-700
bg-slate-900
px-4
py-3
transition
focus-within:border-indigo-500
focus-within:ring-2
focus-within:ring-indigo-500/20
"
>

        <Search className="h-4 w-4 text-slate-500" />

        <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search history..."
    className="
        flex-1
        bg-transparent
        outline-none
        text-sm
        placeholder:text-slate-500
    "
/>

    </div>

</div>

            <div
className="
flex-1
overflow-y-auto
p-4
space-y-3
scrollbar-thin
scrollbar-thumb-slate-700
scrollbar-track-transparent
"
>

                {history.length === 0 ? (

                    <div className="mt-16 px-6 text-center">

    <div className="
        mx-auto
        mb-5
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        border
        border-slate-700
        bg-slate-900
    ">

        <History className="h-8 w-8 text-slate-600" />

    </div>

    <h3 className="font-semibold text-slate-300">
        No History Yet
    </h3>

    <p className="mt-2 text-sm leading-6 text-slate-500">
        Your previous reasoning sessions will appear here after you analyze a problem.
    </p>

</div>

                ) : (

                    history.map((item, index) =>(

                        <motion.div
                        key={item.id}
                        initial={{
    opacity: 0,
    x: -20
}}

animate={{
    opacity: 1,
    x: 0
}}

transition={{
    duration: 0.35,
    delay: index * 0.08
}}
whileHover={{
    y: -3,
    scale: 1.01
}}
whileTap={{
    scale: 0.98
}}
                            onClick={() => onSelect(item)}
                            className="
    rounded-2xl
    border
    border-slate-800
    bg-gradient-to-br
    from-slate-900
    to-slate-950
    p-5
    transition-all
    duration-300
    hover:border-indigo-500/40
    hover:-translate-y-1
    hover:shadow-lg
    hover:shadow-indigo-500/5
    cursor-pointer
"
                        >
                            <p className="text-sm font-semibold text-slate-200 leading-6 line-clamp-2">
    {item.problem}
</p>

<div className="mt-4 flex items-center justify-between">

    <div className="flex items-center gap-2 text-xs text-slate-500">

        <Clock3 className="h-3.5 w-3.5" />

        <span>
            {item.created_at
                ? new Date(item.created_at).toLocaleString()
                : item.time}
        </span>

    </div>

    <button
        onClick={(e) => {

            e.stopPropagation();

            onDelete(item.id);

        }}
        className="
            rounded-lg
            p-2
            text-slate-500
            transition
            hover:bg-red-500/10
            hover:text-red-400
        "
    >

        <Trash2 className="h-4 w-4" />

    </button>

</div>
                        </motion.div>
                    ))
                )}
            </div>
        </motion.aside>
    );

}