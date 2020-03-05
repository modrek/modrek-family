import React from 'react';
import Navbar from './Navbar'
import Footer from '../UI/Footer'
import UserBaord from '../PublicUser/UserBoard/UserBaord'
import Ads from '../PublicUser/Ads/Ads'


function Layout(){
    return(
        <>
        <Navbar></Navbar>
        {/* <UserBaord></UserBaord>
        <Ads></Ads> */}
        <Footer></Footer>
        </>
    )
}

export default Layout;