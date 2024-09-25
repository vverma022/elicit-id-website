import { BrowserRouter, Routes, Route } from "react-router-dom"
import Input from "./pages/Input"
import Admin from "./pages/Admin"
import Upload from "./pages/Upload"
import Card from "./components/3dcard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Input />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
