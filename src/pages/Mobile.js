import React from 'react';
import styled from "styled-components";
import "../assets/fonts.css";



const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #14161b;
  overflow: hidden;
`;


const Title = styled.div`
  position: absolute;
  width: 80vw;
  max-width: 500px;
  top: 25vh;
  left: 24px;
  z-index: 2;
  font-family: 'presicav', sans-serif;
  font-weight: 900;
  font-size: 30px;
  letter-spacing: 0px;
  color: #14161b;
  text-shadow: 0.6px 0.6px 0px  #fff, -0.6px -0.6px 0px  #fff, 0.6px -0.6px 0px  #fff, -0.6px 0.6px 0px  #fff;
`;


const Body = styled.div`
  position: absolute;
  width: 80vw;
  left: 24px;
  top: 55vh;
  padding-top: 12px;
  z-index: 1;
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
`;


const Link = styled.div`
    cursor: cell;
    padding-top: 8px;
    font-weight: 600;
    font-style: oblique;
    text-decoration: underline;
    color: #F2874F;
    &:hover {
      border: 1px solid rgb(127, 0, 0, 0);
      opacity: 80%;
    }
`;

export function Mobile() {
  return (
    <Container>
      <Title>
        we're not great at responsive design.
      </Title>
      <Body>
        Mind using a laptop or desktop?
        <Link>
           or, read more about this project
        </Link>
      </Body>
    </Container>
  );
};
