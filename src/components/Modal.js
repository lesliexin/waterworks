import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 80vh;
  width: 80vw;
  position: absolute;
  z-index: 1000;
  background-color: #F3F3F3;
  display: flex;
  flex-direction: column;
`;

const Close = styled.button`
    cursor: pointer;
    height: 10vh;
    width: 10vw;
    font-size: 38px;
    align-self: flex-end;

    &:hover {
        background-color: #EAFCFE;
    }
`;

const Story = styled.p`
    font-size: 18px;
    font-family: Roboto;
    font-weight: normal;
    line-height: 24px;
    text-align: left;
    color: ##14161b;
    margin: 0;
`;

const Location = styled.p`
    font-size: 16px;
    font-family: Roboto;
    font-weight: normal;
    line-height: 20px;
    text-align: left;
    color: ##14161b;
    margin: 0;
`;

export function Modal(props) {
    return (
        <Container>
           <Close onClick={props.handleClick}>x</Close>
            <Story>{props.storyInfo.story ?? ""}</Story>
            <Location>{props.storyInfo.location ?? ""}</Location>
        </Container>
    );
};