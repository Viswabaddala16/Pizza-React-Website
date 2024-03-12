import React from 'react'
import Pizza from '../Images/pizza.jpeg';
import '../Styles/HomePage.css';
import {Link} from 'react-router-dom';
function HomePage() {
  return (
    <div className='home' style={{backgroundImage:`url(${Pizza})`,backgroundSize: 'cover' }}>
      <div className='heading-container' >
        <h1>Pizza is every where</h1>
        <p>PIZZA TO FIT ANY TASTE </p>
        
          <Link to="/menu">
            <button>
              ORDER NOW
            </button>
        
          </Link>
      </div>
      
    </div>
  )
}

export default HomePage
