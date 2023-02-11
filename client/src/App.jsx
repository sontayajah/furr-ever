import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Index from "./components/Index"
import Adopt from "./components/adopt/Adopt"
import LostPets from "./components/LostPets"
import Donate from "./components/Donate"
import ContactUs from "./components/ContactUs"
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/lost-pets" element={<LostPets />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  )
}

export default App
