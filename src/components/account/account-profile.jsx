import React from 'react';
import { Link } from 'react-router-dom'; 
import PageBanner from '../page-banner';
import Account from '../account';


 function AccountProfile() { 

     return (
        <>
            <PageBanner name='My profile' />

            <section id="mainaccount_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                           <Account active_account={true}/>
                        </div>
                        <div className="col-12 col-md-9">
                            <div className="right_account_details">   
                            <h4>Account Information</h4>                      
                                <div className="main_right_details accountinfo">
                                    <div className="accountinfo_main">
                                        <ul className="user_details m-0">
                                            <li><i className="fas fa-user"></i> User Name</li>
                                            <li><i className="far fa-envelope"></i> email@email.com</li>
                                            <li><i className="fas fa-phone"></i> Phone no</li>
                                            <li><i className="fas fa-key"></i> Change Password</li>
                                        </ul>
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
export default AccountProfile;