import React from 'react';
import Slider from '../../components/Slider/Slider';
import "./home.scss";
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
    </div>
  )
}

export default Home
