import transformForecast from "./../services/transformForecast";

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const apy_key = "4a6a6edcc689a6b293e22fcac112e0e4";
const api_url = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
  return dispatch => {
    const url_forecast = `${api_url}?q=${payload}&appid=${apy_key}`;

    // Activar en el estado un indicae de busqueda de datos
    dispatch(setCity(payload));

    return fetch(url_forecast).then(data =>
      data.json().then(weather_data => {
        const forecastData = transformForecast(weather_data);

        //Modificar el estado con el resultado de la promise (fetch)
        dispatch(setForecastData({ city: payload, forecastData }));
      })
    );
  };
};
