
import './App.css';


//import Form from './Form';
import Navbar from './Navbar';
import Footer from './Footer';
import React from 'react';
import PostList from './PostList';


function App() {
  return (
    <div>
    <Navbar/>
    
   
    
    </div>
  );
}


function Content() {
  return (
    <div className="Container">
      <div className="ContentWrapper">
        <h1 className="ContentTitle">
          Switch to 5G Home Internet. Plans start at $35/mo
        </h1>
        <h4 className="ContentTitle" style={{fontSize:'30px'}}>The price is the price, gauranteed.With no hidden fees or equipement charges</h4>
      </div>
      <div>
        <img className="ContentImage" src="../box.png" alt="veri" height='400px' width='500px'/>
      </div>
    </div>
  );
}
export default App;
