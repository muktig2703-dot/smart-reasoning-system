function Badge({ children }) {

    return (

        <span
            className="
            inline-flex
            rounded-full
            border
            border-indigo-500/30
            bg-indigo-500/10
            px-4
            py-2
            text-sm
            text-indigo-300
            "
        >

            {children}

        </span>

    );

}

export default Badge;