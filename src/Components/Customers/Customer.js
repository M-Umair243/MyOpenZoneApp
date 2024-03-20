import React from "react";
import styled from "styled-components";

const Customer = (props) => {
  return (
    <Wrapper>
      <img src={props.img}></img>
      <h1>{props.title}</h1>
      <span>{props.para}</span>
    </Wrapper>
  );
};

export default Customer;
const Wrapper = styled.div`
  margin-top: 4rem;

  flex: 0 0 1;
  width: 33.33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  @media screen and (max-width: 375px) {
    margin-top: 1rem;
    flex: 0 0 1;
    width: 100%;
   gap: 10px;
  }
  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 33px;
    text-align: center;
    color: rgb(217, 227, 234);
  }
  span {
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    text-align: center;
    color: rgb(155, 169, 180);
  }
  img {
    width: 60px;
    cursor: pointer;
  }
`;
