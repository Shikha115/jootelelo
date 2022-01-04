import React from 'react';
import {Link} from 'react-router-dom';



function AboutBox() {
    return ( 
        <section id="service_secabout">
            <div className="container">
                <div className="service-page">
                <div className="container-fluid my-container">
                    <div className="service-content row">
                    <div className="col-xl-3 col-lg-6 col-sm-6 col-12 service_about_main">
                        <div className="service">
                        <Link to='#' className="ti-truck">
                            <i className="fas fa-truck"></i>
                        </Link>
                        <div className="service-info">
                            <h4 className="mb-0 text-capitilaze">Free Shipping</h4>
                            <p className="mb-0">Free shipping on all UK order</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-sm-6 col-12 service_about_main">
                        <div className="service">
                        <Link to='#' className="ti-truck">
                            <i className="fas fa-undo"></i>
                        </Link>
                        <div className="service-info">
                            <h4 className="mb-0 text-capitilaze">Valuable Gifts</h4>
                            <p className="mb-0">Free gift after every 10 order</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-sm-6 col-12 service_about_main">
                        <div className="service">
                        <Link to='#' className="ti-truck">
                            <i className="fas fa-stopwatch"></i>
                        </Link>
                        <div className="service-info">
                            <h4 className="mb-0 text-capitilaze">All Day Support</h4>
                            <p className="mb-0">Call us for free: +01 234 567 89</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-sm-6 col-12 service_about_main">
                        <div className="service">
                        <Link to='#' className="ti-truck">
                            <i className="fas fa-tag"></i>
                        </Link>
                        <div className="service-info">
                            <h4 className="mb-0 text-capitilaze">Seasonal Sale</h4>
                            <p className="mb-0">Discounts up to 50% on all</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
     );
}

export default AboutBox;