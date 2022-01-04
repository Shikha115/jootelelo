import React,{ useState } from 'react';
import {NavLink,Link} from "react-router-dom";
import $ from 'jquery';

function Header() {

    const cart = () =>{
      
            $('#cart_section').addClass("right_zero");
            $('.cart_overlay').css('display', 'block');
            $('body').addClass('overflow-hidden');
    }

    const search=()=>{
        $('.search_nav_input').toggleClass("search_baropen");
    }

    const [menu, setMenu] = useState([
        {
            id:'1',
            url: '/products',
            name:'Men',
            active:true
        },
        {
            id:'2',
            url: '/products',
            name:'Women',
            active:false
        },
        {
          id:'3',
          url: '/products',
          name:'Kids',
          active:false
        },
        {
          id:'4',
          url: '/products',
          name:'Sports',
          active:false
        },
        {
            id:'5',
            url: '/products',
            name:'Brands',
            active:false
          },
          {
            id:'6',
            url: '/products',
            name:'Collections',
            active:false
          },
          {
            id:'7',
            url: '/about',
            name:'About',
            active:false
          },{
            id:'8',
            url: '/contact',
            name:'Contact',
            active:false
          }
    ]);
    
    const [Signin, setSignin] = useState({
        email:'',
        password:''
    })

    const [Login, setLoginin] = useState({
        email:'',
        password:'',
        f_name:'',
        f_last:''
    })

    const register_link=(e)=>{ 
        $('.register_form').addClass("display_block");
        $('.sign_in_form').addClass("display_none");
    }

    const sign_in=(e)=>{
        e.preventDefault();
        if(!(Signin.email==='' || Signin.password==='')){
            alert('Your form has been submitted successfully!!');
        }
        else{
            alert("You can't leave any field empty");
        }
    }

    const sign_in2=(e)=>{
        e.preventDefault();
        if(!(Login.email==='' || Login.password==='' || Login.f_name==='' || Login.f_last==='')){
            alert('Your form has been submitted successfully!!');
        }
        else{
            alert("You can't leave any field empty");
        }
    }

    
    const sign_in_link=()=>{
        $('.register_form').removeClass("display_block");
        $('.sign_in_form').removeClass("display_none");
    }


    return (
      <header>
        <div className="top_sec">
            <div className="container">
                <p className="m-0">5% OFF ON PREPAID ORDERS.FREE DELIVERY. FREE RETURNS.</p>
                <div className="login_sec">
                    <Link to="/faq">Help </Link>
                    <Link to="#">Join Us </Link>
                    <Link to="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign In </Link>
                    <div className="modal login-form fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                            <p>Great to have you back!</p>
                                            <form className="sign_in_form">
                                                <input className='form-control' type="email" name="email" placeholder="Email address" value={Signin.email} onChange={(e)=>setSignin(previousState => {return { ...previousState, email: e.target.value }})} />
                                                <input className='form-control' type="password" name="password" placeholder="password" value={Signin.password} onChange={(e)=>setSignin(previousState => {return { ...previousState, password: e.target.value }})} />
                                                <Link to="#" className="d-block forgot_password"  data-bs-target="#email-modal" data-bs-toggle="modal">Forgot Password?</Link>
                                                <input type="submit" name="submit" value="Sign In" className="sign_in" onClick={(e)=>sign_in(e)} />
                                                <p className="register_now">Don't have an account? <Link to="#" className="register_link" onClick={register_link}> Register now </Link></p>
                                            </form>
                                            <form className="register_form">
                                                <input className='form-control' type="email" name="email" placeholder="Email address" value={Login.email} onChange={(e)=>setLoginin(previousState => {return { ...previousState, email: e.target.value }})} />
                                                <input className='form-control' type="password" name="password" placeholder="password" value={Login.password} onChange={(e)=>setLoginin(previousState => {return { ...previousState, password: e.target.value }})} />
                                                <input className='form-control' type="text" name="fname" placeholder="First Name" value={Login.f_name} onChange={(e)=>setLoginin(previousState => {return { ...previousState, f_name: e.target.value }})} />
                                                <input className='form-control' type="text" name="lname" placeholder="Last Name" value={Login.f_last} onChange={(e)=>setLoginin(previousState => {return { ...previousState, f_last: e.target.value }})} />
                                                <input type="submit" name="submit" value="Sign In" className="sign_in" onClick={(e)=>sign_in2(e)} />
                                                <p className="register_now">Already have an account? <Link to="#" className="sign_in_link"  onClick={sign_in_link}> sign in </Link></p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade email-form" id="email-modal" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
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
                                        <p>Enter Your Email Number To Proceed</p>
                                        <form className="sign_in_form">
                                            <input className='form-control' type="email" name="email2" placeholder="Email address" />
                                            <button className="btn sign_in" data-bs-target="#pin-modal" data-bs-toggle="modal" onClick={(e)=>e.preventDefault()}>Proceed</button>
                                        </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade pin-form" id="pin-modal" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
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
                                        <p>Enter Pin Number That You Received!!</p>
                                        <form className="sign_in_form">
                                            <input className='form-control' type="text" name="pin" placeholder="Pin Number" />
                                            <button className="btn sign_in" data-bs-target="#password-modal" data-bs-toggle="modal" onClick={(e)=>e.preventDefault()}>Proceed</button>
                                        </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade password-form" id="password-modal" tabindex="-1" aria-labelledby="exampleModalLabel4" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
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
                                        <p>Enter your new password</p>
                                        <form className="sign_in_form">
                                            <input className='form-control' type="password" name="password2" placeholder="Password" />
                                            <input className='form-control' type="password" name="password3" placeholder="Comfirm Passcord" />
                                            <button className="sign_in">Submit</button>
                                        </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <nav id="navbar_top" className="navbar navbar-expand-lg navbar-dark bg-dark nav_bar">
            <div className="container">
                <Link className="navbar-brand" to="/"><img alt='' src="assets/images/newlogo.png" className="img-fluid" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="main_nav">
                    <ul className="navbar-nav m-auto">
                          {menu.map(m=><li key={m.id} className="nav-item"><NavLink className='nav-link' key={m.id} to={m.url}>{m.name}</NavLink></li>)}
                    </ul>
                </div>
                <div className="right_icons">
                    <div className="search_input_div">
                        <input type="search" name="search" placeholder="Type to search" className="search_nav_input"/>
                    </div>
                    <i className="fas fa-search" onClick={search}></i>
                    <Link to="/account/wishlist" style={{color: 'black'}}>
                        <i className="far fa-heart"></i>
                    </Link>
                    <i className="fas fa-shopping-bag cart_icon_header" onClick={cart}></i>
                </div>
            </div>
        </nav>
      </header>
    );
}

export default Header;