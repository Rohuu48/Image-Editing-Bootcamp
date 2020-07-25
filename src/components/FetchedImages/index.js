import React from 'react';
import './index.css';
import InputSlider from '../Slider';
import { withRouter } from 'react-router-dom';
import { Button } from '../Button';

const FetchedImages = ({ imageBasedOnId, history }) => {
  const goToHome = () => {
    history.push('/');
  };
  return (
    <div className="outer-container">
      <div className="img-container">
        {imageBasedOnId.map((image) => {
          return (
            <div className="img-marks-container">
              <div className="img">
                <img src={image.uri} />
              </div>
              <InputSlider image={image} />
            </div>
          );
        })}
      </div>
      <Button type="primary" label="Go Back" onClick={goToHome} />
    </div>
  );
};

export default withRouter(FetchedImages);
