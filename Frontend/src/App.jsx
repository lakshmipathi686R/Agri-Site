import React from "react"
import {Routes,Route} from "react-router-dom"
import Home from "../src/components/Home"
import About from "../src/components/About"


function App() {
 

  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/buyers' element={<Buyers/>}/>
    <Route path='/farmer' element={<Farmer/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
    </>
  )
}

export default App
