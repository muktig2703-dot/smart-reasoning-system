import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="min-h-screen bg-[#0B0F14] text-white flex">

            {/* Left Section */}
            <div className="hidden lg:flex w-1/2 items-center justify-center border-r border-white/10">

                <div className="max-w-md">

                    <p className="uppercase tracking-[0.3em] text-indigo-400 text-sm mb-4">
                        AI Reasoning System
                    </p>

                    <h1 className="text-5xl font-bold leading-tight mb-6">
                        Build.<br />
                        Learn.<br />
                        Reason.
                    </h1>

                    <p className="text-gray-400 leading-8">
                        Create your account and experience structured AI reasoning
                        with transparent analysis, critiques, and explainable
                        decision making.
                    </p>

                </div>

            </div>

            {/* Right Section */}

            <div className="flex-1 flex items-center justify-center px-6">

                <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#121821] p-10 shadow-2xl">

                    <h2 className="text-3xl font-bold mb-2">
                        Create Account
                    </h2>

                    <p className="text-gray-400 mb-8">
                        Join the AI Reasoning System.
                    </p>

                    <form className="space-y-5">

                        <div className="relative">
                            <User className="absolute left-4 top-4 text-gray-500" size={18} />
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full rounded-xl bg-[#1A2330] border border-white/10 py-3 pl-12 pr-4 outline-none focus:border-indigo-500"
                            />
                        </div>

                        <div className="relative">
                            <Mail className="absolute left-4 top-4 text-gray-500" size={18} />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full rounded-xl bg-[#1A2330] border border-white/10 py-3 pl-12 pr-4 outline-none focus:border-indigo-500"
                            />
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-4 top-4 text-gray-500" size={18} />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full rounded-xl bg-[#1A2330] border border-white/10 py-3 pl-12 pr-4 outline-none focus:border-indigo-500"
                            />
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-4 top-4 text-gray-500" size={18} />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full rounded-xl bg-[#1A2330] border border-white/10 py-3 pl-12 pr-4 outline-none focus:border-indigo-500"
                            />
                        </div>

                        <button className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 transition py-3 font-semibold flex items-center justify-center gap-2">
                            Register
                            <ArrowRight size={18} />
                        </button>

                    </form>

                    <div className="mt-6 text-center text-sm">

                        <span className="text-gray-400">
                            Already have an account?
                        </span>

                        <Link
                            to="/login"
                            className="ml-2 text-indigo-400 hover:text-indigo-300"
                        >
                            Login
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Register;