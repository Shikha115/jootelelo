import React from 'react';
function OfflineStore() {
    return ( 
        <section id="second_sec">
            <div className="container">
                <h3 className="heading">Running Store Offline</h3>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="shoetype_main">
                            <div className="shoe_types">
                                <div className="extra">
                                    <img src="assets/images/store_imageone.png" className="store_image img-fluid" alt='' />
                                </div>
                            </div>
                            <div className="shoe_types">
                                <div className="extra">
                                    <img src="assets/images/store_imagetwo.png" className="img-fluid" alt='' />
                                </div>
                            </div>
                            <div className="shoe_types">
                                <div className="extra">
                                    <img src="assets/images/store_imagethree.png" className="img-fluid" alt='' />
                                </div>
                            </div>
                            <div className="shoe_types">
                                <div className="extra">
                                    <img src="assets/images/store_imagefour.png" className="img-fluid" alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="shoe_stypes_right_sec">
                            <div className="main">
                                <img src="assets/images/store_imagethree.png" className="img-fluid" alt='' />
                            </div>
                            <div className="text_over">
                                <button className="shop_now">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default OfflineStore;