import { useNavigate } from "react-router-dom";

import { LayoutProps } from "./types";
import {
  LayoutWrapper,
  Header,
  HeaderLogoContainer,
  HeaderLogo,
  NavContainer,
  Main,
  Footer,
  StyledNavLink,
  StyledLink,
  FooterNavContainer,
} from "./styles";
import Logo from "../../../assets/logo.jpg";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToHomePage = () => navigate("/");

  return (
    <LayoutWrapper>
      <Header>
        <HeaderLogoContainer onClick={goToHomePage}>
          <HeaderLogo src={Logo} />
        </HeaderLogoContainer>
        <NavContainer>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/users"
          >
            Users
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/counter"
          >
            Counter
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/feedback"
          >
            Feedback
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/lesson18"
          >
            Lesson18
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/advice"
          >
            Advice
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <HeaderLogoContainer onClick={goToHomePage}>
          <HeaderLogo src={Logo} />
        </HeaderLogoContainer>
        <FooterNavContainer>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/users">Users</StyledLink>
        </FooterNavContainer>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
