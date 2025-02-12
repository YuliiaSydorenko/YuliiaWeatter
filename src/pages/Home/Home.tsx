import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchWeather, weatherSelectors } from "store/createAppSlice";
import Button from "components/Button/Button";
import Spinner from "components/Spinner/Spinner";
import { HomeContainer, InputField, ErrorMessage, WeatherContainer, WeatherInfo } from "./styles";
import { HeaderContainer, NavLinks } from "styles/GlobalStyles";

const Home: React.FC = () => {
  const [city, setCity] = useState("");
  const dispatch = useAppDispatch();

  // 📌 Берём данные из Redux
  const weather = useAppSelector(weatherSelectors.selectWeather);
  const status = useAppSelector(weatherSelectors.selectStatus);
  const error = useAppSelector(weatherSelectors.selectError);

  const handleSearch = () => {
    if (city.trim() === "") {
      alert("Please enter a city name");
      return;
    }
    dispatch(fetchWeather(city));
  };

  return (
    <>
      <HeaderContainer>
        <h1>Weather App</h1>
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>
        </NavLinks>
      </HeaderContainer>

      <HomeContainer>
        <InputField
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <Button name="Search" onClick={handleSearch} disabled={status === "loading"} />

        {status === "loading" && <Spinner />}
        {error && <ErrorMessage>{error}</ErrorMessage>}

        {weather && (
          <WeatherContainer>
            <h2>{weather.name}, {weather.sys.country}</h2>
            <WeatherInfo>
              <img
                src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                alt="Weather icon"
              />
              <p>Temperature: {weather.main.temp}°C</p>
              <p>Condition: {weather.weather[0].description}</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Wind speed: {weather.wind.speed} m/s</p>
            </WeatherInfo>
          </WeatherContainer>
        )}
      </HomeContainer>
    </>
  );
};

export default Home;
