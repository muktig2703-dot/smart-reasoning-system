import { useSettings } from "../../context/SettingsContext";
export default function SettingsModal({
    open,
    onClose
}) {

    if (!open) return null;
    const { settings, updateSettings } = useSettings();

    return (

        <div className="fixed inset-0 bg-black/60 flex items-start justify-center pt-24 z-50">

            <div
    className="
        w-[650px]
        max-h-[85vh]
        overflow-y-auto
        rounded-3xl
        bg-[#121821]
        border
        border-slate-700
        p-8
    "
>

                <h2 className="text-2xl font-bold mb-8">
                    Settings
                </h2>

                {/* AI Preferences */}

                <div className="space-y-8">

                    <div>

                        <h3 className="font-semibold text-lg mb-4">
                            🧠 AI Preferences
                        </h3>

                        <div className="space-y-5">

    <div>

        <label className="block text-sm mb-2">
            Reasoning Depth
        </label>

        <select
            value={settings.reasoningDepth}
            onChange={(e) =>
                updateSettings({
                    reasoningDepth: e.target.value
                })
            }
            className="w-full rounded-xl bg-[#1A2330] border border-slate-700 px-4 py-3"
        >
            <option value="quick">Quick</option>
            <option value="balanced">Balanced</option>
            <option value="deep">Deep</option>
        </select>

    </div>

    <div>

        <label className="block text-sm mb-2">
            Response Style
        </label>

        <select
            value={settings.responseStyle}
            onChange={(e) =>
                updateSettings({
                    responseStyle: e.target.value
                })
            }
            className="w-full rounded-xl bg-[#1A2330] border border-slate-700 px-4 py-3"
        >
            <option value="professional">
                Professional
            </option>

            <option value="beginner">
                Beginner Friendly
            </option>

            <option value="technical">
                Technical
            </option>

        </select>

    </div>

</div>

                    </div>

                    <div>

                        <div className="space-y-4">

    <label className="flex items-center justify-between">

        <span>Animations</span>

        <input
            type="checkbox"
            checked={settings.animations}
            onChange={(e) =>
                updateSettings({
                    animations: e.target.checked
                })
            }
        />

    </label>

    <label className="flex items-center justify-between">

        <span>Auto Save History</span>

        <input
            type="checkbox"
            checked={settings.autoSaveHistory}
            onChange={(e) =>
                updateSettings({
                    autoSaveHistory: e.target.checked
                })
            }
        />

    </label>

    <label className="flex items-center justify-between">

        <span>Auto Clear Workspace</span>

        <input
            type="checkbox"
            checked={settings.autoClearWorkspace}
            onChange={(e) =>
                updateSettings({
                    autoClearWorkspace: e.target.checked
                })
            }
        />

    </label>

</div>

                    </div>

                    <div>

                        <div className="space-y-3">

    {Object.entries(settings.agents).map(([agent, enabled]) => (

        <label
            key={agent}
            className="flex items-center justify-between"
        >

            <span className="capitalize">
                {agent}
            </span>

            <input
                type="checkbox"
                checked={enabled}
                onChange={(e) =>
                    updateSettings({
                        agents: {
                            ...settings.agents,
                            [agent]: e.target.checked
                        }
                    })
                }
            />

        </label>

    ))}

</div>

                    </div>

                </div>

                <div className="flex justify-end gap-3 mt-10">

                    <button
                        onClick={onClose}
                        className="px-5 py-2 rounded-xl border border-slate-700"
                    >
                        Close
                    </button>

                </div>

            </div>

        </div>

    );

}