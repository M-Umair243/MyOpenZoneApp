import React from "react";
import styled from "styled-components";
import Logo from "../../Assets/logo.svg";
import Twitter from "../../Assets/svg-twitter.svg";
import GitHub from "../../Assets/svg-gitHub.svg";
import FB from "../../Assets/svg-fb.svg";
import Insta from "../../Assets/svg-insta.svg";
import Linkdin from "../../Assets/svg-linkdin.svg";
import { useAuth0 } from "@auth0/auth0-react";
const Footer = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <FooterSection>
      <FooterFirst>
        <Col1>
          <img src={Logo} />
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </Col1>

        <Col3>
          <h2>Products</h2>
          <span>Web Studio</span>
          <span>DynamicBox Flex</span>
          <span>spanrogramming Forms</span>
        </Col3>
        <Col3>
          <h2>Resources</h2>
          <span>Nostrud exercitation</span>
          <span>Visual mockups</span>
          <span>Nostrud exercitation</span>
          <span>Visual mockups</span>
          <span>Nostrud exercitation</span>
        </Col3>
        <Col3>
          <h2>Company</h2>
          <span>Consectetur adipiscing</span>
          <span>Labore et dolore</span>
          <span>Consectetur adipiscing</span>
          <span>Labore et dolore</span>
          <span>spanrogramming Forms</span>
        </Col3>
      </FooterFirst>
      <FooterSecond>
        <span>© Cruip.com. All rights reserved.</span>
        {isAuthenticated && <p>{user.name}</p>}
        <SocialIcons>
          <img src={Twitter} />
          <img src={GitHub} />
          <img src={FB} />
          <img src={Insta} />
          <img src={Linkdin} />
        </SocialIcons>
      </FooterSecond>
    </FooterSection>
  );
};

export default Footer;
const FooterSection = styled.div`
  padding: 70px 0 70px 0;
`;
const FooterFirst = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 375px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
const FooterSecond = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 375px) {
    margin-top: 2rem;
     width: 100%;
     display: flex;
  flex-direction: column-reverse;
  gap: 10px;
      }
  span,
  p {
    text-transform: capitalize;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    color: rgb(155, 169, 180);
  }
`;
const Col3 = styled.div`
  /* width: 15%;
flex: 0 0 auto; */

  h2 {
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    color: rgb(217, 227, 234);
  }
  span {
    width: 200px;
    display: block;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: rgb(155, 169, 180);
    &:hover {
      width: 200px;
      display: block;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      color: rgb(235, 241, 245);
    }
  }
`;
const Col1 = styled.div`
  /* width: 50%;
flex: 0 0 auto; */
  img {
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24x;
    color: rgb(155, 169, 180);
    max-width: 90%;
  }
`;
const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  img {
    background-color: #25282c;
    border-radius: 50px;
    width: 35px;
    height: 35px;
    transition: background-color 0.3s;
    cursor: pointer;
    &:hover {
      background-color: #5d5dff;
    }
  }
`;
