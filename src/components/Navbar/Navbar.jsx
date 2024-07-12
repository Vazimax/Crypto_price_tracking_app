import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'

const Navbar = () => {
  const {setCurrency} = useContext(CoinContext)
  const currencyHanlder = (event) =>{
    switch (event.target.value){
      case 'usd': {setCurrency({name:'usd',symbol:'$'}); break}
      case 'eur': {setCurrency({name:'eur',symbol:'E'}); break}
      case 'mad': {setCurrency({name:'mad',symbol:'M'}); break}

    }
  }
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
      </ul>
      <div className='nav-right'>
        <select onChange={currencyHanlder}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="mad">MAD</option>
        </select>
        <button>Sign Up <img src={arrow_icon}/></button>
      </div>
    </div>
  )
}

export default Navbar
