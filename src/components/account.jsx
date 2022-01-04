import React from 'react';
import { Link } from 'react-router-dom'; 
import $ from 'jquery';


 function Account({active_account}) { 

    let tab_active=(e)=>{
        if(active_account){
            $('.myclass_tab').removeClass('tab-active');
            $(e.currentTarget).addClass('tab-active');
        }
    }

     return (
        <div className="left_account_info position-relative">
            <div className="user-account">
                <i className="far fa-user accountuser"></i>
            </div>
            <ul>
                <li>
                    <Link to='/account' className="myclass_tab tab-active" onClick={(e)=>tab_active(e)}><i className="far fa-user"></i><p> My Account</p></Link>
                </li>
                <li>
                    <Link to='/account/order' className="myclass_tab" onClick={(e)=>tab_active(e)}><i className="fas fa-cart-arrow-down"></i><p> My Order</p></Link>
                </li>
                <li>
                    <Link to='/account/wishlist' className="myclass_tab" onClick={(e)=>tab_active(e)}><i className="far fa-heart"></i><p> My Wishlist</p></Link>
                </li>
                <li>
                    <Link to='/account/review' className="myclass_tab" onClick={(e)=>tab_active(e)}><i className="far fa-comment-dots"></i><p> My Reviews</p></Link>
                </li>
                <li>
                    <Link to='/account/address' className="myclass_tab" onClick={(e)=>tab_active(e)}><i className="far fa-address-card"></i><p> My Addresses </p></Link>
                </li>
                <li>
                    <Link to='/' className="myclass_tab" onClick={(e)=>tab_active(e)}><i className="fas fa-sign-out-alt"></i><p> log Out</p></Link>
                </li>
            </ul>
        </div>  
    ); 
} 
export default Account;