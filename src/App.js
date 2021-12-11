import React from 'react'
import { StartScreen } from './components/StartScreen'
import { All } from './components/All'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export const App = () => {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartScreen /> }> </Route>
      <Route path="/alltracks" element={<All />}> </Route>
    </Routes> 
    </BrowserRouter>


  )
}
