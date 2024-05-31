import React from 'react';

import CategoryList from '../components/CategoryList';
import BannerProduct from '../components/BannerProduct';
// import LandscapeCardProduct from '../components/LandscapeCardProduct';
import VerticalCardProduct from '../components/VerticalCardProduct';

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      {/* < LandscapeCardProduct category={"tshirts"} heading={"Top's trending Branded T-shirts"} />
      < LandscapeCardProduct category={"jeans"} heading={"Top's trending Branded Jeans"} /> */}
      
      <VerticalCardProduct category={"coats"} heading={"Top's trending Branded Coats"} />
      
      <VerticalCardProduct category={"hoodies"} heading={"Top's trending Branded Hoodies"} />
      
      <VerticalCardProduct category={"jackets"} heading={"Top's trending Branded Jackets"} />
      
      <VerticalCardProduct category={"jeans"} heading={"Top's trending Branded Jeans"} />
      
      <VerticalCardProduct category={"pants"} heading={"Top's trending Branded Pants"} />
      
      <VerticalCardProduct category={"shirts"} heading={"Top's trending Branded Shirts"} />
      
      <VerticalCardProduct category={"shorts"} heading={"Top's trending Branded Shorts"} />
      
      <VerticalCardProduct category={"sleepwear"} heading={"Top's trending Branded Sleepwear"} />
      
      <VerticalCardProduct category={"sweaters"} heading={"Top's trending Branded Sweaters"} />
      
      <VerticalCardProduct category={"swimwear"} heading={"Top's trending Branded Swimwear"} />
      
      <VerticalCardProduct category={"tshirts"} heading={"Top's trending Branded T-shirts"} />

      <VerticalCardProduct category={"dresses"} heading={"Top's trending Branded Dresses"} />


    </div>
  )
}

export default Home