
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Product from './Components/Navbar/Products/Product'
import AOS from "aos";
import TopProducts from './Components/Navbar/TopProduct/TopProducts'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Banner from './Components/Navbar/Banner/Banner'
import Subscribe from './Components/Subscribe/Subscribe'
import Testimonial from './Components/Testimonials/Testimonial';
import Footer from './Components/Footer/Footer';
import Popup from './Components/Popup/Popup';


const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Product />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Product />
      <Testimonial />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;