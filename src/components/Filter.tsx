import { FILTERS } from "../constants/filters";

export function Filter() {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-3xl text-center font-bold">Extensions List</h1>
            <div className="flex justify-evenly">
                {FILTERS.map(filter => (
                    <button
                        className=" rounded-full py-2 px-4 bg-white shadow"
                    >
                        {filter.label}
                    </button>
                ))}
            </div>
        </div>
    )
}