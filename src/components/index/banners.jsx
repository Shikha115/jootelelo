import React from 'react';
import {Link} from "react-router-dom";

function Banners() {
    return ( 
        <section id="secondsec_new">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 p-1 secondsec_left">
                        <img src="assets/images/secondsec_imageone.jpg" className="img-fluid secondsec_left_img" alt='' />
                        <div className="overtext_leftimage">
                            <p className="one" data-aos="fade-right">ATHLETIC</p>
                            <p className="two" data-aos="fade-right"> UP<br /></p>
                            <p className="one" data-aos="fade-right"> TO 60% OFF </p>
                            <Link to="/products">
                                <button className="shopnoew_secondsec">Shop Now <i className="fas fa-shopping-basket"></i></button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-4 p-1 secondsec_right">
                        <img src="assets/images/secondsec_imagetwo.png" className="img-fluid" alt='' />
                        <div className="overtext_rightimage">
                            <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                            <p className="hot_text">HOT !</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3 p-1 d-flex">
                        <img src="assets/images/secondsec_imagesix.jpg" className="img-fluid" alt='' />
                    </div>
                    <div className="col-sm-6 p-1">
                        <div className="centerimage_sectwo">
                            <img src="assets/images/secondsec_imageseven.png" className="img-fluid" alt='' />
                            <div className="overtext_center_one">
                                <span>40% <sup> off</sup></span>
                            </div>
                            <div className="overtext_center_two">
                                <Link to="/products">
                                    <button className="claim_now_first">Shop Now <i className="far fa-arrow-alt-circle-right"></i></button>
                                </Link>
                            </div>
                            <div className="overtext_center_three">
                                <h4>Get Great Deals</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 p-1 d-flex">
                        <img src="assets/images/secondsec_imagefour.jpg" className="img-fluid" alt='' />
                    </div>
                </div>
            </div>
        </section>
     );
}



export default Banners;