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
    min-height: 100v;
    font-family: Lato, sans-serif;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #282c34;
  color: white;
  width: 100%
`;

export const NavLinks = styled.nav`
  a {
    color: #f7f4f4;
    text-decoration: none;
    margin: 0 15px;
    font-size: 18px;
    &:hover {
      text-decoration: underline;
    }
  }
`;


function GlobalStyles() {
  return <Global styles={globalStyles} />;
}

export default GlobalStyles;

  