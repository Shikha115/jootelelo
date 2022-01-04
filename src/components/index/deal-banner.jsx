import React from 'react';
import {Link} from "react-router-dom";

function DealBanner() {
    return ( 
        <section id="dealsof_day">
            <div className="container">
                <img src="assets/images/shoe_transparent.png" className="transparent_shoe" alt='' />
                <h3 className="dealsof_day_text">Deals Of <span className="dealsof_day_text_span"> The Day </span></h3>
                <h1 className="hurry_now">HURRY</h1>
                <Link to="/products">
                    <button className="banner_button">Claim Now</button>
                </Link>
                <p className="before_deals_end">BEFORE OFFER ENDS</p>
            </div>
        </section>
     );
}

export default DealBanner;