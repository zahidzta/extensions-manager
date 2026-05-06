import type { Extension } from "../types"

type ExtensionCardProps = {
    info: Extension
    onChange: (name: string) => void
}

export default function ExtensionCard({ info, onChange }: ExtensionCardProps) {
    return (
        <div className="bg-white p-5 rounded-2xl shadow space-y-6">
            <div className="flex items-start gap-4">
                <img src={info.logo} alt={info.name} />
                <div className="space-y-1">
                    <h2>{info.name}</h2>
                    <p>{info.description}</p>
                </div>
            </div>
            <div className="flex justify-between">
                <button className="border border-neutral-400 rounded-full py-2 px-4 bg-white">Remove</button>

                <button
                    role="switch"
                    aria-checked={info.isActive}
                    onClick={() => onChange(info.name)}
                    className={`relative w-11 h-6 rounded-full transition-colors duration-300 cursor-pointer ${info.isActive ? "bg-slate-800" : "bg-slate-200"}`}
                >
                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${info.isActive ? "translate-x-5" : "translate-x-0"}`}/>
                </button>
            </div>
        </div>
    )
}