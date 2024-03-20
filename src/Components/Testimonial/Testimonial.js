import React from "react";
import styled from "styled-components";
import Icon from "../../Assets/svg-collans.svg";

const Testimonial = (props) => {
  return (
    <TestimonialsWrapper data-aos="fade-right" data-aos-duration="3000">
      <img src={props.img} />
      <p>{props.para}</p>
      <img className="icon" src={Icon} alt="" />
      <hr />
      <div>
        <h3>{props.Designer}</h3>
        <a href="#">{props.name}</a>
      </div>
    </TestimonialsWrapper>
  );
};

export default Testimonial;
const TestimonialsWrapper = styled.div`
  flex: 0 0 1;
  width: 33.33%;
  background-color: #25282c;
  align-items: start;
  position: relative;
  @media screen and (max-width: 375px) {
    width: 100%;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-top: 24px;
    margin-left: 24px;
  }
  p {
    margin: 22px 24px 30px 24px;
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
    text-align: start;
    @media screen and (max-width: 375px) {
      font-size: 16px;
      color: rgb(155, 169, 180);
    }
  }
  hr {
    margin: 0px 24px 0 24px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 25px 0 30px 0px;
    h3 {
      font-size: 16px;
      margin-left: 24px;
      line-height: 24px;
      font-weight: 500;
      @media screen and (max-width: 375px) {
        font-size: 16px;
        color: rgb(155, 169, 180);
      }
    }
    a {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: #5d5dff;
      text-decoration: none;
    }
  }
  .icon {
    left: 40px;
    top: -15px;
    width: 25px;
    position: absolute;
  }
`;
