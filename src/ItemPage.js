import React from "react";
import './itempage.css';
import star from './assets/icons/star.png'

function ProductPage(){
    return(
        <div className="product-page-main-cnt">
            <div className="product-main-r1">
                <div className="product-c1">
                    <div className="product-img"></div>
                    <div className="product-img-previews">
                        <div className="product-img-preview"></div>
                        <div className="product-img-preview"></div>
                        <div className="product-img-preview"></div>
                    </div>
                </div>

                <div className="product-c2">
                    <div className="product-brand">Fresho</div>
                    <div className="product-name">Fresho Apple- Shimla, 4pcs</div>
                    <div className="product-ratings-container">
                        <div className="product-ratings">
                            <img src={star} width='18px'></img>
                            <img src={star} width='18px'></img>
                            <img src={star} width='18px'></img>
                            <img src={star} width='18px'></img>
                            <img src={star} width='18px'></img>
                        </div>
                        <div className="product-total-ratings">13 ratings</div>
                        
                    </div>
                    <div className="product-mrp">MRP:
                        <strike>120</strike>
                        <div className="product-discounted-price">100</div>
                        <div className="product-discount-perc"> 20% off</div>
                    </div>
                    <div className="product-btn-row1">
                        <input type='number' defaultValue='1'></input>
                        {/* <button>Add to Basket</button> */}
                        <div className="product-to-basket-btn">Add to Basket</div>
                        <div className="product-save-btn">Save</div>
                    </div>
                    <div className="product-delivery-timeslot">
                        Delivery by Sunday, 12th April 9:00am-9:00pm
                    </div>
                    <div className="product-quantity-options">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;