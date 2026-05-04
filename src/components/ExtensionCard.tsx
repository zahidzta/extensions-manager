import type { Extension } from "../types"

type ExtensionCardProps = {
    info: Extension
}

export default function ExtensionCard({info} : ExtensionCardProps) {
    return(
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
                <input checked={info.isActive} type="checkbox" name="" id="" />
            </div>
        </div>
    )
}