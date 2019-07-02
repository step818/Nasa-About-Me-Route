import React from 'react';
import { Link } from 'react-router-dom';
import nasalogo from '../assets/images/nasalogo.png';
import spaceHeader from '../assets/images/spaceheader.jpg';

function Header() {
  var backimg = {
    backgroundImage: 'url("../assets/images/spaceheader.jpg")',
  };
  return(
    <div style={backimg}>
      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background-color: #333;
          grid-auto-rows: 50px;
          border: 2px solid darkgreen;
        },
        .wrapper .space {
        
        },
        .wrapper .nested {
          grid-template-columns: 1fr 6fr 2fr;
        }     
      `}</style>
      
      <div className="wrapper">
        <img src={spaceHeader}/>
        
        <div className="nested">
          <Link to="/galleries">Galleries</Link>
          <img className="logo" src={nasalogo}/>
          <h3>NASA TV</h3>  
          <div>
            <Link to="/">Home</Link> | <Link to="/about">About Us</Link>
            | 
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;