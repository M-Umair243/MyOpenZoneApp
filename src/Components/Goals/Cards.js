import React from "react";
import styled from "styled-components";
import RightArrow from "../../Assets/ArrowRight.svg";
import Box1 from "../../Assets/box-1.webp";
import Box2 from "../../Assets/box-2.webp";
import Box3 from "../../Assets/box-3.webp";
const Cards = () => {
  return (
    
    <CardsWrapper>
        <div>

      <CardsText  data-aos="fade-right" data-aos-duration="2000">
        <span>More speed. Less spend</span>
        <h2>Keep projects on schedule</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <div className="content">
            <img src={RightArrow} />
            <span>Duis aute irure dolor in reprehenderit</span>
          </div>
          <div className="content">
            <img src={RightArrow} />
            <span>Excepteur sint occaecat</span>
          </div>
          <div className="content">
            <img src={RightArrow} />
            <span>Amet consectetur adipiscing elit</span>
          </div>
        </div>
      </CardsText>
      <CardsImg data-aos="fade-up" data-aos-duration="2000">
        <img src={Box1} />
      </CardsImg >
        </div>
        {/* Cards2 */}
        <div className="Cards2">

      <CardsText data-aos="fade-up" data-aos-duration="2000">
        <span>More speed. Less spend</span>
        <h2>Keep projects on schedule</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <div className="content">
            <img src={RightArrow} />
            <span>Duis aute irure dolor in reprehenderit</span>
          </div>
          <div className="content">
            <img src={RightArrow} />
            <span>Excepteur sint occaecat</span>
          </div>
          <div className="content">
            <img src={RightArrow} />
            <span>Amet consectetur adipiscing elit</span>
          </div>
        </div>
      </CardsText>
      <CardsImg data-aos="fade-right" data-aos-duration="2000">
        <img src={Box2} />
      </CardsImg>
        </div>
        {/* cards3 */}
        <div>
      <CardsText data-aos="fade-right" data-aos-duration="2000">
        <span>More speed. Less spend</span>
        <h2>Keep projects on schedule</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <div className="content">
            <img src={RightArrow} />
            <span>Duis aute irure dolor in reprehenderit</span>
          </div>
          <div className="content">
            <img src={RightArrow} />
            <span>Excepteur sint occaecat</span>
          </div>
          <div className="content">
            <img src={RightArrow} />
            <span>Amet consectetur adipiscing elit</span>
          </div>
        </div>
      </CardsText>
      <CardsImg data-aos="fade-up" data-aos-duration="2000">
        <img src={Box3} />
      </CardsImg>
        </div>
    </CardsWrapper>
  );
};

export default Cards;
const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  gap: 20px;
  @media screen and (max-width: 375px) {
     width: 100%;
     display: flex;
     flex-direction: column;
  } 
  div{
    display: flex;
   margin-top: 2rem;
   @media screen and (max-width: 375px) {
     width: 100%;
     display: flex;
     flex-direction: column;
  } 
  }
  .Cards2{
    display: flex;
    flex-direction:row-reverse;
    @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
  } 
  }
`;
const CardsText = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 375px) {
     width: 100%;
     display: flex;
     flex-direction: column;
  } 
 
  max-height: 450px;
  span {
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    color: rgb(93, 93, 255);
  }
  h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    color: rgb(217, 227, 234);
  }
  p {
    width: 500px;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    color: rgb(155, 169, 180);
    @media screen and (max-width: 375px) {
     width: 100%;
  } 
  }
  div {
    display: flex;
    flex-direction: column;
  

    .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      margin: 4px;
      img {
        width: 15px;
        height: 15px;
      }
      span {
        font-size: 18px;
        line-height: 27px;
        font-weight: 400;
        color: rgb(155, 169, 180);
      }
    }
  }
`;
const CardsImg = styled.div`
max-height: 450px;
  img {
    width: 85%;
    @media screen and (max-width: 375px) {
      width: 100%;
  } 
  }
`;
