import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

function ProductFilter() {

    const MainList = () => {
        $(".main_list").click(function() {
            $(this).children('.sublist').slideToggle("slow");
        });
    };

    const [FilterCategory, setFilterCategory] = useState([
        {
            main:'collection',
            list:{
   
                sub:'Mid Waterproof',
                sub:'Brogue shoe',
                sub:'Firecamp',
                sub:'Forclaz'
            }
        },
        {
            main:'Shoes',
            
            list:{
                main:'Shoes',
                sub1:'Mid Waterproof',
                sub2:'Brogue shoe',
                sub3:'Firecamp',
                sub4:'Forclaz'
            }
        },
        {
            main:'Boots',            
            list:{
            
                sub1:'Mid Waterproof',
                sub2:'Brogue shoe',
                sub3:'Firecamp',
                sub4:'Forclaz'
            }
        },
        {
            main:'Climbing',
            list:{
   
                sub1:'Mid Waterproof',
                sub2:'Brogue shoe',
                sub3:'Firecamp',
                sub4:'Forclaz'
            }
        }
    ])

    const handleOnclick = () => {        
            var parent = document.querySelector(".range-slider");
            if (!parent) return;
        
            var rangeS = parent.querySelectorAll("input[type=range]"),
                numberS = parent.querySelectorAll("input[type=number]");
        
            rangeS.forEach(function(el) {
                el.oninput = function() {
                    var slide1 = parseFloat(rangeS[0].value),
                        slide2 = parseFloat(rangeS[1].value);
        
                    if (slide1 > slide2) {
                        [slide1, slide2] = [slide2, slide1];
                        // var tmp = slide2;
                        // slide2 = slide1;
                        // slide1 = tmp;
                    }
        
                    numberS[0].value = slide1;
                    numberS[1].value = slide2;
                }
            });
        
            numberS.forEach(function(el) {
                el.oninput = function() {
                    var number1 = parseFloat(numberS[0].value),
                        number2 = parseFloat(numberS[1].value);
        
                    if (number1 > number2) {
                        var tmp = number1;
                        numberS[0].value = number2;
                        numberS[1].value = tmp;
                    }
        
                    rangeS[0].value = number1;
                    rangeS[1].value = number2;
        
                }
            });
    }

    const [FilterMapping, setFilterMapping] = useState([
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
    

    useEffect(() => {
        MainList();
        handleOnclick();
      }, []);
   
    return ( 
        <section id="main_filtersec">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="left_filter_div">
                            <div className="category backgroun_filter_property">
                                <h5 className="filter_heading">Category</h5>
                                <ul className="filter_lilst">
                                    {FilterCategory.map(item=>{
                                        return(
                                            <li className="main_list">
                                            <p> {item.main} <i className="fas fa-plus"></i></p>
                                            <ul className="sublist">
                                            <li><Link to="#">Mid Waterproof</Link></li>
                                            <li><Link to="#">Brogue shoe</Link></li>
                                            <li><Link to="#">Firecamp</Link></li>
                                            <li><Link to="#">Forclaz</Link></li>
                                         </ul>
                                         </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="Color_filter backgroun_filter_property">
                                <h5 className="filter_heading">Shop My Color</h5>
                                <ul className="color_filter_list">
                                    <li>
                                        <div className="filter_color filter_color_red">
                                        </div>
                                        <p>Red</p>
                                    </li>
                                    <li>
                                        <div className="filter_color filter_color_balck">
                                        </div>
                                        <p>Black</p>
                                    </li>
                                    <li>
                                        <div className="filter_color filter_color_silver">
                                        </div>
                                        <p>Silver</p>
                                    </li>
                                    <li>
                                        <div className="filter_color filter_color_white">
                                        </div>
                                        <p>White</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="size_filter backgroun_filter_property">
                                <h5 className="filter_heading">Shop By Size</h5>
                                <div className="size_filter_main">
                                    <div className="size_filter_box">6</div>
                                    <div className="size_filter_box">7</div>
                                    <div className="size_filter_box">8</div>
                                    <div className="size_filter_box">9</div>
                                </div>
                            </div>
                            <div className="price_filter backgroun_filter_property">
                                <h5 className="filter_heading">price filter</h5>
                                <div className="range-slider">
                                    <span class="d-flex justify-content-evenly">
                                        <input type="number" value="0" min="0" max="5000" />
                                        <input type="number" value="4000" min="0" max="5000" />
                                    </span>

                                    <label htmlfor="price input">Price ₹ : </label>
                                    <input value="0" min="0" max="5000" step="10" type="range" />
                                    <input value="4000" min="0" max="5000" step="10" type="range" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-9 pe-0">
                        <div className="filter_container_top">
                            <div className="style_icons">
                                <i className="fas fa-th"></i>
                                <i className="fas fa-th-list"></i>
                            </div>
                            <div className="short_by">
                                <label htmlfor="Shorted by">Shorted by</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Latest</option>
                                    <option value="1">Top Rated</option>
                                    <option value="2">Price: Low to High</option>
                                    <option value="3">Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                        <div className="right_filter_div">
                            {FilterMapping.map(item=>{
                                return(
                                    <div className="filter_right_container">
                                        <div className="best_seller_container">
                                            <div className="seller_container_main">
                                                <img src={item.img1} className="img-fluid" alt='' />
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
                                                            <Link to="/single-product">
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
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}


export default ProductFilter;