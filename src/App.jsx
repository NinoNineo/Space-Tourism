import { useState } from 'react'
import Header from './core/header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Destination from './pages/Destination/Destination'
import Moon from './components/Destination/Moon'
import Mars from './components/Destination/Mars'
import Europa from './components/Destination/Europa'
import Titan from './components/Destination/Titan'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/destination' element={<Destination/>}>
          <Route index element={<Moon/>}></Route>
          <Route path='moon' element={<Moon/>}></Route>
          <Route path='mars' element={<Mars/>}></Route>
          <Route path='europa' element={<Europa/>}></Route>
          <Route path='titan' element={<Titan/>}></Route>
        </Route>
        </Routes>
        {/* <Route path='/crew' element={<Crew />}></Route> */}
        {/* <Route path='/technology' element={<Technology />}><Routes > */}
        </>
          )
}
export default App
