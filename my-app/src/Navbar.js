import React from "react";
import {Link} from  'react-router-dom';


const Navbar=()=>{
  return(
      <>
<nav class="navbar navbar-expand-lg  bg-warning">
  <div class="container-fluid">
      <Link to="/" class="navbar-brand">Holiday Fun</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link active" >Home</Link>
          </li>
        <li class="nav-item">
        <Link to="/destination" class="nav-link active">Destination</Link>   
        </li>
        <li class="nav-item">
          <Link to="/about" class="nav-link active" >About</Link>
          </li>   
          <li class="nav-item">
          <Link to="/Contact" class="nav-link active" >Contact</Link>
          </li>    
        
         {/*
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="dropdown" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>*/}
      </ul>
        
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


        
</>
    )
}
export default Navbar;