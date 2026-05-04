import { useSettings } from "./context/SettingsContext"

function App() {

  const {settings, updateSettings} = useSettings()

  function handleChange() {
    let theme = settings.theme
    theme = theme === "dark" ? "light" : "dark"
    updateSettings("theme", theme)
  }

  return (
    <div className="font-mono">
      <h1>Hola mundo</h1>
      <button 
        onClick={() => handleChange()} 
        className="bg-white dark:bg-black text-black dark:text-white"
      >
        Change theme
      </button>
    </div>
  )
}

export default App
