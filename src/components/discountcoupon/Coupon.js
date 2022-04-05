import './coupon.css'
import visa from '../../assets/icons/visa.png'

export const Coupon=(prop)=>{
    return(
        <div className='coupon-main-cnt'>
            <div className='coupon-cl1'>
                <img src={prop.img} width='40px'/>
            </div>
            <div className='coupon-cl2'>
                {prop.txt}
                {/* 10% Discount on Visa Cards */}
            </div>
        </div>
    )
}