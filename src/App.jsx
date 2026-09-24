import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footera from './components/footer/Footera'
import TransportHomePage from './components/homePage/TransportHomePage'
// import Projects from './components/projects/Projects'
import Transportaion from './components/transportation/Transportation'
import HeavyMachinery from './components/heavyMachinery/HeavyMachinery'
// import ContactUs from './components/contactUs/ContactUs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/scrollToTop/ScrollToTop'
import Contact from './components/contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<TransportHomePage />} />
        <Route path="/transportation" element={<Transportaion />} />
        <Route path="/heavy-machinery" element={<HeavyMachinery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footera />
    </BrowserRouter>
  )
}

export default App
