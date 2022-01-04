import React from 'react'
import PageBanner from './page-banner';

function ViewOrder() {
    return ( 
        <div className='my-order'>
            <PageBanner name='View Order' />

            <section id="view_order">
                <div className="container">
                    <h4>View Order</h4>
                    <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="order-info">
                            <p className='order-subheading'>ORDER INFORMATION</p>
                            <ul>
                                <li>Phone:<span>9999063652</span></li>
                                <li>Email: <span>info@ebslon.com</span></li>
                                <li>Date: <span>Jan 3, 2022</span></li>
                                <li>Shippig Method: <span>Flat Rate</span></li>
                                <li>Payment Method: <span>Cash On Delivery</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 offset-md-2 col-md-6">
                        <div className="order-address">
                            <p className='order-subheading'>SHIPPING ADDRESS</p>
                            <p><span>Sushil Kumar 209, Civil Lines, Ludhiana Ludhiana, Punjab 540001 India</span></p>
                            <p className='order-subheading'>BILLING ADDRESS</p>
                            <p><span>Sushil Kumar 209, Civil Lines, Ludhiana Ludhiana, Punjab 540001 India</span></p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section id="order_table">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="main_right_details myorder">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-md-3"><span>PRODUCT NAME</span></div>
                                            <div className="col-md-3"><span>UNIT PRICE</span></div>
                                            <div className="col-md-3"><span>QUANTITY</span></div>
                                            <div className="col-md-3"><span>LINE TOTAL</span></div>
                                        </div>
                                    </div>
                                    <div className="card-body">                                        
                                        <div className="prCard row mb-2">
                                            <div className="col-md-3">
                                                <h6>Iron Man: Signature Stark 2</h6> 
                                                <span className="small">Garment Size: XS</span>
                                            </div>
                                            <div className="col-md-3">
                                               <p className="order-price">₹50.00</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h6>1</h6>
                                            </div>
                                            <div className="col-md-3">
                                            <p className="order-price">₹50.00</p>
                                            </div>
                                        </div>                                               
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>

            <section id="order_total">
                <div className="container">
                    <div className="order_total_inner">
                        <div className="row">
                            <div className="col-12 col-md-4 offset-md-8">
                                <ul>
                                    <li>Subtotal<span>₹50.00</span></li>
                                    <li>Discount<span>- ₹5.00</span></li>
                                    <li>Flat Rate<span>₹70.00</span></li>
                                    <li>Total<span className='order-price'>₹115.00</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
     );
}

export default ViewOrder;