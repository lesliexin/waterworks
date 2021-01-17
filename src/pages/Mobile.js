import React from 'react';
import { useHistory } from "react-router-dom";
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
  top: 680px;
  left: 1140px;
  z-index: 2;
  font-family: 'presicav', sans-serif;
  font-weight: 900;
  font-size: 42px;
  letter-spacing: 0px;
  color: #ffffff;
`;


export function Mobile() {
      const history = useHistory();
  return (
    <Container>
    <Title>
    we're not great at responsive design.
    </Title>
    </Container>
  );
};
