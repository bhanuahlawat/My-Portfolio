import { Home } from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Notfound } from "./pages/Notfound"
import { Toaster } from "sonner"

function App() {
  return (
    <>
     <Toaster position="top-right" richColors />
     <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
