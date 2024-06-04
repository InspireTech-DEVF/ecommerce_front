import { BrowserRouter } from "react-router-dom"
import RoutesIndex from "./routes"

function App() {

  return (
    <>
    <BrowserRouter>
      <RoutesIndex />
      <div>Hola mundo</div>
    </BrowserRouter>
    </>
  )
}

export default App
