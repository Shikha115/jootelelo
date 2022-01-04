import React from 'react';
import { Link } from 'react-router-dom'; 
import PageBanner from '../page-banner';
import Account from '../account';


 function AccountOrder() { 

     return (
        <>
            <PageBanner name='My Order' />

            <section id="mainaccount_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                           <Account active_account={true}/>
                        </div>
                        <div className="col-12 col-md-9">
                            <div className="right_account_details">   
                                <h4>My Order</h4>                   
                                <div className="main_right_details myorder">
                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <div className="row">
                                                <div className="col-md-2"><span>Order : <span className="badge bg-info"> Pending </span></span> <br /> <span>Oct 8, 2021</span></div>
                                                <div className="col-md-4"><span>Total</span> <br /> <span>₹669.10</span></div>
                                                <div className="col-md-4"><span>Ship To</span> <br /> <span>Ajay Namdev</span></div>
                                                <div className="col-md-2 text-end"><span>ORDER Id: 103 </span> <br /></div>
                                            </div>
                                        </div>
                                        <div className="card-body">                                        
                                            <div className="prCard row mb-2">
                                                <div className="col-md-2">
                                                    <img src="assets/images/bestseller_shoe_nine.webp" width="80" height="80" alt="product image" />
                                                </div>
                                                <div className="col-md-4">
                                                    <h6>
                                                        M7 by Metronaut : Men White Woven Design Sneakers
                                                    </h6> <span className="small">Qty : 1</span>
                                                </div>
                                                <div className="col-md-4"></div>
                                                <div className="col-md-2 text_right">
                                                    <Link to="http://site.udoobu.com/account/orders/103" className="btn-sm btn btn-dark mb-2">View Order</Link>
                                                    <Link to="http://site.udoobu.com/account/orders/103/cancel" className="btn-sm btn btn-danger">Cancel Order</Link>
                                                </div>
                                            </div>                                               
                                        </div>
                                    </div>

                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <div className="row">
                                                <div className="col-md-3"><span>Order : <span className="badge bg-success"> Completed </span></span> <br /> <span>Oct 8, 2021</span></div>
                                                <div className="col-md-2"><span>Total</span> <br /> <span>₹669.10</span></div>
                                                <div className="col-md-3"><span>Ship To</span> <br /> <span>Ajay Namdev</span></div>
                                                <div className="col-md-4 text-end"><span>ORDER Id: 103 </span> <br /></div>
                                            </div>
                                        </div>
                                        <div className="card-body">                                        
                                            <div className="prCard row mb-2">
                                                <div className="col-md-2">
                                                    <img src="assets/images/bestseller_shoe_nine.webp" width="80" height="80" alt="product image" />
                                                </div>
                                                <div className="col-md-4">
                                                    <h6>
                                                        M7 by Metronaut : Men White Woven Design Sneakers
                                                    </h6> <span className="small">Qty : 1</span>
                                                </div>
                                                <div className="col-md-4"></div>
                                                <div className="col-md-2 text_right">
                                                    <Link to="http://site.udoobu.com/account/orders/103" className="btn-sm btn btn-dark mb-2">View Order</Link>
                                                    <Link to="http://site.udoobu.com/account/orders/103/cancel" className="btn-sm btn btn-danger">Cancel Order</Link>
                                                </div>
                                            </div>                                               
                                        </div>
                                    </div>

                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <div className="row">
                                                <div className="col-md-3"><span>Order : <span className="badge bg-info"> Pending </span></span> <br /> <span>Oct 8, 2021</span></div>
                                                <div className="col-md-2"><span>Total</span> <br /> <span>₹669.10</span></div>
                                                <div className="col-md-3"><span>Ship To</span> <br /> <span>Ajay Namdev</span></div>
                                                <div className="col-md-4 text-end"><span>ORDER Id: 103 </span> <br /></div>
                                            </div>
                                        </div>
                                        <div className="card-body">                                        
                                            <div className="prCard row mb-2">
                                                <div className="col-md-2">
                                                    <img src="assets/images/bestseller_shoe_nine.webp" width="80" height="80" alt="product image" />
                                                </div>
                                                <div className="col-md-4">
                                                    <h6>
                                                        M7 by Metronaut : Men White Woven Design Sneakers
                                                    </h6> <span className="small">Qty : 1</span>
                                                </div>
                                                <div className="col-md-4"></div>
                                                <div className="col-md-2 text_right">
                                                    <Link to="http://site.udoobu.com/account/orders/103" className="btn-sm btn btn-dark mb-2">View Order</Link>
                                                    <Link to="http://site.udoobu.com/account/orders/103/cancel" className="btn-sm btn btn-danger">Cancel Order</Link>
                                                </div>
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
export default AccountOrder;