import { Filter } from "./components/Filter"
import Header from "./components/Header"

function App() {

  return (
    <div className="font-mono bg-neutral-100 h-screen p-3 space-y-7 text-base">
      <Header />
      <Filter />
    </div>
  )
}

export default App
