type DeleteAlertProps = {
    name: string
    onConfirm: () => void
    onCancel: () => void
}

export function DeleteAlert({name, onCancel, onConfirm} : DeleteAlertProps) {
    return (
        <div className="fixed inset-0 flex justify-center items-center z-10 bg-[#0000007d]">
            <div className="flex flex-col justify-between bg-white w-72 h-48 rounded-md py-4 px-6 border">
                <h3 className="text-center font-bold text-xl text-gray-800 pb-2">{name}</h3>
                <h3 className="text-base text-center font-semibold text-gray-900">Do you really want to delete this extension?</h3>
                <div className="flex justify-around items-center py-3">
                    <div className="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
                        <button className="font-semibold text-sm text-blue-700" onClick={() => onCancel()}>Cancel</button>
                    </div>
                    <div className="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
                        <button className="font-semibold text-sm text-red-700" onClick={() => onConfirm()}>Delete</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
