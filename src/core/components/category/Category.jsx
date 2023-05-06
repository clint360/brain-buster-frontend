import React from 'react';
import './category.css';
import General from '../../../assets/images/general knowledge card.svg';
import Science from '../../../assets/images/science card.svg';
import Statistic from '../../../assets/images/Statistics.svg';
import math from '../../../assets/images/maths card.svg';
import English from '../../../assets/images/Ellipse 2.svg';

function Category() {
  return (
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
                Unlock new levels in your knowledge with these history questions
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
  );
}

export default Category;
