import styled from '@emotion/styled';

export const HistoryContainer = styled.div`
  padding: 20px;
  text-align: center;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const CardList = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding-bottom: 20px;
`;

export const WeatherCardWrapper = styled.div`
  background: rgba(198, 213, 242, 0.3);
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  max-height: 400px;
  padding-bottom: 20px;
  position: relative;
  padding-bottom: 60px; /* Добавляем место для кнопки */
`;

export const WeatherCard = styled.div`
  color: black;
  padding: 20px;
  border-radius: 10px;
  background: transparent;
  box-shadow: none;
  text-align: center;
  max-width: 200px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 150px;
    padding: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    max-width: 120px;
    font-size: 12px;
  }
`;

export const DeleteButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DeleteButton = styled.button`
  background: blue;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background: darkred;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export const DeleteAllButton = styled.button`
  background: blue;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 3;

  &:hover {
    background: darkred;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 12px;
  }
`;
