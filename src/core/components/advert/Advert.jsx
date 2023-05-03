import React from 'react';
import './advert.css';
import Rebase from '../../../assets/images/rebase.svg';
import Lenonovo from '../../../assets/images/lenovo.svg';
import Mtn from '../../../assets/images/mtn.svg';
import Cocacola from '../../../assets/images/cocacola.svg';
import Camaico from '../../../assets/images/camairco.svg';

function Advert() {
  return (
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
  );
}

export default Advert;
