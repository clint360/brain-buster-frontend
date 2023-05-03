import React from 'react';
import './aboutCard.css';
import card from '../../../assets/images/step one card.svg';
import card2 from '../../../assets/images/step 2 card.svg';
import card3 from '../../../assets/images/step 3 card.svg';

function AboutCard() {
  return (
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
  );
}

export default AboutCard;
