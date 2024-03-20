import React from "react";
import Testimonial from "./Testimonial";
import Img1 from "../../Assets/testimonial-01.webp";
import Img2 from "../../Assets/testimonial-02.webp";
import Img3 from "../../Assets/testimonial-03.webp";
import Icon from "../../Assets/svg-collans.svg";
import styled from "styled-components";

const DataApi = [
  {
    img: Img1,
    icon: { Icon },
    para: "— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
    Designer: "Anastasia Dan",
    name:"— UX Board"
  },
  {
    img: Img2,
    icon: { Icon },
    para: "— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
    Designer: "Anastasia Dan",
    name:"— UX Board"
  },
  {
    img: Img3,
    icon: { Icon },
    para: "— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
    Designer: "Anastasia Dan",
    name:"— UX Board"
  },
];

const TestimonialApi = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <h2>Don't take our word for it</h2>
        <p>
          Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper
          quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.
        </p>
      </TextWrapper>
      <ApiWrapper>
        {DataApi.map((index) => (
          <Testimonial
            img={index.img}
            para={index.para}
            Designer={index.Designer}
            name={index.name}
          />
        ))}
      </ApiWrapper>
    </Wrapper>
  );
};

export default TestimonialApi;
const Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 375px) {
      width: 100%;
  } 
  
`;
const ApiWrapper = styled.div`
margin-top: 4rem;
  display: flex;
  flex-direction: row;
  gap: 25px;
  @media screen and (max-width: 375px) {
    margin-top: 2rem;
  display: flex;
width: 100%;
flex-direction: column;
  } 
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;

  h2 {
    text-align: center;
    font-size: 40px;
    font-weight: 800;
    line-height: 50px;
    color: rgb(217, 227, 234);
    @media screen and (max-width: 375px) {
      font-weight: 800;
    line-height: 1.25;
    letter-spacing: -.02em;
    font-size: 2rem;
    color:rgb(155, 169, 180) ;
    
  } 
  }
  p{
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
    @media screen and (max-width: 375px) {
      margin-top: 10px;
      font-size: 1.25rem;
      color:rgb(155, 169, 180) ;
  } 
  }
`;
