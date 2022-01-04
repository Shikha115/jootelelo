import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';


function Footer() {

    const cart_overlay = () =>{    
      
            $('#cart_section').removeClass("right_zero");
            $('.cart_overlay').css('display', 'none');
            $('body').removeClass('overflow-hidden');
    }



    return ( 
        <>
            <section id="cart_section">
                <div className="cart_sectionmain">
                    <div className="cartsec_head">
                        <h5>Your Cart is Empty</h5>
                        <span className="cross" onClick={()=>cart_overlay()}>&times;</span>
                    </div>
                    <div className="cart-img">
                        <img src="assets/images/empty-cart.png" className="img-fluid" alt='' />
                        <Link to="/cart" onClick={()=>cart_overlay()} className="view_cart">
                            view cart
                        </Link>
                    </div>
                </div>
            </section>
            <div className="cart_overlay" onClick={(e)=>cart_overlay(e)}>
            </div>
            <footer>
                <section id="footer">
                    <div className="container">
                        <div className="col-sm-12 footer-logo_sec">
                            <Link className="navbar-brand" to="/">
                                <img src="assets/images/logo.png" className="logo_image" alt='' />
                            </Link>
                        </div>
                        <div className="row my-4">
                            <div className="col-sm-3 aboutstore_footer">
                                <h5>About Store</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repudiandae perferendis nisi reiciendis, quae nesciunt alias nam. Sint, quis ipsum.</p>
                                <h5>Contact Us</h5>
                                <div className="location_div socialmedea_sec">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <p>1203 Town Center Drive FL 33458 USA</p>
                                </div>
                                <div className="phone_div socialmedea_sec">
                                    <i className="fas fa-phone"></i>
                                    <p><Link to='tek:+91 9876543210'>+91 9876543210</Link></p>
                                </div>
                                <div className="email_div socialmedea_sec">
                                    <i className="far fa-envelope"></i>
                                    <p><Link to='mailto:example@gmail.com'>example@gmail.com</Link></p>
                                </div>
                            </div>
                            <div className="col-sm-2 footer_links">
                                <h5>My account</h5>
                                <ul>
                                    <li><Link to='#'>Checkout</Link></li>
                                    <li><Link to='/account'>My Account</Link></li>
                                    <li><Link to='#'>My Orders</Link></li>
                                    <li><Link to='#'>Wishlist</Link></li>
                                    <li><Link to='#'>Login</Link></li>
                                </ul>
                            </div>
                            <div className="col-sm-2 footer_links">
                                <h5>My account</h5>
                                <ul>
                                    <li><Link to='#'>Special</Link></li>
                                    <li><Link to='#'>New Products</Link></li>
                                    <li><Link to='#'>My Orders</Link></li>
                                    <li><Link to='#'>Best Sellers</Link></li>
                                    <li><Link to='#'>Our Stores</Link></li>
                                </ul>
                            </div>
                            <div className="col-sm-2 footer_links">
                                <h5>Information</h5>
                                <ul>
                                    <li><Link to='/about'>About Us</Link></li>
                                    <li><Link to='#'>Privacy Policy</Link></li>
                                    <li><Link to='#'>Terms & Conditions</Link></li>
                                    <li><Link to='/faq'>Help & FAQs</Link></li>
                                    <li><Link to='#'>Our Stores</Link></li>
                                </ul>
                            </div>
                            <div className="col-sm-3 contact_footer">
                                <h5 className="mb-3">Sign Up To Newsletter</h5>
                                <div className='d-flex align-items-center'>
                                    <input type="text" placeholder="Enter Your e-mail" className="footer_input" />
                                    <input type="submit" className="submit_footer" />
                                </div>
                                <div className="followus_footer">
                                    <h5 className="mt-3">Follow Us</h5>
                                    <div className="footerextra">
                                        <i className="fab fa-facebook-f"></i>
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-instagram"></i>
                                        <i className="fab fa-youtube"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy_right">
                        <p>Copyright &copy; 2021, <Link to='/' className='text-white'>Jootelelo</Link> Made with <i class="fas fa-heart text-white"></i> by <Link to='ebslon.com' className='text-white'>Ebslon Infotech</Link></p>
                    </div>
                </section>
            </footer>
        </>
     );
}

export default Footer;