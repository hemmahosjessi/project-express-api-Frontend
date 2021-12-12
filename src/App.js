import React from 'react'
import { StartScreen } from './components/StartScreen'
import { Genres } from 'components/Genres'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export const App = () => {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartScreen /> }> </Route>
      <Route path="/alltracks" element={<Genres />}> </Route>
    </Routes> 
    </BrowserRouter>


  )
}
