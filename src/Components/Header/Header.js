import React, { useState } from "react";
import styled from "styled-components";
// import './Header.css';
import Logo from "../../Assets/logo.svg";
import { Button, OutlineButton } from "../../GlobalBtn";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <Wrapper>
      <LogoDiv>
        <img src={Logo} alt="" />
      </LogoDiv>
      <BtnDiv>
        <OutlineButton
          className="OutlineButton"
          onClick={() => loginWithRedirect()}
        >
          Sign In
        </OutlineButton>
        <Button
          className="SignOutBtn"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Sign Out
        </Button>

        {/* {isAuthenticated ? <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </Button>:<OutlineButton className="OutlineButton" onClick={() => loginWithRedirect()}>
          Log In
        </OutlineButton>} */}
      </BtnDiv>
    </Wrapper>
  );
};

export default Header;
const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  z-index: 1000;
`;

// margin-top: 20px;
// display: flex;
// justify-content: space-between;
// align-content: center;
// z-index: 1000;
const LogoDiv = styled.div`
  img {
    cursor: pointer;
  }
`;
const BtnDiv = styled.div`
  display: flex;
  gap: 10px;
  .OutlineButton {
    background-color: transparent;
    border: none;
    color: #5b5dff;
    outline: none;
    border-radius: 3px;
    cursor: pointer;
    padding: 10px 20px;
    font-family: "Poppins";
    font-size: 16px;
    font-weight: 500;
    &:hover {
      background-color: transparent;
      cursor: pointer;
      color: white;
      outline: none;
      border: none;
    }
    @media screen and (max-width: 375px) {
      font-size: 12px;
    }
  }
  .SignOutBtn {
    @media screen and (max-width: 375px) {
      font-size: 12px;
    }
  }
`;
