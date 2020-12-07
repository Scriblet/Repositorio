/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ImgPresentation from '../img/Imagem lucas presetation.png';

class Presentation extends React.Component {
  render() {
    return (
      <div className="presentation">
        <img className="presentation-img" src={ImgPresentation} alt="Imagem de Lucas Nonato" />
        <div className="presentation-container">
          <h1 className="presentation-text">Eu sou Lucas Nonato</h1>
          <h1 className="presentation-text">
            Desenvolvedor Web <br />
            <span className="presentation-text-frontend">Front-End</span>
          </h1>
          <h1 className="presentation-text">UX Designer</h1>
        </div>
      </div>
    );
  }
}
export default Presentation;
