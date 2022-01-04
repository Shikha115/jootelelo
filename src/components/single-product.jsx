import React from 'react';
import ProductSlider from './index/product-slider';
import PageBanner from './page-banner';
import ProductDetail from './single-product/product-detail';
import ProductShowcase from './single-product/product-showcase';

function SingleProduct() {
    return ( 
        <>
        <PageBanner name="Men's Shoes" />
        <ProductShowcase />
        <ProductDetail />
        <ProductSlider />
        </>
     );
}

export default SingleProduct;