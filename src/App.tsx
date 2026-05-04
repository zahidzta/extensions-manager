import ExtensionCard from "./components/ExtensionCard"
import { Filter } from "./components/Filter"
import Header from "./components/Header"
import { EXTENSIONS } from "./constants/data"

function App() {

  return (
    <div className="font-mono bg-neutral-100 h-screen p-3 space-y-7 text-base">
      <Header />
      <Filter />
      <div className="flex flex-col gap-4">
        {EXTENSIONS.map(extension => (
          <ExtensionCard key={extension.name} info={extension} />
        ))}
      </div>
    </div>
  )
}

export default App
