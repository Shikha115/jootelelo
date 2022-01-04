import React from 'react';
function ShoppingFor() {
    return ( 
        <section id="shoping_for">
            <div className="container">
                <h3 className="heading">WHO ARE YOU SHOPPING FOR?</h3>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="shoping_for men">
                            <h4>MEN</h4>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="shoping_for women">
                            <h4>WOMEN</h4>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="shoping_for kids">
                            <h4>KIDS</h4>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
     );
}

export default ShoppingFor;