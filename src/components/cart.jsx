import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import CartItem from './cart/cart_item';
import PageBanner from './page-banner';


function Cart() {

    const [CartSet, setCartSet] = useState([
        {
            id:'1',
            img:'assets/images/bestseller_shoe_ninesix.webp',
            category:'Shirt',
            product:'Cotton T-shirt',
            price:'44.00',
            quantity:'1'
        },
        {
            id:'2',
            img:'assets/images/bestseller_shoe_five.webp',
            category:'Shirt',
            product:'Cotton T-shirt',
            price:'44.00',
            quantity:'3'
        },
        {
            id:'3',
            img:'assets/images/bestseller_shoe_six.webp',
            category:'Shirt',
            product:'Cotton T-shirt',
            price:'44.00',
            quantity:'5'
        }
    ])
    
    

    return ( 
        <>
            <PageBanner name='Your Shoping Cart' />

            <section className="cartmain">
                <div className="container">
                    <div className="card">
                        <div className="row">
                            <div className="col-md-8 cart">
                                <div className="title border-bottom">
                                    <div className="row">
                                        <div className="col">
                                            <h4><b>Shopping Cart</b></h4>
                                        </div>
                                        <div className="col align-self-center text-right text-muted">{CartSet.length} items</div>
                                    </div>
                                </div>

                                {CartSet.map(item=><CartItem quantity={item.quantity} key={item.id} img={item.img} category={item.category} product={item.product} price={item.price} />)}

                                <div className="back-to-shop d-flex align-items-center justify-content-between mt-3">
                                    <Link to="/product" className='text-decoration-none text-black'>
                                        <i className="fas fa-long-arrow-alt-left"></i>
                                        <span>Back to shop</span>
                                    </Link>
                                    <button className="btn check_out" data-bs-toggle="modal" data-bs-target="#address-option">View Address</button>
                                </div>

                            </div>
                            <div className="col-md-4 summary">
                                <div>
                                    <h5><b>Summary</b></h5>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col">ITEMS {CartSet.length}</div>
                                    <div className="col text-right">&euro; 132.00</div>
                                </div>
                                <form id="shipping">
                                    <p>SHIPPING</p> <select>
                                        <option className="text-muted">Standard-Delivery- &euro;5.00</option>
                                    </select>
                                    <p>GIVE CODE</p> <input id="code" placeholder="Enter your code"  />
                                    <div className="">
                                        <input type="button" value="APPLY" className="code_apply"  />
                                    </div>
                                </form>
                                <div className="total_price row" style={{borderTop: '1px solid rgba(0,0,0,.1)',padding: '2vh 0'}}>
                                    <div className="col">TOTAL PRICE</div>
                                    <div className="col text-right">&euro; 137.00</div>
                                </div>
                                <div className="extra_center mt-2">
                                    <button className="view_cart">checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="modal fade" id="address-option" tabindex="-1" aria-labelledby="address-option" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="text-end">
                            <button type="button" className="btn-close model_close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-sm-12">
                                <div className="model_logo_div">
                                    <img alt='' src="assets/images/newlogo.png" className="model_logo" />
                                </div>
                                <div className="model_signin">
                                    <p>Select An Address</p>
                                   <form action="">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="address1" />
                                            <label class="form-check-label" for="address1">
                                                <p className="m-0">A-223, First Floor
                                                Gali No-9, Near Sharma General Store, Buradi
                                                NEW DELHI, Delhi 110084India</p>
                                                <p className="m-0">Phone no - 9876565676</p>
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="address2" />
                                            <label class="form-check-label" for="address2">
                                                 <p className="m-0">A-223, First Floor
                                                Gali No-9, Near Sharma General Store, Buradi
                                                NEW DELHI, Delhi 110084India</p>
                                                <p className="m-0">Phone no - 9876565676</p>
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="address3" />
                                            <label class="form-check-label" for="address3">
                                                <p className="m-0">A-223, First Floor
                                                Gali No-9, Near Sharma General Store, Buradi
                                                NEW DELHI, Delhi 110084India</p>
                                                <p className="m-0">Phone no - 9876565676</p>
                                            </label>
                                        </div>
                                        <div class="form-check m-0">
                                            <input class="form-check-input" type="checkbox" value="" id="address4" />
                                            <label class="form-check-label" for="address4">
                                                 <p className="m-0">A-223, First Floor
                                                Gali No-9, Near Sharma General Store, Buradi
                                                NEW DELHI, Delhi 110084India</p>
                                                <p className="m-0">Phone no - 9876565676</p>
                                            </label>
                                        </div>
                                   </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
    
export default Cart;