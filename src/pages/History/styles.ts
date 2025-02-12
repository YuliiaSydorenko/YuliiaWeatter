import styled from '@emotion/styled';

export const HistoryContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const WeatherCard = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  text-align: left;
  img {
    width: 50px;
    height: 50px;
  }
`;

export const DeleteButton = styled.button`
  padding: 5px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
`;
