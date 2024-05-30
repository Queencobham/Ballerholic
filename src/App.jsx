import Home from "./Home"
import Login from "./components/entry/Login"
import Register from "./components/entry/Register"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  )
}

export default App
