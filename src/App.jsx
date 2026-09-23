import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footera from './components/footer/Footera'
import TransportHomePage from './components/homePage/TransportHomePage'
// import Projects from './components/projects/Projects'
import Transportaion from './components/transportation/Transportation'
import HeavyMachinery from './components/heavyMachinery/HeavyMachinery'
import ContactUs from './components/contactUs/ContactUs'

function App() {
  return (
    <div>
      <Navbar />
      {/* <TransportHomePage /> */}
      {/* <Transportaion /> */}
      {/* <HeavyMachinery /> */}
      <ContactUs />
      <Footera />
    </div>
  )
}

export default App
