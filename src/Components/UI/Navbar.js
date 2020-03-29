import React from 'react';
import Search from '../UI/Search/Search';
import Logo from '../UI/Logo/Logo'; 
import './Navbar.scss';
import { NavLink } from 'react-router-dom';


function Navbar()
{
    return(
        <div className="row">
        <div className="col-12 d-flex modreknavbar">
            <div className="col-sm-12 col-lg-6   d-flex justify-content-start"> 
                <Logo />
                <Search />
            </div>
            <div className="col-sm-12 col-lg-6  d-flex justify-content-end"> 

            <nav className="navbar navbar-expand-sm ">              
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link " to="/"  >
                       Home
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link " to="/Alerts"  >
                       Alerts
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Community"  >
                       Community
                    </NavLink>                
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Events"  >
                        Events
                    </NavLink> 
                    </li>

                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                       User Name
                    </a>
                    <div className="dropdown-menu">
                        <NavLink className="nav-link dropdownlink" to="/Accounts"  >  Accounts </NavLink>                    
                        <NavLink className="nav-link dropdownlink" to="/Privacy"  >  Privacy </NavLink>                    
                        <NavLink className="nav-link dropdownlink" to="/Help"  >  Help </NavLink>                    
                        <NavLink className="nav-link dropdownlink" to="/Language"  >  Language </NavLink>  
                        <hr/>                
                        <NavLink className="nav-link dropdownlink" to="/Manage"  >  Manage </NavLink>                    
                        <NavLink className="nav-link dropdownlink" to="/PostAndActivity"  >  Post & Activity </NavLink>                    
                        <NavLink className="nav-link dropdownlink" to="/Events"  >  Events </NavLink>                    
                        <NavLink className="nav-link dropdownlink" to="/Community"  >  Communities </NavLink> 
                        <hr/>                     
                        <NavLink className="nav-link dropdownlink" to="/Signout"  >  Sign out </NavLink>                    
                    </div>
                    </li>
                </ul>
            </nav>

           
                {/* <div className="p-2 bg-success">Icon1</div>
                <div className="p-2 bg-success">Icon1</div>
                <div className="p-2 bg-success">Icon1</div>
                <div className="p-2 bg-success">Icon1</div> */}
            </div>
            
        </div>
        </div>
    )
}

export default Navbar;