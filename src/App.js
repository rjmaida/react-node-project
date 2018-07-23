import React, { Component } from 'react';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';

const cities = [
  'Mendoza,ar',
  'Bogotá,col',
  'Buenos Aires,ar',
  'Madrid,es',
  'Ciudad de México,mx'
];

class App extends Component {
  handleSelectedLocation = city => {
      console.log(`handleSelectionLocation ${city}`);
  }

  render() {
    return (

      <div className="App">
        <LocationList cities={cities} onSelectedLocation ={this.handleSelectedLocation}></LocationList>
      </div>
    );
  }
}

export default App;
