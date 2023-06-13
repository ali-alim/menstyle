import React from 'react';
import Slider from '../../components/Slider/Slider';
import "./home.scss";
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
    </div>
  )
}

export default Home
