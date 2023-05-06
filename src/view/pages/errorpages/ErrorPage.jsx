import React from 'react';
import './ErrorPage.css';
import error from '../../../assets/images/404image.svg';
import errortext from '../../../assets/images/404text.svg';

function ErrorPage() {
  return (
    <div>
      <div className="whole">
        <div className="notfoundcontainer">
          <div className="rightdiv">
            <div className="imageonleft">
              <img src={error} className="404image" alt="404image" />
            </div>
          </div>
          <div className="rightsidediv">
            <div className="404text">
              <img src={errortext} className="fourofourtext" alt="" />
            </div>
            <div className="four-o-fourmessage">
              <p className="error-messagee">
                The page you are trying to access does not exist
              </p>
            </div>
            <div className="reload-button">
              <button className="reload-page" type="button">
                Reload page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
