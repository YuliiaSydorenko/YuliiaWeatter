import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { weatherSelectors, clearHistory } from "store/createAppSlice";
import Button from "components/Button/Button";
import { HistoryContainer, WeatherCard, DeleteButton, CardList } from "./styles";

const History: React.FC = () => {
  const dispatch = useAppDispatch();
  const weatherHistory = useAppSelector(weatherSelectors.selectHistory);

  return (
    <HistoryContainer>
      <h1>Weather app</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
      </nav>
      <CardList>
        {weatherHistory.map((weather, index) => (
          <WeatherCard key={index}>
            <p>{weather.city}</p>
            <p>{weather.temp}°C</p>
            <DeleteButton onClick={() => dispatch(clearHistory())}>
              Delete
            </DeleteButton>
          </WeatherCard>
        ))}
      </CardList>
      {weatherHistory.length > 0 && (
        <Button name="Delete All Cards" onClick={() => dispatch(clearHistory())} />
      )}
    </HistoryContainer>
  );
};

export default History;
