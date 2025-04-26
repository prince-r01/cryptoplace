import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Coin from './Pages/Coin'
const App = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path='/cryptoplace' element={<Home/>}></Route>
    <Route path='/cryptoplace/coin/:coinid' element={<Coin/>}></Route>
    </Routes>
    <div className="footer text-center  mt-16 mb-3 w-full text-white text-[12px] flex flex-col gap-3 ">
      <hr className='opacity-40 place-items-center' /> 
      <p>Copyright @ 2024, Cryptoplace - All Right Reserved.</p></div>
    </div>
  )
}

export default App
