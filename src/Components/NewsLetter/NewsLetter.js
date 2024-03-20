import React from "react";
import styled from "styled-components";
import { OutlineButton } from "../../GlobalBtn";
import bg from "../../Assets/svgexport-3.svg";
import NewsletterBg from "../../Assets/NewsLteerscoverBg.svg";
const NewsLetter = () => {
  return (
    <NewsLettersSection>
      <TextContainer>
        <h1>Stay in the loop</h1>
        <p>Join our newsletter to get top news before anyone else.</p>
      </TextContainer>
      <InputContainer>
        <img src={NewsletterBg} alt="" />
        <input type="text" placeholder="Your Best Email..." />
        <OutlineButton className="OutlineButton">Subscribe</OutlineButton>
      </InputContainer>
      <img src={bg} alt="" />
    </NewsLettersSection>
  );
};

export default NewsLetter;
const NewsLettersSection = styled.div`
  margin-top: 80px;
  background-color: #5d5dff;
  padding: 70px 0px 76px 48px;
  display: flex;
  gap: 76px;
  @media screen and (max-width: 375px) {
    flex-direction: column;
    width: 100%;
    gap: 0px;
    padding: 35px 30px;
    align-items: center;
  }
  img {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 60rem;
    @media screen and (max-width: 375px) {
      z-index: 1;
      top: 0rem;
      left: 7rem;
      max-width: 250px;
    }
  }
`;
const TextContainer = styled.div`
  h1 {
    font-size: 32px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    line-height: 40px;
  }
  p {
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
    color: rgb(226, 225, 255);
  }
`;
const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 375px) {
    flex-direction: column;
    width: 100%;
    margin: 0;
    align-items: center;
    justify-content: center;
  }
  img {
    top: -3.3rem;
    left: 21.5rem;
    width: 208px;
    transform: rotate(10deg);
    @media screen and (max-width: 375px) {
      top: -7.5rem;
      left: 4rem;
      width: 200px;
      transform: rotate(5deg);
    }
  }

  input {
    width: 320px;
    height: 48px;
    padding: 18px 0 18px 18px;
    background-color: #4b4acf;
    outline: none;
    border: none;
    color: #fff;
    ::placeholder {
      color: rgb(155, 169, 180);
    }
    @media screen and (max-width: 375px) {
      width: 100%;
    }
  }
  .OutlineButton {
    font-size: 16px;
    line-height: 22px;
    width: 150px;
    height: 48px;
    color: rgb(93, 93, 255);
    &:hover {
      background-color: #f3e9e9;
    }
    @media screen and (max-width: 375px) {
      width: 100%;
    }
  }
`;
