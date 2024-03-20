import React from "react";
import img1 from "../../Assets/svg-1.svg";
import img2 from "../../Assets/svg-2.svg";
import img3 from "../../Assets/svg-3.svg";
import img4 from "../../Assets/svg-4.svg";
import img5 from "../../Assets/svg-5.svg";
import img6 from "../../Assets/svg-5.svg";
import Customer from "./Customer";
import styled from "styled-components";

const DataApi = [
  {
    img: img1,
    title: "Instant Features",
    para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    img: img2,
    title: "Instant Features",
    para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    img: img3,
    title: "Instant Features",
    para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    img: img4,
    title: "Instant Features",
    para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    img: img5,
    title: "Instant Features",
    para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    img: img6,
    title: "Instant Features",
    para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
];
const CustomerApi = () => {
  return (
    <CustomerApiWrapper>
      <div className="text">
        <h1>The majority our customers do not understand their workflows.</h1>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Content
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
      >
        {DataApi.map((index) => (
          <Customer img={index.img} title={index.title} para={index.para} />
        ))}
      </Content>
    </CustomerApiWrapper>
  );
};

export default CustomerApi;
const CustomerApiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
 
  .text {
    max-width: 768px;
    margin: 2.5rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      margin-top: 3rem;
      text-align: center;
      font-size: 40px;
      line-height: 50px;
      font-weight: 800;
      color: rgb(217, 227, 234);
      @media screen and (max-width: 375px) {
        font-size: 2rem;
        font-weight: 800;
        line-height: 1.25;
        letter-spacing: -0.02em;
      }
    }
    p {
      margin-top: 15px;
      text-align: center;
      font-size: 20px;
      font-weight: 400;
      color: rgb(155, 169, 180);
      line-height: 30px;
      @media screen and (max-width: 375px) {
        font-size: 1.25rem;
      }
    }
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  flex-wrap: wrap;
 
`;
