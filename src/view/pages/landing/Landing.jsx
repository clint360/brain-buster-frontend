import React from 'react';
import './landing.css';
import MainImg from '../../../assets/images/particles.svg';
import card from '../../../assets/images/step one card.svg';
import card2 from '../../../assets/images/step 2 card.svg';
import card3 from '../../../assets/images/step 3 card.svg';
import Rebase from '../../../assets/images/rebase.svg';
import Lenonovo from '../../../assets/images/lenovo.svg';
import Mtn from '../../../assets/images/mtn.svg';
import Cocacola from '../../../assets/images/cocacola.svg';
import Camaico from '../../../assets/images/camairco.svg';
/* import History from '../../../assets/images/'; */
import General from '../../../assets/images/general knowledge card.svg';
import Science from '../../../assets/images/science card.svg';
import Statistic from '../../../assets/images/Statistics.svg';
import math from '../../../assets/images/maths card.svg';
import English from '../../../assets/images/Ellipse 2.svg';
import NavBar from '../../../core/components/organisms/navbar/NavBar';
import ButtonAtom from '../../../core/components/atoms/button/ButtonAtom';

function Landing() {
  return (
    <div className="landing">
      <NavBar />
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
      <div className="landing__secondContainer" id="about" name="about">
        <div className="secondContainer__details">
          <h1>
            Want to set up a quiz? <br /> <span>It’s easy !</span>
          </h1>
        </div>
        <div className="imgcont">
          <img src={card} alt="" className="card1" />
          <img src={card2} alt="" className="card2" />
          <img src={card3} alt="" className="card3" />
        </div>
      </div>
      <div className="advertContainer">
        <h1>Trusted By</h1>
        <div className="ad__img">
          <img src={Rebase} alt="" />
          <img src={Lenonovo} alt="" />
          <img src={Mtn} alt="" />
          <img src={Cocacola} alt="" />
          <img src={Camaico} alt="" />
        </div>
      </div>
      <div className="category" id="category">
        <h1>Choose A Category</h1>
        <div className="category__cont">
          <div className="category__card1">
            <div className="categorycard__img">
              <img src={English} alt="" />
            </div>
            <div className="categorycard__text">
              <div className="innertext__cont">
                <h1>History</h1>
                <p>
                  Unlock new levels in your knowledge with these history
                  questions
                </p>
              </div>
            </div>
          </div>
          <div className="category__card2">
            <div className="categorycard__img2">
              <img src={General} alt="" />
            </div>
            <div className="categorycard__text2">
              <div className="innertext__cont2">
                <h1>General knowledge</h1>
                <p>
                  Test your general knowledge with <br /> these questions
                </p>
              </div>
            </div>
          </div>

          <div className="category__card3">
            <div className="categorycard__img3">
              <img src={Science} alt="" />
            </div>
            <div className="categorycard__text3">
              <div className="innertext__cont3">
                <h1>Science </h1>
                <p>
                  How strong is your science <br /> knowledge? Take the science
                  quiz to <br />
                  test that
                </p>
              </div>
            </div>
          </div>

          <div className="category__card2">
            <div className="categorycard__img2">
              <img src={Statistic} alt="" />
            </div>
            <div className="categorycard__text2">
              <div className="innertext__cont2">
                <h1>Statistics </h1>
                <p>
                  Test your general knowledge with <br /> these questions
                </p>
              </div>
            </div>
          </div>

          <div className="category__card3">
            <div className="categorycard__img3">
              <img src={math} alt="" />
            </div>
            <div className="categorycard__text3">
              <div className="innertext__cont3">
                <h1>Mathematics </h1>
                <p>
                  How strong is your science <br /> knowledge? Take the science
                  quiz to <br />
                  test that
                </p>
              </div>
            </div>
          </div>

          <div className="category__card1">
            <div className="categorycard__img">
              <img src={English} alt="" />
            </div>
            <div className="categorycard__text">
              <div className="innertext__cont">
                <h1>English</h1>
                <p>Some English questions to text your language skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
