import React , { useContext, useEffect, useState }  from "react";
import { CoinContext } from '../context/CoinContext'
import { Link } from "react-router-dom";

const CryptoTable = () => {
    const {allCoin,currency,setDisplayCoin,displayCoin} = useContext(CoinContext)
    useEffect(()=> {
        setDisplayCoin(allCoin)
    },[allCoin])
    
  return (
    <div className="flex flex-col bg-[#220e55] text-sm w-full md:w-3/4 lg:w-2/3 text-white justify-center rounded-lg pb-6 ">

      <div className="table-layout flex  text-white justify-between items-center py-4  border-b-[0.1px] border-[#16a34a8f] px-2 md:px-8 ">
        <p>#</p>
        <p className="w-48 text-center">Coins</p>
        <p>Price</p>
        <p>24H Change</p>
        <p className=" hidden md:block market-cap">Market Cap</p>
      </div>
      {displayCoin.slice(0,10).map((item,index) => {
            return ( <Link to={`/Crypto-Place/coin/${item.id}`} key={index} className="coin grid grid-cols-5 md:grid-cols-7  md:gap-2 text-white px-2 md:px-8 p-4 border-b-[0.1px] border-[#16a34a8f] cursor-pointer">
                <p className="col-span-1 place-content-center mr-6 ">{item.market_cap_rank}</p>
                <div className="col-span-2 md:col-span-2 place-content-center w-48 flex items-center justify-self-end md:justify-start gap-2">  <img className= 'size-8' src={item.image} alt=""/>
                    <p>{item.name} - {item.symbol}</p>
                </div>
                <p className="col-span-1 place-content-center justify-self-center text-center ">{currency.symbol} {item.current_price.toLocaleString()}</p>
                <p className = { `col-span-1 place-content-center justify-self-end ${item.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'} ` }>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
                <p className="hidden md:grid  md:col-span-2 place-content-center justify-self-end market-cap">{currency.symbol} {item.market_cap.toLocaleString()}</p>
          </Link>)
        })}
     
    </div>
  );
};

export default CryptoTable;
