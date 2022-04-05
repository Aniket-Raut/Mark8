import { Coupon } from './Coupon'
import './discountarea.css'
import visa from '../../assets/icons/visa.png'
import paytm from '../../assets/icons/pngegg.png'

export const DiscountArea=()=>{
    return(
        <div className='Discount-area-super'>
            <div className='title1'>Discount Offers</div>
            <div className='discount-area-main-cnt'>
            <div className='discount-area-scroll'>
                <Coupon img={visa} txt="10% Discount on Visa Cards"></Coupon>
                <Coupon img={paytm} txt="upto 10% cashback on paytm Wallet"></Coupon>
            </div>
            
            </div>
        </div>
        
    )
}