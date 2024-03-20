import React from "react";
import styled from "styled-components";
import Cards from "./Cards";

const Goals = () => {
  return (
    <GoalWrapper>
      <Text>
        <span>Reach goals that matter</span>
        <h2>One product, unlimited solutions</h2>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit laborum — semper quis lectus nulla.
        </p>
      </Text>
      
      <Cards/> 
    </GoalWrapper>
  );
};

export default Goals;
const GoalWrapper = styled.div`
  display: flex;
  flex-direction: column;
margin-bottom: 5rem;
`;
const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  @media screen and (max-width: 375px) {
    width: 100%;
  }
  span {
    margin-top: 4rem;
    border: none;
    outline: none;
    background-color: #bbf7d0;
    color: #16a382;
    border-radius: 50px;
    padding: 8px 15px;
    font-size: 14px;
    font-weight: 600;
  }
  h2 {
    margin-top: 12px;
    font-size: 40px;
    font-weight: 800;
    line-height: 50px;
    color: rgb(217, 227, 234);
    @media screen and (max-width: 375px) {
      text-align: center;
      font-size: 2rem;
      font-weight: 800;
    line-height: 1.25;
    letter-spacing: -.02em;
  }
  }
  p {
    margin-top: 12px;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    color: rgb(155, 169, 180);
    @media screen and (max-width: 375px) {
      font-size: 1.25rem;
  } 
  }
`;