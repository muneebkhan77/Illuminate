import React, { Component }  from 'react';
import { Link, NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom';


const navbar =() => {
  
  
    const handleLogout=()=>{
      localStorage.removeItem("token");
      window.location.reload()
     
    }
    return(
        <>

        <nav className="navbar navbar-dark bg-dark fixed-top pd-left-100px position-absolute ">
        <div className="container-fluid  ">
          <Link className="nav-link navbar-brand position-relative start-50 monospace " to="/">Illuminate</Link>
          <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Discover</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    
                  <Link className="nav-link"  to='/about'>About us</Link>
                </li>
                <li className="nav-item">
                    
                  <Link className="nav-link"  to='/form'>Form</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                  </Link>
                  
                  <ul className="dropdown-menu dropdown-menu-dark ">
                    
                    <li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li>
                    <li><Link className="dropdown-item" to="/jobsearch2"> Job Search</Link></li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
                    
                  </ul>
                </li>
              </ul>
              
              <button type="button" class="btn btn-light my-1 mx-2" onClick={handleLogout}>Logout</button>
              
            
              
            </div>
          </div>
        </div>
      </nav>
      
      </>
    )

}
export default navbar;