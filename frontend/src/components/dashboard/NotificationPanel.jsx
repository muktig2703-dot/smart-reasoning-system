import { Bell, Trash2, CheckCircle, User, PartyPopper } from "lucide-react";
import { useNotifications } from "../../context/NotificationContext";

export default function NotificationPanel({
    open,
    onClose,
}) {

    const {
        notifications,
        clearNotifications,
    } = useNotifications();

    if (!open) return null;

    const getIcon = (title) => {

        const text = title.toLowerCase();

        if (text.includes("analysis")) {
            return <CheckCircle className="h-5 w-5 text-emerald-400" />;
        }

        if (text.includes("history")) {
            return <Trash2 className="h-5 w-5 text-red-400" />;
        }

        if (
            text.includes("profile") ||
            text.includes("user")
        ) {
            return <User className="h-5 w-5 text-indigo-400" />;
        }

        if (
            text.includes("welcome") ||
            text.includes("logged")
        ) {
            return <PartyPopper className="h-5 w-5 text-yellow-400" />;
        }

        return <Bell className="h-5 w-5 text-slate-400" />;

    };

    return (

        <div
            className="fixed inset-0 z-50"
            onClick={onClose}
        >

            <div
                onClick={(e) => e.stopPropagation()}
                className="
                    absolute
                    right-8
                    top-24
                    w-[420px]
                    rounded-3xl
                    border
                    border-slate-700
                    bg-[#121821]
                    shadow-2xl
                    overflow-hidden
                "
            >

                <div className="border-b border-slate-700 p-6">

                    <h2 className="flex items-center gap-3 text-xl font-bold">

                        <Bell className="h-6 w-6 text-indigo-400" />

                        Notifications

                    </h2>

                </div>

                <div
                    className="
                        max-h-[450px]
                        overflow-y-auto
                    "
                >

                    {notifications.length === 0 ? (

                        <div className="p-10 text-center">

                            <Bell className="mx-auto mb-4 h-12 w-12 text-slate-600" />

                            <p className="text-slate-400">

                                No notifications yet.

                            </p>

                        </div>

                    ) : (

                        notifications.map((notification) => (

                            <div
                                key={notification.id}
                                className="
                                    flex
                                    items-start
                                    gap-4
                                    border-b
                                    border-slate-800
                                    p-5
                                    hover:bg-slate-800/40
                                    transition
                                "
                            >

                                {getIcon(notification.title)}

                                <div className="flex-1">

                                    <p className="font-medium">

                                        {notification.title}

                                    </p>

                                    <p className="mt-1 text-xs text-slate-500">

                                        {notification.time}

                                    </p>

                                </div>

                            </div>

                        ))

                    )}

                </div>

                <div className="border-t border-slate-700 p-5">

                    <button
                        onClick={clearNotifications}
                        className="
                            w-full
                            rounded-xl
                            bg-indigo-600
                            py-3
                            font-medium
                            transition
                            hover:bg-indigo-500
                        "
                    >

                        Clear All

                    </button>

                </div>

            </div>

        </div>

    );

}