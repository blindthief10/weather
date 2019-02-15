import React, { Component } from 'react';
import colorTemperatures from '../../config/config';

export default class ShowCities extends Component {

  defineColor(temp) {
    return colorTemperatures.find(obj => temp >= obj.limitTemp).color;
  }

  render() {
    return (
      <div className="container-fluid d-flex flex-lg-row flex-md-column justify-content-start flex-wrap">
      {this.props.allCities.map((info, index) => {
        return (
          <div style={{background: this.defineColor(info.tempInCelsius)}} key={index} className="card w-xl-25 w-md-100 my-md-4 mx-lg-4">
            <div className="card-header">
              <h4 className="title text-center text-dark">{info.nameOfCity}</h4>
            </div>
            <div className="card-body">
              <p className="lead">Temperature is {info.tempInCelsius}<sup> o</sup>c</p>
            </div>
            <div className="card-footer">
              <p className="lead text-dark">{info.description} <img src={info.iconAddress} /></p>
            </div>
          </div>
        )
      })}

      </div>
    )
  }
}
