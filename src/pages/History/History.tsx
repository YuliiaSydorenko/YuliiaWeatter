import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { weatherSelectors, clearHistory } from "store/createAppSlice";
import Button from "components/Button/Button";
import { HistoryContainer, WeatherCard, DeleteButton, CardList } from "./styles";
import { HeaderContainer, NavLinks } from "styles/GlobalStyles";

const History: React.FC = () => {
  const dispatch = useAppDispatch();
  const weatherHistory = useAppSelector(weatherSelectors.selectHistory);

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

      <HistoryContainer>
        <CardList>
          {weatherHistory.length > 0 ? (
            weatherHistory.map((weather, index) => (
              <WeatherCard key={index}>
                <p>{weather.city}</p>
                <p>{weather.temp}°C</p>
                <DeleteButton onClick={() => handleDeleteCard(index)}>
                  Delete
                </DeleteButton>
              </WeatherCard>
            ))
          ) : (
            <p>No history available.</p>
          )}
        </CardList>

        {weatherHistory.length > 0 && (
          <Button name="Delete All Cards" onClick={handleDeleteAll} />
        )}
      </HistoryContainer>
    </>
  );
};

export default History;
