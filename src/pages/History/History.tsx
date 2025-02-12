import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { weatherSelectors, clearHistory } from "store/createAppSlice";
import { HistoryContainer, WeatherCard, DeleteButton, CardList, DeleteButtonContainer, WeatherCardWrapper, ButtonContainer, DeleteAllButton } from "./styles"; // Убедитесь, что DeleteAllButton импортирован
import { HeaderContainer, MainContent, NavLinks } from "styles/GlobalStyles"; // Экспортируем элементы из GlobalStyles
import { WeatherHistory } from "./types";

const History: React.FC = () => {
  
  const dispatch = useAppDispatch();
  const weatherHistory = useAppSelector(weatherSelectors.selectHistory) as WeatherHistory[];

  const handleDeleteAll = () => {
    dispatch(clearHistory());
  };

  const handleDeleteCard = (index: number) => {
    dispatch({
      type: "weather/removeFromHistory",
      payload: index,
    });
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

      <MainContent>
        <HistoryContainer>
          <CardList>
            {weatherHistory.length > 0 ? (
              weatherHistory.map((weather, index) => (
                <WeatherCardWrapper key={index}>
                  <WeatherCard>
                    <h2>{weather.name}, {weather.sys.country}</h2>
                    <img
                      src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                      alt="Weather icon"
                    />
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Condition: {weather.weather[0].description}</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Wind speed: {weather.wind.speed} m/s</p>
                  </WeatherCard>
                  <DeleteButtonContainer>
                    <DeleteButton onClick={() => handleDeleteCard(index)}>Delete</DeleteButton>
                  </DeleteButtonContainer>
                </WeatherCardWrapper>
              ))
            ) : (
              <p>No history available.</p>
            )}
          </CardList>

          {weatherHistory.length > 0 && (
            <ButtonContainer>
              <DeleteAllButton onClick={handleDeleteAll}>Delete All Cards</DeleteAllButton>
            </ButtonContainer>
          )}
        </HistoryContainer>
      </MainContent>
    </>
  );
};

export default History;
