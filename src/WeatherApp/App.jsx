import React from 'react'
import "./index.css"
import Home from './pages/Home'
import Weather from './pages/weather'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SharedLayout from './component/SharedLayout'
import "./i18next"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="weather" element={<Weather />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
