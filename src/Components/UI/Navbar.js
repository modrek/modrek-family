import React from 'react';
import Search from '../UI/Search/Search';
import Logo from '../UI/Logo/Logo';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {

    const store = useSelector(store => store)
    let menuItemsobj = [
        { title: "Login", url: "/Login" }];
    let drpdown = null;
    if (store.userToken)//Authenticate
    {
        menuItemsobj = [
            { title: "Home", url: "/" },
            { title: "Alerts", url: "/Alerts" },
            { title: "Community", url: "/Community" },
            { title: "Events", url: "/Events" },
        ];

        let drpitemsobj = [
            { title: "Accounts", url: "/Accounts" },
            { title: "Privacy", url: "/Privacy" },
            { title: "Help", url: "/Help" },
            { title: "Language", url: "/Language" },
            { title: "Manage", url: "/Manage" },
            { title: "PostAndActivity", url: "/Post & Activity" },
            { title: "Events", url: "/Events" },
            { title: "Community", url: "/Community" },
            // { title: "Signout", url: "/Signout" },


        ];


        let drpmenuitems =
            drpitemsobj.map((itm, index) => {
                return (
                    <NavLink key={index} className="nav-link dropdownlink" to={itm.url} >  {itm.title} </NavLink>
                )
            });

        function logout() {
            localStorage.removeItem('token');
            store.userToken = "";
        };
        drpdown =
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    User Name
        </a>
                <div className="dropdown-menu">
                    {drpmenuitems}
                    <NavLink className="nav-link dropdownlink" to='/' onClick={logout} >  Signout</NavLink>
                </div>
            </li>


    }

    let menuitems = menuItemsobj.map((itm, index) => {
        return (
            <li key={index} className="nav-item">
                <NavLink className="nav-link " to={itm.url} exact >
                    {itm.title}
                </NavLink>
            </li>
        )
    });



    return (
        <div className="row">
            <div className="col-12 d-flex modreknavbar">
                <div className="col-sm-12 col-lg-6   d-flex justify-content-start">
                    <Logo />
                    <Search />
                </div>
                <div className="col-sm-12 col-lg-6  d-flex justify-content-end">
                    <nav className="navbar navbar-expand-sm ">
                        <ul className="navbar-nav">
                            {menuitems}
                            {drpdown}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}


export default Navbar;