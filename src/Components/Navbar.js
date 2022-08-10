import React from 'react';
import {NavLink} from 'react-router-dom';
function Navbar(props) {
  
  
  return (
   <>
   
   <div className="container-fluid nav-bg">
      <div className='row'>
         <div className='col-10 mx-auto'>

<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink exact className="navbar-brand" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink exact activeClassName='manu_active ' className="nav-link active" aria-current="page" to="/">home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName='manu_active' className="nav-link active" aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName='manu_active' className="nav-link active" aria-current="page" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName='manu_active' className="nav-link active" aria-current="page" to="/product">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName='manu_active' className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
            
</div>
      </div>
   </div>
   </>
  );
}

export default Navbar;
