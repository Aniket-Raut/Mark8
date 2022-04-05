import './navbar.css'
import SearchIc from '../../assets/icons/search-ic.svg'
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
import { DialogPoint } from '../DialogPoint'



export const NavBar = ()=>{
    const[showLoc,setShowloc] = useState(false);


    const showMenu=()=>{
        let menu = document.getElementById("loc-menu");
        setShowloc(!showLoc);
        showLoc?menu.style.display="flex":menu.style.display="none";
    }

    return(
        <div className='navbar-main-cont'>
            <div className='logo'>
                <img src={Logo} width='70px'/>
            </div>
            <div className='navbar-cl1'>
                <div className='navbar-cl1-r1'>
                    <div className='contact-us'>
                        <img src={PhoneIC} width='12px'/>
                        <div>0712-224-5682</div>
                    </div>
                    <div className='contact-us' >
                        <div className='contents-contact-us' onClick={showMenu}>
                            <img src={LocationIC} width='17px'/>
                            <div>Nagpur,&nbsp;440022</div>
                            <img src={DownIC} width='10px'/>
                        </div>

                        <DialogPoint idb='loc-menu'>
                            <div className='loc-menu-cnt'>
                                <label>Select City</label>
                                <select className='loc-select'>
                                    <option className='loc-city'>Nagpur</option>
                                    <option className='loc-city'>Nagpur</option>
                                    <option className='loc-city'>Nagpur</option>
                                    <option className='loc-city'>Nagpur</option>
                                    <option className='loc-city'>Nagpur</option>
                                </select>
                                <input className='loc-inp' type="text" placeholder='Enter Area/City/Pincode'></input>
                                <button className='loc-btn' onClick={showMenu}>Confirm</button>
                            </div>
                           
                        </DialogPoint>
                        
                    </div>

                    <div className='contact-us'>
                        <img src={UserIC} width='17px'/>
                        <div>Login</div>
                    </div>
                </div>
                <div className='navbar-cl1-r2'>
                    <SearchBar></SearchBar>
                    <div className='navic-main-cnt'>
                        <NavIC src={HeartIC} w='26px' count='0'></NavIC>
                        <NavIC src={CartIC} w='32px' count='0'></NavIC>
                    </div>
                </div>
            </div>
            
            
            
        </div>
    )
}

// function DialogPoint(props){
//     return(
//         <div id={props.idb} className='dialog-point-main-cnt'>
//             <div className='location-menu' >
//                     {props.children}
//             </div>
//         </div>
//     )
// }


function SearchBar(){
    return(
        <div className='searchbar-main-cont'>
            <div className='searchbar-left-box'>
                <input className='search-input' placeholder='search...'></input>
                <select className='search-select'>
                    <option>All Categories</option>
                    <option>Dairy Items</option>
                    <option>All Categories</option>
                    <option>All Categories</option>
                    <option>All Categories</option>
                    <option>All Categories</option>
                </select>
            </div>
            
            <div className='search-button'>
                <img src={SearchIc} width='25px' />
            </div>
        </div>
    )
}

export default function Snackbar(){
  return(
      <div className='snackbar-main-cnt'>
          <div>Something</div>
          <img className='cross-btn' src={CancelIC} width='16px'/>
      </div>
  )
}

function NavIC(prop){
    return(
        <div className='navic-main-cnt'>
            <div className='navic-notif'>{prop.count}</div>
            <img src={prop.src} width={prop.w}/>
        </div>
    )
}