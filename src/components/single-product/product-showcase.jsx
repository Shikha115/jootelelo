import React from 'react';
import $ from 'jquery';

function ProductShowcase() {

    const image_list=(e)=>{
        var image = $(e.currentTarget).children('img').attr('src');
        $('#imageZoom').attr('src', image);
        $('.containerZoom').css("background-image", "url(" + image + ")");
    }

    return ( 
 
        <section id="product_images">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-3">
                                <div className="small_images">
                                    <ul className="list-unstyled">
                                        <li className="image_list" onClick={(e)=>image_list(e)}>
                                            <img src="assets/images/bestseller_shoe_ninetwo.webp" className="img-fluid change_image" alt='' />
                                        </li>
                                        <li className="image_list" onClick={(e)=>image_list(e)}>
                                            <img src="assets/images/bestseller_shoe_ninethree.webp" className="img-fluid" alt='' />
                                        </li>
                                        <li className="image_list" onClick={(e)=>image_list(e)}>
                                            <img src="assets/images/bestseller_shoe_ninefour.webp" className="img-fluid" alt='' />
                                        </li>
                                        <li className="image_list" onClick={(e)=>image_list(e)}>
                                            <img src="assets/images/bestseller_shoe_ninefive.webp" className="img-fluid" alt='' />
                                        </li>
                                        <li className="image_list" onClick={(e)=>image_list(e)}>
                                            <img src="assets/images/bestseller_shoe_ninesix.webp" className="img-fluid" alt='' />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-9 pl-0">
                                <div className="big-image">
                                    <img id="imageZoom" className="img-fluid" src="assets/images/bestseller_shoe_nine.webp" alt="A image to apply the ImageZoom plugin" alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="product_info">
                            <div className="extra">
                                <h2 className="product_discription_name">M7 by Metronaut</h2>
                                <p className="product_discription">Men White Woven Design Sneakers</p>
                                <div className="extra">
                                    <i className="fas fa-star star"></i>
                                    <i className="fas fa-star star"></i>
                                    <i className="fas fa-star star"></i>
                                    <i className="fas fa-star star"></i>
                                    <i className="fas fa-star-half-alt star"></i>
                                </div>
                                <p className="current_price">₹ 8000 <br /> <span className="last_price">₹ 10000</span></p>
                                <div className="product_color">
                                    <h5>Color</h5>
                                    <div className="product_color_types">
                                        <div className="product_color_types_div"></div>
                                    </div>
                                </div>
                                <div className="product_size">
                                    <h5>Size</h5>
                                    <div className="product_size_types">
                                        <div className="product_size_types_div">6</div>
                                        <div className="product_size_types_div">7</div>
                                        <div className="product_size_types_div">8</div>
                                        <div className="product_size_types_div">9</div>
                                    </div>
                                </div>

                                <h4>Product Discription</h4>
                                <p className="product_discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempora pariatur amet animi explicabo ullam, tenetur repellendus fugiat. Tempore ut perferendis dolorum molestiae nisi quos, voluptate itaque recusandae dicta quam.</p>
                                <input type="number" className="quentity_count" placeholder="Quantity" />
                                <input type="submit" className="quantity_submitbutton" value="BUT IT NOW" />
                                <div className="wishlist">
                                    <p className="wishlist_text">Add to wishlist :</p>
                                    <i className="far fa-heart"></i>
                                </div>
                                <div className="social_share">
                                    <ul className="list_style">
                                        <li>Categories:</li>
                                        <li>Shoes,</li>
                                        <li>sneaker</li>
                                    </ul>
                                    <ul className="list_style">
                                        <li>Social Share: </li>
                                        <li><i className="fab fa-facebook"></i></li>
                                        <li><i className="fab fa-instagram"></i></li>
                                        <li><i className="fab fa-twitter"></i></li>
                                        <li><i className="fab fa-pinterest-p"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

     );
}

export default ProductShowcase;