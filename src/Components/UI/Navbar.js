import React from 'react';
import Auxi from '../../Hoc/Auxi';
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
                    <NavLink className="nav-link" to="/Alerts" exact="true" >
                       Alerts
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Community" exact="true" >
                       Community
                    </NavLink>                
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Events" exact="true" >
                        Events
                    </NavLink> 
                    </li>

                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                       User Name
                    </a>
                    <div className="dropdown-menu">
                        <NavLink className="nav-link" to="/Accounts" exact="true" >  Accounts </NavLink>                    
                        <NavLink className="nav-link" to="/Privacy" exact="true" >  Privacy </NavLink>                    
                        <NavLink className="nav-link" to="/Help" exact="true" >  Help </NavLink>                    
                        <NavLink className="nav-link" to="/Language" exact="true" >  Language </NavLink>  
                        <hr/>                
                        <NavLink className="nav-link" to="/Manage" exact="true" >  Manage </NavLink>                    
                        <NavLink className="nav-link" to="/PostAndActivity" exact="true" >  Post & Activity </NavLink>                    
                        <NavLink className="nav-link" to="/Events" exact="true" >  Events </NavLink>                    
                        <NavLink className="nav-link" to="/Communities" exact="true" >  Communities </NavLink> 
                        <hr/>                     
                        <NavLink className="nav-link" to="/Signout" exact="true" >  Sign out </NavLink>                    
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