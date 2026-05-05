import { useMemo } from "react"
import ExtensionCard from "./components/ExtensionCard"
import { Filter } from "./components/Filter"
import Header from "./components/Header"
import { EXTENSIONS } from "./constants/data"
import { useSettings } from "./context/SettingsContext"

function App() {

  const {settings} = useSettings()

  const filteredExtensions = useMemo(() => {
    return EXTENSIONS.filter(ex => {
      if (settings.filter === "All") return true
      if (settings.filter === "Active") return ex.isActive
      if (settings.filter === "Inactive") return !ex.isActive
      return false
    })
  }, [settings.filter])

  

  return (
    <div className="font-mono bg-neutral-100 h-screen p-3 space-y-7 text-base">
      <Header />
      <Filter />
      <div className="flex flex-col gap-4">
        {filteredExtensions.map(extension => (
          <ExtensionCard key={extension.name} info={extension} />
        ))}
      </div>
    </div>
  )
}

export default App
