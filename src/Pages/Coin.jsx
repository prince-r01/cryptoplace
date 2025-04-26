import React, { useContext,useState , useEffect } from "react";
import { CoinContext } from "../context/CoinContext";
import { useParams } from "react-router-dom";
import LineChart from "../Components/LIneChart";
const Coin = () => {
  const { coinid } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData,setHistoricalData] = useState();
  const {currency} = useContext(CoinContext)
  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-BCRvjZZ8BFeswFiCnTnfWLjy",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinid}`, options)
      .then((res) => res.json())
      .then((res) => setCoinData(res))
      .catch((err) => console.error(err));
  };

  const fetchHistoricalData =async () => {
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-BCRvjZZ8BFeswFiCnTnfWLjy'}
      };
      
      fetch(`https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
        .then(res => res.json())
        .then(res => setHistoricalData(res))
        .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  },[currency])


  if(coinData && historicalData ){
    return (
        <div className="coin text-white  p-5">
           <div className="coin-name flex flex-col items-center gap-5 mx-auto my-20 mb-12">
              <img src={coinData.image.large} alt="" className="max-w-24" />
              <p className="text-[44px] "><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
           </div>
           <div className="coin-chart max-w-[600px] h-60 m-auto">
            <LineChart historicalData={historicalData}/>
           </div>

           <div className="coin-info max-w-[600px] my-12 mx-auto flex flex-col">
            <ul className="flex justify-between py-3 border-b border-[#5f5d5f] list-none" >
                <li>Crypto Market Rank</li>
                <li>{coinData.market_cap_rank}</li>
            </ul>
            <ul className="flex justify-between py-3 border-b border-[#5f5d5f] list-none" >
                <li>Current Price</li>
                <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
            </ul>
            <ul className="flex justify-between py-3 border-b border-[#5f5d5f] list-none" >
                <li>Market Cap</li>
                <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
            </ul>
            <ul className="flex justify-between py-3 border-b border-[#5f5d5f] list-none" >
                <li>24 Hour high</li>
                <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
            </ul>
            <ul className="flex justify-between py-3 border-b border-[#5f5d5f] list-none" >
                <li>24 Hour low</li>
                <li>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
            </ul>
           </div>
          </div>
    );
  }else {
    return (
        <div className="spinner grid place-self-center min-h-[80vh]">
            <div className="spin  size-16 place-self-center  border-[5px] border-[#bdbdbd] border-t-[#4500c6] rounded-full animate-[spin_2s_linear_infinite] ">
            </div>
        </div>
    )
  }
  
  
};

export default Coin;
