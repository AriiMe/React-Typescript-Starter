/** @format */

import React, { FC } from "react";
import { WeatherData, dailyStructure } from "../store/types";
import { Container, Row, Col, Table } from "react-bootstrap";
interface WeatherProps {
  data: WeatherData;
}


/** Weather data display */
const Weather: FC<WeatherProps> = ({ data }) => {

  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const fahrenheitFeels = (data.main.feels_like * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(1);
  const celsiusFeels = (data.main.feels_like - 273.15).toFixed(1);

  console.log(data);
 

  return (
    <Container>
      <h1>{data.name}</h1>
      <h2>{data.weather[0].description}</h2>
      <h3>{data.main.pressure}</h3>
      <h3>{data.wind.speed}</h3>
      <h3>{data.main.humidity}</h3>
      <p>{celsius}</p>
      <p>{celsiusFeels}</p>
      <p>{fahrenheit}</p>
      <p>{fahrenheitFeels}</p>

      <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt="weather icon" style={{width: "200px"}} />
    </Container>
  );
};
export default Weather;
