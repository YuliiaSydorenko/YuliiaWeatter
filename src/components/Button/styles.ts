import styled from '@emotion/styled';

interface MainButtonStyledProps {
  disabled: boolean;
  $isRed: boolean;
  
}

export const MainButton = styled.button<MainButtonStyledProps>`

  border: 3px solid red;
  max-width: 200px;
  width: 100%;
  min-height: 40px;
  outline: none;
  border: none;
  padding: 20px;
  background:${({ disabled, $isRed }) => disabled ? '#bebec7' : $isRed ? '#f02e0c' : '#180dad'};
  border-radius: 15px;
  color: white;
  font-family: Lato, Geneva, Tahoma, sans - serif;
  font-size: 16px;
  cursor: pointer;
`





