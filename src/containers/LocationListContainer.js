import React, { Component } from "react";
import { connect } from "react-redux";
import LocationList from "./../components/LocationList";
import { setSelectedCity, setWeather } from "./../actions";
import { getWeatherCities, getCity } from "./../reducers";
import PropTypes from "prop-types";

class LocationListContainer extends Component {
  componentDidMount() {
    const { setWeather, setCity, city, cities } = this.props;
    setWeather(cities);

    setCity(city);
  }

  handleSelectedLocation = city => {
    this.props.setCity(city);
  };

  render() {
    return (
      <LocationList
        cities={this.props.citiesWeather}
        onSelectedLocation={this.handleSelectedLocation}
      />
    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
  city: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities))
});

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationListContainer);
