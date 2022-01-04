import React from 'react';

function ProductDetail() {

    const openCity = (evt, cityName)=>{
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    return ( 
        <section id="tab_discription">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tab">
                            <button className="tablinks active" onClick={(e)=>openCity(e, 'London')}>Discription</button>
                            <button className="tablinks" onClick={(e)=>openCity(e, 'Paris')}>Additional information</button>
                        </div>

                        <div id="London" className="tabcontent" style={{display: 'block'}}>
                            <h4>Discription</h4>
                            <p>A pair of round toe white sneakers ,has regular styling,<br /> Lace-ups detail<br /> Textile upper<br /> Cushioned footbed<br /> Textured and patterned outsole</p>
                        </div>

                        <div id="Paris" className="tabcontent">
                            <h4>Material & Care</h4>
                            <p>Upper material: Textile<br /> Use a branded leather conditioner to clean the product/wipe with a clean, dry cloth to remove the dust</p>
                            <h4>Specifications</h4>
                            <ul className="listnone">
                                <li>Type : <span className="product_weight">Sneakers</span> </li>
                                <li>Toe Shape : <span className="product_Dimentions"></span> Round Toe </li>
                                <li>Pattern : <span className="product_Material"> Woven Design </span> </li>
                                <li>Fastening : <span className="product_weight">Lace-Ups</span> </li>
                                <li>Shoe Width : <span className="product_Dimentions"></span> Regular </li>
                                <li>Ankle Height : <span className="product_Material"> Regular </span> </li>
                                <li>Insole : <span className="product_Dimentions"></span> Comfort Insole </li>
                                <li>Sole Material : <span className="product_Material"> EVA </span> </li>
                            </ul>
                        </div>

                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default ProductDetail;