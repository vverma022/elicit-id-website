import { BrowserRouter, Routes, Route } from "react-router-dom"
import Input from "./pages/Input"
import Admin from "./pages/Admin"
import Upload from "./pages/Upload"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Input />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
