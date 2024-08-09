import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SearchFilter from '../components/SearchFilter';
import FeaturedListings from '../components/FeaturedListings';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Benefits from '../components/Benefits';
// import BlogArticles from './BlogArticles';
// import ContactSection from './ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SearchFilter />
      <FeaturedListings />
      <HowItWorks />
      <Testimonials />
      <Benefits />
      {/* <BlogArticles /> */}
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
