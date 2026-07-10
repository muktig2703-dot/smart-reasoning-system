import { Mail, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="min-h-screen bg-[#0B0F14] text-white flex">

            {/* Left Section */}
            <div className="hidden lg:flex w-1/2 items-center justify-center border-r border-white/10">

                <div className="max-w-md">

                    <p className="uppercase tracking-[0.3em] text-indigo-400 text-sm mb-4">
                        AI Reasoning System
                    </p>

                    <h1 className="text-5xl font-bold leading-tight mb-6">
                        Think.<br />
                        Analyze.<br />
                        Reason.
                    </h1>

                    <p className="text-gray-400 leading-8">
                        An intelligent reasoning platform capable of breaking
                        down complex problems into logical, explainable
                        decisions using multiple AI agents.
                    </p>

                </div>

            </div>

            {/* Right Section */}

            <div className="flex-1 flex items-center justify-center px-6">

                <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#121821] p-10 shadow-2xl">

                    <h2 className="text-3xl font-bold mb-2">
                        Welcome Back
                    </h2>

                    <p className="text-gray-400 mb-8">
                        Login to continue your reasoning journey.
                    </p>

                    <form className="space-y-5">

                        <div className="relative">

                            <Mail className="absolute left-4 top-4 text-gray-500" size={18} />

                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full rounded-xl bg-[#1A2330] border border-white/10 py-3 pl-12 pr-4 focus:border-indigo-500 outline-none"
                            />

                        </div>

                        <div className="relative">

                            <Lock className="absolute left-4 top-4 text-gray-500" size={18} />

                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full rounded-xl bg-[#1A2330] border border-white/10 py-3 pl-12 pr-4 focus:border-indigo-500 outline-none"
                            />

                        </div>

                        <button
                            className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 transition py-3 font-semibold flex items-center justify-center gap-2"
                        >
                            Login
                            <ArrowRight size={18} />
                        </button>

                    </form>

                    <div className="mt-6 flex justify-between text-sm">

                        <button className="text-gray-400 hover:text-white">
                            Forgot Password?
                        </button>

                        <Link
                            to="/register"
                            className="text-indigo-400 hover:text-indigo-300"
                        >
                            Register
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;