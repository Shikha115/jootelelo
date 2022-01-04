import React from 'react';
import AboutBox from './about/about-box';
import AboutSec1 from './about/about-sec1';
import Clients from './about/clients';
import AboutVideo from './about/video';
import PageBanner from './page-banner';


function About() {
    return ( 
        <>
        <PageBanner name="about us" />
        <AboutSec1 />
        <AboutVideo />
        <AboutBox />

        <section id="banner_about">
            <div className="container">
                <div className="banner_about_div">
                </div>
            </div>
        </section>

        <section id="aboutlast_sec">
            <div className="container">
                <div className="aboutlast_div">
                    <div className="row">
                        <div className="col-sm-6 p-0">
                            <div className="about_left">
                                <h3 className="stunning_collection">STUNNING COLLECTION</h3>
                                <ul className="list-unstyled">
                                    <li> <i className="far fa-check-circle"></i> CASUAL SHOES </li>
                                    <li> <i className="far fa-check-circle"></i> FORMAL SHOES </li>
                                    <li> <i className="far fa-check-circle"></i> LOAFERS </li>
                                    <li> <i className="far fa-check-circle"></i> SANDALS </li>
                                    <li> <i className="far fa-check-circle"></i> FLIP FLOPS </li>
                                    <li> <i className="far fa-check-circle"></i> CLOSED SHOES </li>
                                    <li> <i className="far fa-check-circle"></i> SPORTS SHORTS </li>
                                </ul>
                                <button className="about_stunning">Read more <i className="far fa-arrow-alt-circle-right"></i></button>
                            </div>
                        </div>
                        <div className="col-sm-3 p-0">
                            <img src="assets/images/about_center.png" className="img-fluid" alt='' />
                        </div>
                        <div className="col-sm-3 p-0">
                            <img src="assets/images/about_rightlast.jpg" className="img-fluid" alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="last_about">
            <div className="container">
                <div className="text-center">
                <h3 className="heading">LIVE LIFE TO THE FULLEST</h3>
                <h5>Life is 20% what happens to us and 80% how we react to it</h5>
                <p>Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh,viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris</p>
            </div>
            <div className="last_aboutdiv m-5">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="about_last_main">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fas fa-book"></i>
                                </div>
                                <div className="col-10">
                                    <h4>Get committed to a new lifestyle</h4>
                                    <p>Aenean dignissim pellentesque felis. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                            </div>
                        </div>
                        <div className="about_last_main">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fas fa-graduation-cap"></i>
                                </div>
                                <div className="col-10">
                                    <h4>Get into shape by exercising</h4>
                                    <p>Aenean dignissim pellentesque felis. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                            </div>
                        </div>
                        <div className="about_last_main">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fas fa-bookmark"></i>
                                </div>
                                <div className="col-10">
                                    <h4>
                                        Rebuild your wardrobe</h4>
                                    <p>Aenean dignissim pellentesque felis. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="about_last_main">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fas fa-comment"></i>
                                </div>
                                <div className="col-10">
                                    <h4>Take time off to cool off</h4>
                                    <p>Aenean dignissim pellentesque felis. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                            </div>
                        </div>
                        <div className="about_last_main">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="col-10">
                                    <h4>Learn to enjoy your life</h4>
                                    <p>Aenean dignissim pellentesque felis. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                            </div>
                        </div>
                        <div className="about_last_main">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fas fa-paper-plane"></i>
                                </div>
                                <div className="col-10">
                                    <h4>Soar into the sky</h4>
                                    <p>Aenean dignissim pellentesque felis. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <Clients />
        </>
     );
}

export default About;