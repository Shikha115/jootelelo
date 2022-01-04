import React from 'react';
import { Link } from 'react-router-dom';

function CartItem({img,category,product,price,quantity}) {

    return ( 
        <div className="cart-item border-bottom">
            <div className="row main align-items-center">
                <div className="col-5 d-flex align-items-center">
                    <div className="cart-item-img overflow-hidden">
                        <img className="img-fluid" src={img} alt='' />
                    </div>
                    <div className="cart-content">
                        <div className="text-muted">{category}</div>
                        <div>{product}</div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="add_input">
                        <Link to="#" className='border-end-0'>-</Link>
                        <Link to="#" className="border-end-0">{quantity}</Link>
                        <Link to="#">+</Link> 
                    </div>
                </div>
                <div className="col-3">
                   <div className="cart-price">
                        <p className='m-0'>&euro; {price}</p>
                   </div>
                </div>
                <div className="col-1"> 
                    <span className="close">&#10005;</span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;