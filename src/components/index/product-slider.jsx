import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function ProductSlider() {

    const [ProductMapping, setProductMapping] = useState([
        {
            id:'1',
            img1:'assets/images/bestseller_shoe_newfive.webp',
            img2:'assets/images/bestseller_shoe_newfivetwo.webp',
            name:'Court shoe',
            price:'₹ 756.00'
        },
        {
            id:'2',
            img1:'assets/images/bestseller_shoe_newsix.webp',
            img2:'assets/images/bestseller_shoe_newsixtwo.webp',
            name:'Court shoe',
            price:'₹ 756.00'
        },
        {
            id:'3',
            img1:'assets/images/bestseller_shoe_newseven.webp',
            img2:'assets/images/bestseller_shoe_newseventwo.webp',
            name:'Court shoe',
            price:'₹ 756.00'
        },
        {
            id:'4',
            img1:'assets/images/bestseller_shoe_newfour.webp',
            img2:'assets/images/bestseller_shoe_newfourtwo.webp',
            name:'Court shoe',
            price:'₹ 756.00'
        }
    ])

    return ( 
        <section id="shop_now_slider">
            <div className="container">
                <h3 className="heading">SPECIAL PRODUCTS</h3>
                <OwlCarousel className="product-owl owl-theme" items='4' smartSpeed='1000' autoplay loop margin={10} dots={false} autoplayHoverPause={true}>
                    {
                        ProductMapping.map(item=>{
                            return(
                                <div className="item" key={item.id}>
                                    <div className="best_seller_container">
                                        <div className="seller_container_main">
                                            <img src={item.img1} className="img-fluid productimage_one" alt='' />
                                            <img src={item.img2} className="img-fluid productimage_two" alt='' />
                                            <div className="new_arrival">
                                                <p>New <br /> Arrival</p>
                                            </div>
                                            <div className="discount">
                                                <p>20% Discount</p>
                                            </div>
                                            <div className="product_hover_effet">
                                                <div className="hover_icons">
                                                    <i className="fab fa-opencart"></i>
                                                    <Link to="/product.html">
                                                    <i className="fas fa-link"></i>
                                                    </Link>
                                                    <i className="far fa-heart"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product_about">
                                            <h5 className="shoe_name">{item.name}</h5>
                                            <div className="price_sec">
                                                <div className="extra">
                                                    <h5>{item.price}</h5>
                                                    <div className="ratting">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                    </div>
                                                </div>
                                                <div className="cart_icon">
                                                    <i className="fas fa-shopping-cart"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </OwlCarousel>
            </div>
        </section>
     );
}

export default ProductSlider;