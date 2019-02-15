import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import NavList from '../navList/navList';
import CitySearch from '../citySearch/citySearch';
import ShowCities from '../showCities/showCities';
const authToken = '16d4785f9c10724266053adb3c29dcfd';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {cityName: '', citiesShown: []};
    this.updateCity = this.updateCity.bind(this);
    this.makeCityRequest = this.makeCityRequest.bind(this);
  }

  updateCity(event) {
    this.setState({cityName: event.target.value});
  }

  makeCityRequest(event) {
    event.preventDefault();
    const tempCities = [...this.state.citiesShown];
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&APPID=${authToken}`;
    axios.get(url)
      .then(cityInfo => {
        const weatherData = cityInfo.data;
        const infoUsed = {
          nameOfCity: weatherData.name,
          tempInCelsius: Math.round(weatherData.main.temp - 273),
          description: weatherData.weather[0].description,
          iconAddress: `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
        }
        tempCities.push(infoUsed);
        this.setState({citiesShown: tempCities, cityName: ''});
      })
      this.props.history.push({pathname: '/show'});

  }

  render() {
    return (
        <div className="container">
            <NavList />
            <div className="jumbotron">
              <Route path="/dist" render={({match, history, location}) => <CitySearch updateCity={this.updateCity} cityName={this.state.cityName} makeCityRequest={this.makeCityRequest}/>} />
              <Route path="/show" render={() => <ShowCities allCities={this.state.citiesShown} />}/>
            </div>
        </div>
    );
  }

}
