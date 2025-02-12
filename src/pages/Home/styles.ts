import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  padding: 20px;
  text-align: center;
  margin-top: 80px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column; 
    gap: 15px; 
  }

  a {
    text-decoration: none;
    color: #0077ff;
    font-size: 18px;
    padding: 10px;

    &:hover {
      text-decoration: underline;
    }

    &.disabled {
      color: gray;
      pointer-events: none; 
      text-decoration: none;
      cursor: not-allowed;
    }
  }
`;
export const InputButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; 
  @media (max-width: 480px) {
    flex-direction: column; 
    gap: 15px; 
  }
`;


export const WeatherContainer = styled.div`
  background: rgba(198, 213, 242, 0.3);
  color: black;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  margin: 20px auto;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    max-width: 300px;
    padding: 10px;
  }
`;

export const InputField = styled.input`
  width: 100%;
  max-width: 200px;
  min-height: 40px; 
  padding: 10px;
  font-size: 16px;
  border-radius: 15px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-right: 10px; 

  &:focus {
    border-color: #0077ff;
    outline: none;
  }

  @media (max-width: 480px) {
    max-width: 100%; 
    margin-right: 0;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

export const WeatherInfo = styled.div`
  margin-top: 20px;

  p {
    margin: 5px 0;
    font-size: 16px;

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  img {
    width: 50px;
    height: 50px;

    @media (max-width: 480px) {
      width: 40px;
      height: 40px;
    }
  }
`;
