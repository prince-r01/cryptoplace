import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import upperArrow from '../assets/upper-arrow.png'
import { CoinContext } from '../context/CoinContext'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const {setCurrency} = useContext(CoinContext)

    const currencyHandler = (event) => {
        switch(event.target.value) {
            case "usd" : {
                setCurrency({
                    name: "usd",
                    symbol : "$"
                });
                break;
            }
            case "eur" : {
                setCurrency({
                    name: "eur",
                    symbol : "€"
                });
                break;
            }
            case "inr" : {
                setCurrency({
                    name: "inr",
                    symbol : "₹"
                });
                break;
            }
            default: {
                setCurrency({
                    name: "usd",
                    symbol : "$"
                });
                break;
            }
        }
    }
  return (
    <div className ="navbar flex w-full px-2 md:px-16 py-5 items-center justify-between border-b-2 border-gray-700 ">
    <Link to ="/crypto-place">
    <img src={logo} alt="" className='logo h-8 '/></Link>
    <ul className='hidden  md:flex gap-8 text-white '>
        <Link to ="/crypto-place">
         <li>Home</li></Link>
         <li>Features</li>
         <li>Pricing</li>
         <li>Blog</li>
         </ul>
         <div className="nav-right flex items-center gap-4 justify-center ">
            <select onChange={currencyHandler} className='currency bg-transparent px-1 outline-none rounded-sm text-white'>
                <option value="usd" className='bg-black'>USD
                </option><option value="eur" className='bg-black'>EUR</option>
                <option value="inr" className='bg-black'>INR</option>
            </select>
            <button className='signupButton text-sm flex items-center gap-2 py-2 px-4 rounded-3xl  bg-white'>Sign up 
                <img src={upperArrow} className='h-3' alt="" />
            </button>
        </div>
      </div>  
  )
}

export default Navbar
