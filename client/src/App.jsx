import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Index from "./components/Index"
import Adopt from "./components/adopt/Adopt"
import LostPets from "./components/LostPets"
import Donation from "./components/Donation"
import ContactUs from "./components/ContactUs"
import './App.css'
import AddAPet from "./components/adopt/AddAPet"
import PetsDetail from "./components/adopt/PetsDetail"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/adopt/add" element={<AddAPet />} />
        <Route path="/adopt/pets" element={<PetsDetail />} />
        <Route path="/pets" element={<PetsDetail />} />
        <Route path="/lost-pets" element={<LostPets />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  )
}

export default App
