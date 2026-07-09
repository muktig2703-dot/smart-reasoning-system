import { cn } from "../../lib/utils";

function Textarea({

    className,

    ...props

}) {

    return (

        <textarea

            className={cn(

                "w-full",

                "rounded-xl",

                "border",

                "border-white/10",

                "bg-white/[0.03]",

                "p-5",

                "outline-none",

                "transition",

                "focus:border-indigo-500",

                "focus:ring-2",

                "focus:ring-indigo-500/30",

                className

            )}

            {...props}

        />

    );

}

export default Textarea;