import {
    Brain,
    GitBranch,
    Mail
} from "lucide-react";
function Footer() {
    return (
    <footer className="border-t border-slate-800 bg-[#0B0F14]/70">

        <div className="mx-auto max-w-7xl px-6 py-16">

            <div className="grid gap-12 md:grid-cols-3">

                {/* Brand */}

                <div>

                    <div className="flex items-center gap-3">

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900">

                            <Brain className="h-6 w-6 text-indigo-400" />

                        </div>

                        <div>

                            <h3 className="text-xl font-bold">
                                Smart Reasoning
                            </h3>

                            <p className="text-sm text-slate-500">
                                Multi-Agent AI
                            </p>

                        </div>

                    </div>

                    <p className="mt-6 max-w-sm leading-7 text-slate-400">

                        AI-powered reasoning that plans, analyzes,
                        critiques and explains every decision with
                        complete transparency.

                    </p>

                </div>

                {/* Links */}

                <div>

                    <h4 className="mb-5 font-semibold">
                        Quick Links
                    </h4>

                    <div className="flex flex-col gap-3 text-slate-400">

    <a href="#home">
        Home
    </a>

    <a href="#features">
        Features
    </a>

    <a href="#how-it-works">
        About
    </a>

    <a href="#contact">
        Contact
    </a>

</div>

                </div>

                {/* Contact */}

                <div>

                    <h4 className="mb-5 font-semibold">
                        Connect
                    </h4>

                    <div className="space-y-4">

                        <a
    href="https://github.com/muktig2703-dot"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-slate-400"
>
    <GitBranch className="h-5 w-5" />
    <span>GitHub</span>
</a>

<a
    href="mailto:muktig2703@gmail.com"
    className="flex items-center gap-3 text-slate-400"
>
    <Mail className="h-5 w-5" />
    <span>Email</span>
</a>

                    </div>

                </div>

            </div>

            <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">

                © 2026 Smart Reasoning System • Built with React, FastAPI & AI

            </div>

        </div>

    </footer>
);
}

export default Footer;