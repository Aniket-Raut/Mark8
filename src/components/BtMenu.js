import './btmenu.css'
import coupon from '../assets/icons/coupon-ico.svg'

export const BtMenu=()=>{
    return(
        <div className='btmenu-main-cnt'>
            <div className='btmenu-items-cnt'>
                <div className='discount-cnt'>
                    <img src={coupon} width='30px'></img>
                    <div>Deals</div>
                </div>
                <div className='btmenu-item'>Home</div>
                <div className='btmenu-item'>Pages</div>
                <div className='btmenu-item'>About</div>
                <div className='btmenu-item'>Account</div>
            </div>
        </div>
    )
}