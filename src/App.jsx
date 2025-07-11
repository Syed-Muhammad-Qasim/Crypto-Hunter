import React from "react"
import Home from "./pages/Home"
import { Route, Routes } from "react-router"

import Info from "./pages/Info"
import { CryptoDataProvider } from "./context/CryptoDataContext"
import Features from "./pages/features"
import Pricing from "./pages/Pricing"
import Blog from "./pages/Blog"
function App() {
 return(
 <CryptoDataProvider>
     <div className="bg-black w-full min-h-screen">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/features" element={<Features />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/info/:id" element={<Info />} />
    </Routes>
  </div>
 </CryptoDataProvider>
 )
}

export default App
