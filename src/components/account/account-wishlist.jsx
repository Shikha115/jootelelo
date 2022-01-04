import React from 'react';
import { Link } from 'react-router-dom'; 
import PageBanner from '../page-banner';
import Account from '../account';


 function AccountWishlist() { 

     return (
        <>
            <PageBanner name='My Wishlist' />

            <section id="mainaccount_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                           <Account active_account={true}/>
                        </div>
                        <div className="col-12 col-md-9">
                            <div className="right_account_details">   
                                <h4>My Wishlist</h4>                  
                                <div className="main_right_details mywishlist">
                                    <div className="wishlist_main">
                                        <div className="panel-body">
                                            <div className="table-responsive">
                                                <table className="table table-borderless my-wishlist-table">
                                                    <thead>
                                                        <tr>
                                                            <th>IMAGE</th>
                                                            <th>PRODUCT NAME</th>
                                                            <th>PRICE</th>
                                                            <th>AVAILABILITY</th>
                                                            <th>ACTION</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="product-image"><img src="assets/images/bestseller_shoe_nine.webp" alt="product-image" className="" width="80px" height="auto" /></div>
                                                            </td>
                                                            <td><Link to="http://site.udoobu.com/products/color-block-men-round-neck-black-grey-t-shirt" className="product-name">Men Black &amp; Brown Pure Cotton Printed Round Neck T-shirt</Link></td>
                                                            <td><span className="product-price">₹799.00</span></td>
                                                            <td><span className="wishlist-status-link badge bg-success">In Stock</span></td>
                                                            <td><button className="btn btn-delete">X</button></td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="product-image"><img src="assets/images/bestseller_shoe_nine.webp" alt="product-image" className="" width="80px" height="auto" /></div>
                                                            </td>
                                                            <td><Link to="http://site.udoobu.com/products/shop-dresses" className="product-name">Ultralyte Men Black Solid Running T-shirt</Link></td>
                                                            <td><span className="product-price">₹519.00 <span className="previous-price">₹799.00</span></span>
                                                            </td>
                                                            <td><span className="wishlist-status-link badge bg-danger">Out of Stock</span></td>
                                                            <td><button className="btn btn-delete">X</button></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>              
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        </> 
    ); 
} 
export default AccountWishlist;