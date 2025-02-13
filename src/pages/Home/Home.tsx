import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchWeather, weatherSelectors } from "store/slices/weatherSlice";
import Button from "components/Button/Button";
import Spinner from "components/Spinner/Spinner";
import {
  HomeContainer,
  InputField,
  ErrorMessage,
  WeatherContainer,
  WeatherInfo,
  InputButtonWrapper,
  StyledH2,
  StyledP,
  WeatherIcon,
} from "./styles";
import { HeaderContainer, NavLinks } from "styles/GlobalStyles";

const Home: React.FC = () => {
  const [city, setCity] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const dispatch = useAppDispatch();

  const weather = useAppSelector(weatherSelectors.selectWeather);
  const status = useAppSelector(weatherSelectors.selectStatus);
  const error = useAppSelector(weatherSelectors.selectError);

  const handleSearch = () => {
    if (city.trim() === "") {
      alert("Please enter a city name");
      return;
    }
    dispatch(fetchWeather(city));
    setCity(""); 
    setHasSearched(true); 
  };

  return (
    <>
      <HeaderContainer>
        <h1>Weather App</h1>
        <NavLinks>
          <Link to="/">Home</Link>
          <Link
            to="/history"
            className={!hasSearched ? "disabled" : ""}
            onClick={(e) => {
              if (!hasSearched) {
                e.preventDefault();
                alert("Please enter a city name before accessing history.");
              }
            }}
          >
            History
          </Link>
        </NavLinks>
      </HeaderContainer>

      <HomeContainer>
        <InputButtonWrapper>
          <InputField
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
          />
          <Button
            name="Search"
            onClick={handleSearch}
            disabled={status === "loading"}
          />
        </InputButtonWrapper>

        {status === "loading" && <Spinner />}
        {error && <ErrorMessage>{error}</ErrorMessage>}

        {weather && (
          <WeatherContainer>
            <StyledH2>
              {weather.name}, {weather.sys.country}
            </StyledH2>
            <WeatherInfo>
              <WeatherIcon
                src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                alt="Weather icon"
              />
              <StyledP>Temperature: {weather.main.temp}°C</StyledP>
              <StyledP>Condition: {weather.weather[0].description}</StyledP>
              <StyledP>Humidity: {weather.main.humidity}%</StyledP>
              <StyledP>Wind speed: {weather.wind.speed} m/s</StyledP>
            </WeatherInfo>
          </WeatherContainer>
        )}
      </HomeContainer>
    </>
  );
};

export default Home;
