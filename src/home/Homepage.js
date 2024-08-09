import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import SearchFilter from './SearchFilter';
import FeaturedListings from './FeaturedListings';
// import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import Benefits from './Benefits';
import BlogArticles from './BlogArticles';
// import ContactSection from './ContactSection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SearchFilter />
      <FeaturedListings />
      {/* <HowItWorks /> */}
      <Testimonials />
      <Benefits />
      <BlogArticles />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
