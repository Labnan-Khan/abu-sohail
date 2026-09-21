import React from 'react'
// import TransportHomePage from './homePage/TransportHomePage'
import MachienryHomePage from './homePage/MachienryHomePage'
import Navbar from '../transport/navbar/Navbar'
import Footera from '../transport/footer/Footera'

function MachienryRouteApp() {
  return (
    <div>
        <Navbar />
        <MachienryHomePage />
        <Footera />
    </div>
  )
}

export default MachienryRouteApp
