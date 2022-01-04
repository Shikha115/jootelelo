import React from 'react';

function PageBanner({name}) {
    return ( 
        <section id="banner">
            <div className="product_banner">
                <div className="container">
                    <h1 className="animate__animated animate__bounceInDown text-capitalize">{name}</h1>
                    <div className="banner_button animate__animated animate__bounceInDown">
                    </div>
                </div>
            </div>
        </section>
     );
}

export default PageBanner;