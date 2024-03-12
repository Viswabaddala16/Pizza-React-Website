import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
import About from './Pages/About';
import './Styles/Navbar.css';

const App = () => {

    return(
        <div className='app'>
            <Navbar/>
        
                
                <Routes>
                    <Route path="/" exact Component={HomePage}/>
                    <Route path="/about" exact Component={About}/>
                    <Route path="/menu" Component={Menu}/> 
                    <Route path="/contact" Component={Contact}/>
                </Routes>
                <Footer/>

        </div>
    );


}
export default App;