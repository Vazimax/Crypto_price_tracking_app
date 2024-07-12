import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CoinContext } from '../../context/CoinContext';

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    console.log('allCoin in Home:', allCoin); // Log allCoin to ensure it's populated
    if (allCoin && allCoin.length > 0) {
      setDisplayCoin(allCoin);
    }
  }, [allCoin]);

  return (
    <div className='Home'>
      <div className='Hero'>
        <h1>Crypto <b>Market</b></h1>
        <p>Welcome HaBIBI, yOU CAN Literally search for Any COIIIN YOU WANT</p>
        <br />
        <form>
          <input type="text" placeholder='Search' />
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className='cryptoTable'>
        <div className="tableLayout">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24H Change</p>
          <p>Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <div key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt={item.name} />
              <p>{`${item.name} (${item.symbol})`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
