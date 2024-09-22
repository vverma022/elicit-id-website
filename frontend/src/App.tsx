import { BrowserRouter, Routes, Route } from "react-router-dom"
import Input from "./pages/Input"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Input />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
