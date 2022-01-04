import React,{ useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function ProductBanner() {

    const [responsive,setResponsive]=useState({
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        960: {
            items: 4
        }
    });

    const [productOwl, setproductOwl] = useState([
        {
            img:'assets/images/jootiefilter.jpg',
            name:'Jootie'
        },
        {
            img:'assets/images/menfilter_image.jpg',
            name:'Mens'
        },
        {
            img:'assets/images/womenfilter.png',
            name:'Womens'
        },
        {
            img:'assets/images/kidsfilter.png',
            name:'Kids'
        },
        {
            img:'assets/images/hikkingfilter.png',
            name:'Hikking'
        }
    ])

    return ( 
        <section id="products_banner">
            <div className="container filter_slider_container">
                <div className="col-sm-6 m-auto text-center">
                    <h3 className="heading">Collections</h3>
                    <div className="products_banner_main">
                        <OwlCarousel className="owl_two owl-theme" items='4' smartSpeed='1000' autoplay loop margin={15} dots={false} responsive={responsive}>
                            {productOwl.map(item=>{
                                return(
                                    <div className="item">
                                        <div className="products_filter_slider">
                                            <div className="extra">
                                                <img src={item.img} className="img-fluid" alt='' />
                                                <span>{item.name}</span>
                                            </div>
                                        </div>
                                    </div>  
                                )
                            })}                        
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default ProductBanner;