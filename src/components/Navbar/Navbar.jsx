import React, { useState } from 'react'
import './Navbar.css' 
import logo from '../Assets/logo.png'
import bag from '../Assets/bag.png'
import { Link } from 'react-router-dom'
export const Navbar = () => {

  const [menu,setmenu] = useState("shop");
  
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" class='logo' />
        </div>

      <ul className='nav-menu'>
        <li onClick={()=>{setmenu("shop")}}><Link to='/' style={{textDecoration: 'none' , color:'black'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("current")}}><Link to='/current'style={{textDecoration: 'none', color:'black'}}>Current</Link>{menu==="current"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("retro")}}><Link to='/retro'style={{textDecoration: 'none', color:'black'}}>Retro</Link>{menu==="retro"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("sale")}}><Link to='/sale'style={{textDecoration: 'none', color:'black'}}>Sale</Link>{menu==="sale"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={bag} alt="" class='bag' /></Link>
        <div className="nav-bag-count">0</div>
      </div>
    </div>
  )
}
export default Navbar
