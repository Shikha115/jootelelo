import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function BestSeller() {
    const [BestSellerMapping, setBestSellerMapping] = useState([
        {
            id:'1',
            img1:'assets/images/bestseller_shoe_seven.webp',
            img2:'assets/images/bestseller_shoe_seventwo.webp',
            name:'Court shoe',
            price:'₹ 756.00'
        },
        {
            id:'2',
            img1:'assets/images/bestseller_shoe_eight.webp',
            img2:'assets/images/bestseller_shoe_eighttwo.webp',
            name:'Court shoe',
            price:'₹ 756.00'
        },
        {
            id:'3',
            img1:'assets/images/bestseller_shoe_nine.webp',
            img2:'assets/images/bestseller_shoe_ninetwo.webp',
            name:'Court shoe',
            price:'₹ 756.00'
        },
        {
            id:'4',
            img1:'assets/images/bestseller_shoe_ten.webp',
            img2:'assets/images/bestseller_shoe_tentwo.webp',
            name:'Court shoe',
            price:'₹ 756.00'
        },
        {
            id:'5',
            img1:'assets/images/bestseller_shoe_newone.webp',
            img2:'assets/images/bestseller_shoe_newonetwo.webp',
            name:'Court shoe',
            price:'₹ 756.00'
        },
        {
            id:'6',
            img1:'assets/images/bestseller_shoe_newtwo.webp',
            img2:'assets/images/bestseller_shoe_newtwotwo.webp',
            name:'Court shoe',
            price:'₹ 756.00'
        },
        {
            id:'7',
            img1:'assets/images/bestseller_shoe_newthree.webp',
            img2:'assets/images/bestseller_shoe_newthreetwo.webp',
            name:'Court shoe',
            price:'₹ 756.00'
        },
        {
            id:'8',
            img1:'assets/images/bestseller_shoe_newfour.webp',
            img2:'assets/images/bestseller_shoe_newfourtwo.webp',
            name:'Court shoe',
            price:'₹ 756.00'
        }
    ])
    return ( 
        <section id="best_seller">
            <div className="container">
                <h3 className="heading">Best Seller</h3>
                <div className="best_seller_main">
                    {BestSellerMapping.map(item=>{
                        return(
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
                        )
                    })}
                </div>
            </div>
        </section>
     );
}

export default BestSeller;