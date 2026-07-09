import { cn } from "../../lib/utils";

function Button({

    children,

    variant = "primary",

    className,

    ...props

}) {

    const styles = {

        primary:
            "bg-indigo-600 hover:bg-indigo-500 text-white",

        secondary:
            "border border-white/10 hover:bg-white/5",

        ghost:
            "hover:bg-white/5"

    };

    return (

        <button

            className={cn(

                "rounded-xl px-6 py-3 font-medium transition-all duration-300",

                styles[variant],

                className

            )}

            {...props}

        >

            {children}

        </button>

    );

}

export default Button;