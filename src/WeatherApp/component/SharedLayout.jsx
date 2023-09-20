import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './footer'

export default function SharedLayout() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}
