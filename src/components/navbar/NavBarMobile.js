import './navbar.css'
import SearchIc from '../../assets/icons/search-ic-dark.svg'
import CancelIC from '../../assets/icons/cross-ic.svg'
import CartIC from '../../assets/icons/cart-ic.svg'
import HeartIC from '../../assets/icons/heart-ic.svg'
import PhoneIC from '../../assets/icons/phone-ico.svg'
// import LocationIC from '../../assets/icons/location-ic.svg'
import LocationIC from '../../assets/icons/locationBold.png'
import DownIC from '../../assets/icons/arrow-down.svg'
import UserIC from '../../assets/icons/user1.png'
import Logo from '../../assets/icons/bb.png'
import { useState } from 'react'



export const NavBarMobile = ()=>{
    const[showLoc,setShowloc] = useState(false);


    const showMenu=()=>{
        let menu = document.getElementById("loc-menu");
        setShowloc(!showLoc);
        showLoc?menu.style.display="block":menu.style.display="none";
    }


    return(
        <div className='navbar-mob-main-cont'>
            <div className='navbar-mob-r1'>
                <div className='mlogo'>
                    <img src={Logo} width='30vh'/>
                </div>
                <div className='navbar-mob-location-area'>
                    <div className='navbar-mob-location'>
                        <div className='mob-nav-address'>X20,Dharampeth,Nagpur</div>
                        <img src={DownIC} width='14vh'/>
                    </div>
                    <div className='mob-nav-timeslot'>
                        12pm - 6am
                    </div>
                </div>
                <div className='contact-us'>
                        <img className='Uic' src={UserIC} width='20vh'/>
                </div>
                {/* <div className='navbar-mob-hamb'>
                    <Hamburger></Hamburger>
                </div> */}

            </div>
            <div className='navbar-mob-r2'>
                <MobileSearch></MobileSearch>
            </div>
            
        </div>
    )
}

function MobileSearch(){
    return(
        <div className='mobilesearch-main-cnt'>
            <img src={SearchIc} width='20vh'></img>
            <input placeholder='search'/>
            <div className='search-suggestions'>
                <div>Temp1</div>
                <div>Temp1</div>
                <div>Temp1</div>
                <div>Temp1</div>
            </div>
        </div>
    )
}

function Hamburger(){
    return(
        <div className='Hamburger-main-cnt'>
            <div className='Hamburger-bar'></div>
            <div className='Hamburger-bar'></div>
            <div className='Hamburger-bar'></div>
        </div>
    )
}