import styled from "@emotion/styled";

export const HistoryContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

export const WeatherCard = styled.div`
  background: rgba(198, 213, 242, 0.6);
  color: black;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 200px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  p {
    margin: 5px 0;
  }
`;

export const DeleteButton = styled.button`
  background: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: darkred;
  }
`;
