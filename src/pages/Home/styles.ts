import styled from '@emotion/styled';



export const HomeContainer = styled.div`
  padding: 20px;
  text-align: center;
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
`;

export const InputField = styled.input`
  width: 100%;
  
  max-width: 200px; 
  min-height: 60px; 
  padding: 10px;
  font-size: 16px;
  border-radius: 15px;
  border: 1px solid #ccc;
  box-sizing: border-box; 
  margin-right: 20px; 
`;


export const ErrorMessage = styled.p`
  color: red;
`;

export const WeatherInfo = styled.div`
  margin-top: 20px;
  p {
    margin: 5px 0;
  }
  img {
    width: 50px;
    height: 50px;
  }
`;
