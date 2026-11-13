import React from 'react'
import Navbar from './Components/Navbar'
import Create from './Components/Create'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Read from './Components/Read'
import Update from './Components/Update'

function App() {
  return (
    <div>
      <BrowserRouter> 
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Create />} />
        <Route exact path='/read' element={<Read />} />
        <Route exact path='/edit/:id' element={<Update />} />
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
