import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Index from './components/index'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './components/products';
import SingleProduct from './components/single-product';
import About from './components/about';
import Contact from './components/contact';
import Cart from './components/cart';
import Faq from './components/faq';
import AccountProfile from './components/account/account-profile';
import AccountOrder from './components/account/account-order';
import AccountWishlist from './components/account/account-wishlist';
import AccountReview from './components/account/account-review';
import AccountAddress from './components/account/account-address';



function App() {
  return (
    
        <Router>
            <Header />
                <main>
                    <Routes>
                        <Route exact path = '/' element={<Index />} />
                        <Route path = '/products' element={<Products />} />
                        <Route path = '/single-product' element={<SingleProduct />} />
                        <Route path = '/about' element={<About />} />
                        <Route path = '/contact' element={<Contact />} />
                        <Route exact path = '/account' element={<AccountProfile />} />
                        <Route path = '/account/order' element={<AccountOrder />} />
                        <Route path = '/account/wishlist' element={<AccountWishlist />} />
                        <Route path = '/account/review' element={<AccountReview />} />
                        <Route path = '/account/address' element={<AccountAddress />} />
                        <Route path = '/cart' element={<Cart />} />
                        <Route path = '/faq' element={<Faq />} />
                    </Routes> 
                </main> 
            <Footer />
        </Router>
    
  );
}



export default App;
