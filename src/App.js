import React from 'react'
import { StartScreen } from './components/StartScreen'
import { TracksList } from './components/TracksList'
import { Genres } from 'components/Genres'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export const App = () => {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartScreen /> }> </Route>
      <Route path="/alltracks" element={<TracksList />}> </Route>
      <Route path="/genres" element={<Genres />}> </Route>
    </Routes> 
    </BrowserRouter>


  )
}
