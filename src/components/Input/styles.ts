import styled from '@emotion/styled';

export const InputContainer = styled.div`
  display: flex;
  border: 1px solid red;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const InputElement = styled.input`

  box-sizing: border-box;
  max-width: 200px;
  width: 100%;
  height: 60px; 
  padding: 0 20px; 
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 15px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #180dad;
  }
`;


export const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
  height: 16px;
`;
