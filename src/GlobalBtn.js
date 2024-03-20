import React from "react";
import styled from "styled-components";
export const Button = styled.button`
  background-color: #5d5dff;
  z-index: 1000;
  color: #fff;
  padding: 10px 20px;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 500;
  outline: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
 &:hover{
    background-color: #6969d5;
    
  }
 
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  border: none;
  color: black;
outline: none;
z-index: 1000;

  &:hover {
background-color: transparent;

    color: white;
    outline: none;
    border: none;
  }
`;
