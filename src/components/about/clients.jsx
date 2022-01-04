import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



function Clients() {
    return ( 
        <section id="client_slider">
        <div class="container">
            <h3 class="heading">We have ties with</h3>
            <div class="client_slider_main">
                <OwlCarousel className="client owl-theme" items='5' smartSpeed='1000' autoplay loop margin={10} dots={false}>
                    <div class="item">
                        <div class="client_image_div mx-auto">
                            <img src="assets/images/client_logo_one.webp" class="img-fluid" alt='' />
                        </div>
                    </div>
                    <div class="item">
                        <div class="client_image_div mx-auto">
                            <img src="assets/images/client_logo_two.webp" class="img-fluid" alt='' />
                        </div>
                    </div>
                    <div class="item">
                        <div class="client_image_div mx-auto">
                            <img src="assets/images/client_logo_three.webp" class="img-fluid" alt='' />
                        </div>
                    </div>
                    <div class="item">
                        <div class="client_image_div mx-auto">
                            <img src="assets/images/client_logo_four.webp" class="img-fluid" alt='' />
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    </section>
     );
}

export default Clients;