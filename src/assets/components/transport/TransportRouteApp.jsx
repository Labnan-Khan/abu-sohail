import React from 'react'
import Navbar from './navbar/Navbar'
import Footera from './footer/Footera'
import TransportHomePage from './homePage/TransportHomePage'

function TransportRouteApp() {
  return (
    <div>
        <Navbar />
        <TransportHomePage />
        <Footera />
    </div>
  )
}

export default TransportRouteApp
