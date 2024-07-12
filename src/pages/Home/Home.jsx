import React from 'react'
import './Home.css'


const Home = () => {
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
      </div>
    </div>
  )
}

export default Home
