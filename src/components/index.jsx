import React from 'react';

import Slider from './index/slider'
import Banners from './index/banners';
import ProductSlider from './index/product-slider';
import ShoppingFor from './index/shopping-for';
import BestSeller from './index/best-seller';
import DealBanner from './index/deal-banner';
import OfflineStore from './index/offline-store';

function Index() {
    return ( 
        <>
            <Slider />
            <Banners />
            <ProductSlider />
            <ShoppingFor />
            <BestSeller />
            <DealBanner />
            <OfflineStore />
        </>
     );
}



export default Index;