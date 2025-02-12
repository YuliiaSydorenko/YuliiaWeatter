import styled from '@emotion/styled';

export const HistoryContainer = styled.div`
  padding: 20px;
  text-align: center;
  position: relative; 
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: #0077ff;
    font-size: 18px;
    padding: 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding-bottom: 20px; 
  position: relative; 
  z-index: 1; 
`;

export const WeatherCard = styled.div`
  background: rgba(198, 213, 242, 0.3);
  color: black;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 200px;

  @media (max-width: 768px) {
    max-width: 150px; /* Уменьшаем карточки */
    padding: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    max-width: 120px;
    font-size: 12px;
  }

`;

export const DeleteButton = styled.button`
  background: blue;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: darkred;
  }
`;

export const DeleteAllButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rosybrown;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 3;

  

  &:hover {
    background: darkred ; 
  }

  &:focus {
    outline: none; 
  }


  @media (max-width: 768px) {
    padding: 8px 16px; /* Уменьшаем кнопку */
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 12px;
  }

`;
