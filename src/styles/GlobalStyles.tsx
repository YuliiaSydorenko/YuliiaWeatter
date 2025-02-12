import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import bgImage from '../assets/sunrays.jpg';

const globalStyles = css`
  @import url(https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic);

  * {
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    background: url('/src/assets/sunrays.jpg') no-repeat center center fixed;
    background-size: cover;
    min-width: 320px;
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column; 
    width: 100%; 
    min-height: 100v;
    font-family: Lato, sans-serif;
   
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgba(21, 34, 58, 0.2);
  color: white;
  width: 100%;
  position: relative; 
  left: 0;
  top: 0;
  margin: 0; 
  box-sizing: border-box; 


  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    h1 {
      font-size: 18px;
    }
  }
`;


export const NavLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  a {
    color: #f7f4f4;
    text-decoration: none;
    margin: 0 15px;
    font-size: 18px;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      margin: 0 8px;
    }
  }
`;


function GlobalStyles() {
  return <Global styles={globalStyles} />;
}

export default GlobalStyles;

  