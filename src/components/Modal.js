import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 80vh;
  width: 80vw;
  position: absolute;
  z-index: 1000;
  background-color: #0F0F0F;
`;

const Close = styled.button`
    cursor: pointer;
    height: 10vh;
    width: 10vw;
    font-size: 38px;

    &:hover {
        background-color: #EAFCFE;
    }
`;

export function Modal(props) {
    return (
        <Container>
           <Close onClick={props.handleClick}>x</Close>
           Some info....
        </Container>
    );
};