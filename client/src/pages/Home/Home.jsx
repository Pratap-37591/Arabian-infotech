import React from "react";
import Header from "../../componets/Header/Header";
import Footer from "../../componets/footer/Footer";
import Navbar from "../../componets/Navbar/Navbar";
import '../../componets/footer/footer.css';
import ImageSlider from '../../componets/Mainform/ImageSlider'
import EnquireForm from "../../componets/Mainform/EnquireForm";
import Review from "../../componets/review/Review";
const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <ImageSlider />
      <EnquireForm />
      <Review/>
      <Footer />
    </>
  );
};

export default Home;
