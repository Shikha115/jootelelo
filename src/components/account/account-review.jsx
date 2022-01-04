import React from 'react';
import { Link } from 'react-router-dom'; 
import PageBanner from '../page-banner';
import Account from '../account';


 function AccountReview() { 

     return (
        <>
            <PageBanner name='My Reviews' />

            <section id="mainaccount_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                           <Account active_account={true}/>
                        </div>
                        <div className="col-12 col-md-9">
                            <div className="right_account_details">   
                                <h4>My Reviews</h4>                  
                                <div className="main_right_details myreviews">
                                    <div className="wishlist_main">
                                        <div className="panel-body">
                                            <div className="table-responsive">
                                                <table className="table table-borderless my-wishlist-table">
                                                    <thead>
                                                        <tr>
                                                            <th>IMAGE</th>
                                                            <th>PRODUCT NAME</th>
                                                            <th>STATUS</th>
                                                            <th>DATE</th>
                                                            <th>RATING</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="product-image"><img src="assets/images/bestseller_shoe_nine.webp" alt="product-image" className="" width="80px" height="auto" /></div>
                                                            </td>
                                                            <td><Link to="http://site.udoobu.com/products/color-block-men-round-neck-black-grey-t-shirt" className="product-name">Men Black &amp; Brown Pure Cotton Printed Round Neck T-shirt</Link></td>
                                                            <td><span className="wishlist-status-link badge bg-success">
                                                                Approved</span></td>
                                                            <td>
                                                                <time>Oct 29, 2021</time>
                                                            </td>
                                                            <td>
                                                                <div class="ratting">
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star-half-alt"></i>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="product-image"><img src="assets/images/bestseller_shoe_nine.webp" alt="product-image" className="" width="80px" height="auto" /></div>
                                                            </td>
                                                            <td><Link to="http://site.udoobu.com/products/shop-dresses" className="product-name">Ultralyte Men Black Solid Running T-shirt</Link></td>
                                                            <td><span className="wishlist-status-link badge bg-danger">Unapproved</span></td>
                                                            <td>
                                                                <time>Oct 29, 2021</time>
                                                            </td>
                                                            <td>
                                                                <div class="ratting">
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star-half-alt"></i>
                                                                </div>
                                                            </td>
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
export default AccountReview;