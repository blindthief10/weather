import React, { Component } from 'react';

export default class CitySearch extends Component {
  render() {
    return (
      <form onSubmit={this.props.makeCityRequest}>
        <div className="input-group mb-3 input-group-lg">
          <div className="input-group-prepend">
            <span className="input-group-text">Type a city</span>
          </div>
          <input type="text" className="form-control" onChange={this.props.updateCity} value={this.props.cityName}/>
          <button type="submit" className="btn btn-lg btn-primary btn-block">Search for a weather in a city</button>
        </div>
      </form>
    )
  }
}
