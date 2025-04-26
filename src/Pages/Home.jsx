import React, { useContext, useEffect, useState } from 'react'
import CryptoTable from '../Components/CryptoTable'
import { CoinContext } from '../context/CoinContext'


const Home = () => {
    const{allCoin,setDisplayCoin} = useContext(CoinContext)
    const[input,setInput] = useState('')
    const inputHandler = (e) => {
        setInput(e.target.value);
        if(e.target.value === "" ) {
            setDisplayCoin(allCoin)
        }
    }
    const searchHandler = async (e) => {
         e.preventDefault();
         const search_coins = await allCoin.filter((item) => {
           return item.name.toLowerCase().includes(input.toLowerCase())
         })
         setDisplayCoin(search_coins)
    }
  return (
    <div className='flex flex-col px-4 md:px-0 items-center gap-16'>
      <div className="hero mt-20 flex gap-10 flex-col items-center justify-center w-full">
        <h1 className='text-center text-4xl text-white font-bold'>Largest <br />Crypto Marketplace</h1>
        <p className='text-center text-white'>Welcome to the world's largest cryptocurrency marketplace. <br/> Sign up to explore more about cryptos.</p>
        <form className="search-box flex justify-between items-center p-2 text-sm bg-white w-[90%] md:w-1/2  rounded-md">
        <input placeholder='Search crypto...' type="text" className="Search-crypto ml-2 w-3/4  focus:outline-none " value={input} onChange={inputHandler} list='coinlist' required  />



        <datalist id='coinlist'>
            {allCoin.map((item,index) => (
                <option key={index} value={item.name}/>
            ))}

        </datalist>
        <button type='submit' onClick={searchHandler} className='search rounded-md text-white bg-[#7927ff] px-4 py-2'>Search</button>
        </form>
      </div>
      <CryptoTable/>
    </div>
  )
}

export default Home
