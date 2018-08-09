import React, { Component } from "react";
import { connect } from "react-redux";
import LocationList from "./../components/LocationList";
import { setSelectedCity, setWeather } from "./../actions";
import { getWeatherCities } from "./../reducers";
import PropTypes from "prop-types";

class LocationListContainer extends Component {
  componentDidMount() {
    this.props.setWeather(this.props.cities);
  }

  handleSelectedLocation = city => {
    this.props.setCity(city);
  };

  render() {
    return (
      <LocationList
        cities={this.props.cities}
        onSelectedLocation={this.handleSelectedLocation}
      />
    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array
};

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities))
});

const mapStateToProps = state => ({ citiesWeather: getWeatherCities(state) });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationListContainer);
