import { useMemo, useState } from "react"
import ExtensionCard from "./components/ExtensionCard"
import { Filter } from "./components/Filter"
import Header from "./components/Header"
import { EXTENSIONS } from "./constants/data"
import { useSettings } from "./context/SettingsContext"
import type { Extension } from "./types"
import { DeleteAlert } from "./components/DeleteAlert"

function App() {

  const {settings} = useSettings()

  const [extensions, setExtensions] = useState<Extension[]>(EXTENSIONS)
  const [pendingDelete, setPendingDelete] = useState<string | null>(null)


  function toggleExtension(name : Extension["name"]) {
    setExtensions(prev => prev.map(ex => 
      ex.name === name ? {...ex, isActive: !ex.isActive}   : ex
    ))
  }

  function handleDelete(name : Extension["name"]) {
    setPendingDelete(name)
  }

  function confirmDelete() {
    setExtensions(prev => prev.filter(ex => ex.name !== pendingDelete))
    setPendingDelete(null)
  }

  function cancelDelete() {
    setPendingDelete(null)
  }

  const filteredExtensions = useMemo(() => {
    return extensions.filter(ex => {
      if (settings.filter === "All") return true
      if (settings.filter === "Active") return ex.isActive
      if (settings.filter === "Inactive") return !ex.isActive
      return false
    })
  }, [settings.filter, extensions])

  

  return (
    <div className="min-h-screen text-black dark:text-white p-3 desktop:px-10 space-y-7 bg-gradient-light dark:bg-gradient-dark ">
      <Header />
      <Filter />
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredExtensions.map(extension => (
          <ExtensionCard 
            key={extension.name} 
            info={extension} 
            onChange={toggleExtension} 
            onDelete={handleDelete}
          />
        ))}
      </div>
      {pendingDelete && 
        <DeleteAlert 
          name={pendingDelete}
          onCancel={cancelDelete}
          onConfirm={confirmDelete}
        />
      }
    </div>
  )
}

export default App
