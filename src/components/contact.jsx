import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from './page-banner';


function Contact() {
    return ( 
        <>
        <PageBanner name="Contact Us" />

        <section id="contact_firstsec">
            <div className="container">
                <div className="contact_firstdiv">
                    <h3 className="heading">Map Location</h3>
                    <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed">
                    </iframe>
                </div>
            </div>
        </section>

        <section id="contact_form">
            <div className="container">
                <h3 className="heading">Contact Us</h3>
                <div className="contact_formdiv">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="contact_info">
                                <h5 className="headoffice text-capitalize">head office</h5>
                                <div className="contact_info_main">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <p> <Link to="#">3256 Deerfield Drive, Valdosta GA32156</Link></p>
                                </div>
                                <div className="contact_info_main">
                                    <i className="fas fa-phone"></i>
                                    <p> <Link to="tel:9876543210"> 9876543210 </Link></p>
                                </div>
                                <div className="contact_info_main">
                                    <i className="fas fa-envelope"></i>
                                    <p><Link to="mailto:example@gmail.com"> example@gmail.com </Link></p>
                                </div>
                                <div className="social_icon_contact">
                                    <i className="fab fa-facebook"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-youtube"></i>
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="contact_from1">
                                <form>
                                    <input type="text" name="name" placeholder="Name" />
                                    <input type="email" name="email" placeholder="E-mail" />
                                    <input type="tel" name="phone no" placeholder="phone no" />
                                    <textarea name="comment" placeholder="comment" rows='5' className="contact_comment"></textarea>
                                    <input type="submit" value="send message" className="send_message" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="offlinestores_contact">
            <div className="container">
                <h3 className="heading">Offline Stores</h3>
                <div className="offlinestores_contact_main">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="offlinestore_locations">
                                <img src="assets/images/offlinestore_contactone.webp" className="img-fluid" alt='' />
                                <div className="offlinestore_locations">
                                    <i className="fas fa-map-pin"></i>
                                        <div className="offlinestore_locations_text">
                                            <h3>Livingston , Nj</h3>
                                            <p>3256 Deerfield Drive, Valdosta GA32156 , 1236-485-896</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="offlinestore_locations">
                                <img src="assets/images/offlinestore_contacttwo.webp" className="img-fluid" alt='' />
                                <div className="offlinestore_locations">
                                    <i className="fas fa-map-pin"></i>
                                    <div className="offlinestore_locations_text">
                                        <h3>Livingston , Nj</h3>
                                        <p>3256 Deerfield Drive, Valdosta GA32156 , 1236-485-896</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="offlinestore_locations">
                                <img src="assets/images/offlinestore_contactthree.webp" className="img-fluid" alt='' />
                                <div className="offlinestore_locations">
                                    <i className="fas fa-map-pin"></i>
                                    <div className="offlinestore_locations_text">
                                        <h3>Livingston , Nj</h3>
                                        <p>3256 Deerfield Drive, Valdosta GA32156 , 1236-485-896</p>
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

export default Contact;