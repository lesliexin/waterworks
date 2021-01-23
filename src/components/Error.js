import React from 'react';
import styled from "styled-components";
import "../assets/fonts.css";


const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 500;
    background-color: #14161b;
    opacity: 0.8;
`;

const TextContainer = styled.div`
    top: 25vh;
    left: 10vw;
    width: 80vw;
    position: absolute;
`;

const Reload = styled.div`
    position: absolute;
    top: 320px;
    font-family: 'Anonymous Pro', monospace;
    font-style: italic;
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
    color: #F2874F;
    margin: 0;
    text-decoration: underline;

    &:hover {
        opacity: 0.9;
        cursor: cell;
      }
`;

const Title = styled.p`
    position: absolute;
    width: 80vw;
    z-index: 2;
    font-family: 'presicav', sans-serif;
    font-weight: 600;
    font-size: 64px;
    letter-spacing: 0px;
    color: #14161b;
    text-shadow: 1px 1px 0px  #fff, -1px -1px 0px  #fff, 1px -1px 0px  #fff, -1px 1px 0px  #fff;
`;

const Body = styled.p`
    position: absolute;
    width: 320px;
    font-family: 'Anonymous Pro', monospace;
    font-weight: normal;
    font-size: 20px;
    line-height: 32px;
    text-align: left;
    color: #FFFFFF;
    top: 180px;
`;

export function Error(){
  function refreshPage() {
    window.location.reload(false);
  }
    return (
        <Container>
        <TextContainer>
               <Title> *sob* </Title>
               <Body> Uh oh, it looks like we can't quite connect to our site right now...</Body>
               <Reload onClick={refreshPage}> Reload? </Reload>
        </TextContainer>
        </Container>
    );
};
