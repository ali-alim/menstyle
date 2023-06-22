import React, { useState } from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Cart from '../Cart/Cart';
import "./navbar.scss"
import { useSelector } from 'react-redux';

const Navbar = () => {
  
  const products = useSelector(state => state.cart.products)
  const [ open, setOpen ] = useState(false);

  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='left'>
              <div className='item'>
                <img src="/images/geo.png" width="40px" height="35px" alt="georgian flag" />
                <KeyboardArrowDownIcon />
              </div>
              <div className='item'>
                <span>GEL</span>
                <KeyboardArrowDownIcon />
              </div>
              <div className='item'>
                <Link className='link' to="products/1">Men</Link>
              </div>
              <div className='item'>
                <Link className='link' to="products/2">Accessories</Link>
              </div>
            </div>
            <div className="center">
              <Link className ="link" to="/">MENSTYLE</Link>
            </div>
            <div className="right">
              <div className="item">
                <Link className ="link" to="/">Homepage</Link>
              </div>
              <div className="item">
                <Link className ="link" to="/">About</Link>
              </div>
              <div className="item">
                <Link className ="link" to="/">Contact</Link>
              </div>
              <div className="item">
                <Link className ="link" to="/">Stores</Link>
              </div>
              <div className="icons">
                <SearchIcon/>
                <PersonOutlineOutlinedIcon/>
                <FavoriteBorderOutlinedIcon/>
                <div className="cartIcon" onClick={() => setOpen(!open)}>
                  <ShoppingCartOutlinedIcon/>
                  <span>{products?.length}</span>
                </div>
              </div>
            </div>
        </div>
        {open && <Cart />}
    </div>
  )
}

export default Navbar
