import './cardview.css'
import apple from '../../assets/images/product/apple.png'
import star from '../../assets/icons/star.png'
import { FoodSign } from './FoodSign'

export const CardView=()=>{
    return(
        <div className='cv1-main-cnt'>
            <div className='cv1-row1'>
                <img src={apple} width='160px'/>
                <div className='cv1-fsign'>
                    <FoodSign></FoodSign>
                </div>
            </div>
            <div className='cv1-row2'>
                <div className='cv1-r2-description-cnt'>
                    <div className='cv1-product-brand'>Fresho</div>
                    <div className='cv1-name-price-cnt'>
                        <div className='cv1-product-title'>Farm Fresh Apple</div>
                        <div className='cv1-price'>&#8377;120</div>
                    </div>
                    <div className='cv1-name-price-cnt'>
                        <select>
                            <option>500Gm</option>
                            <option>1KG</option>
                        </select>
                        <div className='cv1-price'>&#8377;120</div>
                    </div>
                    
                    <div className='cv1-rating'>
                        <img src={star} width='15px'/> 4
                        <div className='cv1-total-ratings'>12 Ratings</div>
                    </div>
                </div>
            </div>
        </div>
    )
}