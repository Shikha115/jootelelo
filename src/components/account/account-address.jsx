import React from 'react';
import { Link } from 'react-router-dom'; 
import PageBanner from '../page-banner';
import Account from '../account';


 function AccountAddress() { 

     return (
        <>
            <PageBanner name='My Address' />

            <section id="mainaccount_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                           <Account active_account={true}/>
                        </div>
                        <div className="col-12 col-md-9">
                            <div className="right_account_details">   
                                <h4>My Address</h4>                  
                                <div className="main_right_details myaddresses">
                                    <div className="wishlist_main">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-9 d-flex">
                                                <address className="address-card">
                                                    <div className="address-card-data">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <span className="mb-3 namein_addres">Ajay Namdev</span>
                                                                <br /> <span style={{fontWeight: '400'}}>A-223, First Floor</span>
                                                                <br /> <span style={{fontWeight: '400'}}>Gali No-9, Near Sharma General Store, Buradi</span>
                                                                <br /> <span style={{fontWeight: '400'}}>NEW DELHI, Delhi 110084</span>
                                                                <span style={{fontWeight: '400'}}>India</span>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                    <div className="address-card-actions mt-3">
                                                        <button type="button" className="btn btn-primary-custom-o btn-primary-custom-sm btn-edit-address" style={{fontWeight: '400'}}>Edit</button> 
                                                        <button type="button" className="btn btn-danger-custom btn-primary-custom-sm btn-delete-address" style={{fontWeight: '400'}}>Delete</button>
                                                    </div>
                                                </address>
                                            </div>
                                            <div className="col-xl-6 col-lg-9 d-flex">
                                                <address className="address-card">
                                                    <div className="address-card-data">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <span className="mb-3 namein_addres">Vishal Gogia</span><br /> 
                                                                <span style={{fontWeight: '400'}}>809, ITL Tower B09</span><br /> 
                                                                <span style={{fontWeight: '400'}}>NSP, Pitam Pura</span><br /> 
                                                                <span style={{fontWeight: '400'}}>Delhi, Delhi 110034</span> 
                                                                <span style={{fontWeight: '400'}}>India</span>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                    <div className="address-card-actions mt-3">
                                                        <button type="button" className="btn btn-primary-custom-o btn-primary-custom-sm btn-edit-address" style={{fontWeight: '400'}}>Edit</button> 
                                                        <button type="button" className="btn btn-danger-custom btn-primary-custom-sm btn-delete-address" style={{fontWeight: '400'}}>Delete</button>
                                                    </div>
                                                </address>
                                            </div>
                                            <div className="col-xl-6 col-lg-9 d-flex">
                                                <address className="address-card active">
                                                    <div className="address-card-data">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <span className="mb-3 namein_addres">Sushil Kumar</span><br /> 
                                                                <span style={{fontWeight: '400'}}>209, Civil Lines,</span><br /> 
                                                                <span style={{fontWeight: '400'}}>Ludhiana</span><br /> 
                                                                <span style={{fontWeight: '400'}}>Ludhiana, Punjab 540001</span> 
                                                                <span style={{fontWeight: '400'}}>India</span>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                    <div className="address-card-actions mt-3">
                                                        <button type="button" className="btn btn-primary-custom-o btn-primary-custom-sm btn-edit-address" style={{fontWeight: '400'}}>Edit</button> 
                                                        <button type="button" className="btn btn-danger-custom btn-primary-custom-sm btn-delete-address" style={{fontWeight: '400'}}>Delete</button>
                                                    </div>
                                                </address>
                                            </div>
                                            <div className="col-md-12 mt-3">
                                                <button type="button" className="view_cart">ADD NEW ADDRESS</button>
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
export default AccountAddress;