import React from 'react'
import logo from '../images/logo-2.png'
import {Link} from 'react-router-dom'

 function Navbar() {
    return (
     // <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <nav className="navbar navbar-expand-lg navbar-light headerBlank">
     <a className="navbar-brand ml-5" href="#">
         <img src={logo} alt="logo" style={{width: '200', background: 'transparent'}}/>
         </a>
         <h1 className=" logo-text " style={{textAlign:'center', color:'#27233e'}}>Bharat Industries</h1>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span>
      <i className="fas fa-bars" style={{color:'black'}}></i>
    </span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto" >
      <li className="nav-item active" >  
        <Link className="nav-link ml-5" style={{color:'#27233e'}} to="/">HOME &nbsp;<i class="fas fa-home"></i> <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link ml-5" style={{color:'#27233e'}} to="/About">ABOUT</Link>
      </li>
      <li className="nav-item active" >
        <Link className="nav-link ml-5" style={{color:'#27233e'}} to="/Products">PRODUCTS</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link ml-5 mr-5" style={{color:'#27233e'}} to="/Contact">CONTACTS</Link>
      </li>       
      </ul>
  </div>
</nav>
    );
}
export default Navbar;