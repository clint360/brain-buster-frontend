import React from 'react';
import './landing.css';
import MainImg from '../../../assets/images/particles.svg';
import AboutCard from '../../../core/components/AboutCard/AboutCard';
import ButtonAtom from '../../../core/components/atoms/button/ButtonAtom';
import Advert from '../../../core/components/advert/Advert';
import Category from '../../../core/components/category/Category';
import Navbar from '../../../core/components/organisms/navbar/NavBar';
import Footer from '../../../core/components/Footer/Footer';

function Landing() {
  return (
    <div className="landing">
      <Navbar />
      <div className="firstcontainer">
        <div className="leftdetails">
          <div className="leftdetails__div1">
            Challenge your mind, Unlock your brains full
            <span> potential!</span>
          </div>
          <div className="leftdetails__divp">
            <p>
              With Brain Buster you will discover new <br />
              facts and expand your horizons!
            </p>
          </div>
          <div className="started">
            <ButtonAtom titles="Get Started" margin="0px 0px 5px 0px" />
          </div>
        </div>
        <div className="rightdetails">
          <div className="rightdetails__img">
            <img src={MainImg} alt="freinds" />
          </div>
        </div>
      </div>
      <div className="donate__cont">
        <div className="active__user">
          <h2>NUMBER OF ACTIVE BRAIN_BUSTER USERS</h2>
          <p>20,000+</p>
        </div>
        <div className="donation">
          <h5>Donate</h5>
          <i className="fa-solid fa-circle-dollar-to-slot" />
        </div>
      </div>
      <AboutCard />
      <Advert />
      <Category />
      <Footer />
    </div>
  );
}

export default Landing;
