import React from 'react';
import ProductFilter from './products/product-filter';
import ProductBanner from './products/products-banner';



function Products() {
    return ( 
        <>
         <ProductBanner />
         <ProductFilter />
        </>
     );
}



export default Products;