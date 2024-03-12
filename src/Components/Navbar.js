import React,{useState} from 'react'
import Logo from "../Images/pizzaLogo.png";
import {Link} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../Styles/Navbar.css';
function Navbar() {

  const[openLinks,setOpenLinks] = useState(false);


  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  }
  return (
    <>
    <nav className='navbar'>
        <div className='left-side' id={openLinks ? "open" : "close"}>
          <img src={Logo} alt='image is loading'/>
          <div className='hiddenLinks'>
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/menu" >Menu</Link>
            <Link to="/contact" >Contact</Link>
            </div> 
        </div>
        <div className='right-side'>
            <Link to ="/">Home</Link>
            <Link to ="/about">About</Link>
            <Link to ="/menu">Menu</Link>
            <Link to ="/contact">Contact</Link>
            <button onClick={toggleNavbar}>
              <ReorderIcon/>
            </button>
                     
        </div>
        

    </nav>
    </>
  )
}

export default Navbar;
