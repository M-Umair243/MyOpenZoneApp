import React from "react";
import styled from "styled-components";
import { Button, OutlineButton } from "../../GlobalBtn";
import video from "../../Assets/video.mp4";
import Bg from "../../Assets/bg-ellipse shape.svg";
import MainImg from "../../Assets/mainImg.webp";

const Main = () => {
  

  return (
    
    <MainWrapper data-aos="fade-up" data-aos-duration="2000">
       
      <MainText>
        <h1>Landing template for startups</h1>
        <p>
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>
        <div>
          <Button>Start free trial</Button>
          <OutlineButton className="OutlineButton">Learn more</OutlineButton>
        </div>
      </MainText>
      <div className="video">
        <img src={MainImg} alt="" />
        {/* <video src={video} muted loop autoPlay controls /> */}
      </div>
      <div className="bg">
        <img src={Bg} alt="" />
      </div>
    </MainWrapper>
  );
};

export default Main;
const MainWrapper = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 375px) {
    margin-top: 2rem;
  }
  .video {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80%;
    height: 80%;
    margin: 0 auto;
    position: relative;

    @media screen and (max-width: 375px) {
      width: 100%;
  }
    img {
      margin-top: 4rem;
      border-radius: 10px;
      width: 100%;
      height: 80%;
      z-index: 100;
    }
  }
  .bg {
    position: absolute;
    bottom: -3rem;
    z-index: -100;
    left: -4rem;
    @media screen and (max-width: 375px) {
      img {
        width: 20px;
      }
    }
  }
`;
const MainText = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  max-width: 48rem;
  margin: 0 auto;
  @media screen and (max-width: 375px) {
    margin-top: 0;
    max-width: 343px;
    margin: 0 auto;
  }
  h1 {
    font-size: 52px;
    font-weight: 800;
    line-height: 65px;
    color: rgb(217, 227, 234);
    text-align: center;
    @media screen and (max-width: 375px) {
    
      font-size: 2rem;
      font-weight: 800;
      line-height: 1.25;
    letter-spacing: -.02em;     
    }
  }
  p {
    margin-top: 12px;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    color: rgb(155, 169, 180);
    text-align: center;
    @media screen and (max-width: 375px) {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      margin: 0;    
  }
  }

  div {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 15px;
    @media screen and (max-width: 375px) {
      flex-direction: column; 
  }
    Button {
      font-size: 16px;
      font-weight: 500;
    }
    .OutlineButton {
      background-color: #33363a;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      &:hover {
        background-color: #242526;
      }
    }
  }
`;
