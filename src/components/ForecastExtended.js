import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastItem from "./ForecastItem";
import transformForecast from "./../services/transformForecast";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./styles.css";

const apy_key = "4a6a6edcc689a6b293e22fcac112e0e4";
const api_url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = { forecastData: null };
  }

  componentDidMount() {
    this.updateCity(this.props.city);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.props.city) {
      this.setState({ forecastData: null });
      this.updateCity(nextProps.city);
    }
  }

  updateCity = city => {
    const url_forecast = `${api_url}?q=${city}&appid=${apy_key}`;
    fetch(url_forecast).then(data =>
      data.json().then(weather_data => {
        const forecastData = transformForecast(weather_data);
        this.setState({ forecastData });
      })
    );
  };

  renderForecastItemDays(forecastData) {
    return forecastData.map(forecast => (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}
      />
    ));
  }

  renderProgress = () => {
    return <CircularProgress size={50} style={{ alignItems: "center" }} />;
  };

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className="forecast-title">Pronóstico Extendido para {city}</h2>
        {forecastData
          ? this.renderForecastItemDays(forecastData)
          : this.renderProgress()}
      </div>
    );
  }
}

ForecastExtended.PropTypes = {
  city: PropTypes.string.isRequired
};

export default ForecastExtended;
