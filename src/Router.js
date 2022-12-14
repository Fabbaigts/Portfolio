import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Apropos from './pages/Apropos'
import Portfolio from './pages/Portfolio'
import Page404 from './pages/Page404'

import Home from './pages/Home'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio/:id" element={<Portfolio />} />
        <Route path="/about" element={<Apropos />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router