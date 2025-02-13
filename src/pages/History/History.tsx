import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { weatherSelectors, clearHistory } from "store/slices/weatherSlice";
import { 
  HistoryContainer, 
  WeatherCard, 
  DeleteButton, 
  CardList, 
  DeleteButtonContainer, 
  WeatherCardWrapper, 
  ButtonContainer, 
  DeleteAllButton, 
  StyledH2, 
  StyledP, 
  WeatherIcon 
} from "./styles";
import { HeaderContainer, MainContent, NavLinks } from "styles/GlobalStyles";
import { WeatherHistory } from "./types";

const History: React.FC = () => {
  const dispatch = useAppDispatch();
  const weatherHistory = useAppSelector(weatherSelectors.selectHistory) as unknown as WeatherHistory[];

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
              weatherHistory.map((weather, index) => {
                const weatherKey = `${weather.name}-${index}`; // Создаем уникальный ключ
                return (
                  <WeatherCardWrapper key={weatherKey}>
                    <WeatherCard>
                      <StyledH2>{weather.name}, {weather.sys.country}</StyledH2>
                      <WeatherIcon
                        src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                        alt="Weather icon"
                      />
                      <StyledP>Temperature: {weather.main.temp}°C</StyledP>
                      <StyledP>Condition: {weather.weather[0].description}</StyledP>
                      <StyledP>Humidity: {weather.main.humidity}%</StyledP>
                      <StyledP>Wind speed: {weather.wind.speed} m/s</StyledP>
                    </WeatherCard>
                    <DeleteButtonContainer>
                      <DeleteButton onClick={() => handleDeleteCard(index)}>Delete</DeleteButton>
                    </DeleteButtonContainer>
                  </WeatherCardWrapper>
                );
              })
            ) : (
              <StyledP>No history available.</StyledP>
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
