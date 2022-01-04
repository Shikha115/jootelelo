import React from 'react';


function AboutSec1() {
    return ( 
        <section id="about_firstsec">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <h3 className="heading">A WORD ABOUT OUR SHOES</h3>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <h3>Best of all sports shoes</h3>
                        <div className="about_points">
                            <div className="about_points_main">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <img src="assets/images/about_icon_three-removebg-preview.png" className="img-fluid" alt='' />
                                    </div>
                                    <div className="col-sm-9">
                                        <h4>Rebuild your wardrobe</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor  </p>
                                    </div>
                                </div>
                            </div>
                            <div className="about_points_main">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <img src="assets/images/about_icon_two-removebg-preview.png" className="img-fluid" alt='' />
                                    </div>
                                    <div className="col-sm-9">
                                        <h4>Soar into the sky</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor  </p>
                                    </div>
                                </div>
                            </div>
                            <div className="about_points_main">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <img src="assets/images/about_icon_one-removebg-preview.png" className="img-fluid" alt='' />
                                    </div>
                                    <div className="col-sm-9">
                                        <h4>Take time off to cool off</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className="col-sm-4">
                        <img src="assets/images/about_right.webp" className="img-fluid" alt='' />
                    </div>
                </div>
            </div>
        </section>
     );
}

export default AboutSec1;