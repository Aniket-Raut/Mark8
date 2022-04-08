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

export const CardView2=(prop)=>{
    return(
        <div className='cv2-main-cnt'>
            <div className='cv2-disc'>
                    <CardDiscountTag disc={prop.disc}></CardDiscountTag>
            </div>
            <div className='cv1-row1'>
                <img src={prop.img} width='160px'/>
                
            </div>
            <div className='cv2-fsign'>
                <FoodSign></FoodSign>
            </div>
            <div className='cv2-row2'>
                <div className='cv2-productName'>{prop.pname}</div>
                <div className='cv2-productQuantity'>{prop.quantity}{prop.unit}</div>
            </div>
            <div className='cv1-rating'>
                <img src={star} width='15px'/> {prop.rating}
                <div className='cv1-total-ratings'>{prop.ratings} Ratings</div>
            </div>
            <div className='cv2-row3'>
                <div className='cv2-productPrice'><Price price={prop.price} dprice={prop.dprice} ></Price></div>
                <button className='cv2-add-btn'>Add</button>
            </div>
        </div>
    )
}

function Price(prop){
    if(prop.dprice===undefined){
        return(
            <div>&#8377;{prop.price}</div>
        )
    }else{
        return(
            <div className='price-cv-main'>
                &#8377;
                <strike>{prop.price}</strike>
                <div>{prop.dprice}</div>
            </div>
        )
    }
}

export function CardDiscountTag(prop){
    if(prop.disc!=null){
        return(
            <div className='card-disc-tag-main'>
                {prop.disc}% off
            </div>
        )
    }
}