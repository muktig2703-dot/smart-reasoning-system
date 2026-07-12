import { useEffect, useState } from "react";
import {
    getProfile,
    updateProfile
} from "../../api/profileApi";
import { useAuth } from "../../context/AuthContext";
import { useNotifications } from "../../context/NotificationContext";
export default function ProfileModal({
    open,
    onClose
}) {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
    const { setUser } = useAuth();
    const { addNotification } = useNotifications();

    useEffect(() => {

        if (!open) return;

        getProfile().then((res) => {

            setName(res.data.name);

            setEmail(res.data.email);

        });

    }, [open]);

    const handleSave = async () => {

    try {

        const res = await updateProfile({
            name,
            email
        });

        setUser(res.data);
        addNotification({
    type: "success",
    title: "Profile updated",
});

        alert("Profile updated successfully!");

        onClose();

    } catch (error) {

        alert(
            error.response?.data?.detail ||
            "Failed to update profile."
        );

    }

};

    if (!open) return null;

    return (

        <div className="fixed inset-0 bg-black/60 flex items-start justify-center pt-24 z-50">

            <div className="w-[450px] rounded-3xl bg-[#121821] border border-slate-700 p-8">

                <h2 className="text-2xl font-bold mb-6">

                    Edit Profile

                </h2>

                <div className="space-y-5">

                    <input
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className="w-full rounded-xl bg-[#1A2330] border border-slate-700 px-4 py-3 outline-none"
                        placeholder="Name"
                    />

                    <input
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className="w-full rounded-xl bg-[#1A2330] border border-slate-700 px-4 py-3 outline-none"
                        placeholder="Email"
                    />

                </div>

                <div className="flex justify-end gap-3 mt-8">

                    <button

                        onClick={onClose}

                        className="px-5 py-2 rounded-xl border border-slate-700"

                    >

                        Cancel

                    </button>

                    <button

                        onClick={handleSave}

                        className="px-5 py-2 rounded-xl bg-indigo-600"

                    >

                        Save

                    </button>

                </div>

            </div>

        </div>

    );

}