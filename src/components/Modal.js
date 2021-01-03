import React from 'react';
import styled from "styled-components";
import { ReactComponent as StreetLamp} from "../assets/streetlamp.svg";
import "../assets/fonts.css";

const Container = styled.div`
  height: 60vw;
  width: 80vw;
  position: absolute;
  z-index: 1000;
  background-color: #000000;
  opacity: 0.8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  height: 80%;
  width: 80%;
  z-index: 1000;
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
    font-family: Anonymous Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
    margin-bottom: 60px;
    width: 50%;
`;

const StyledStreetLamp = styled(StreetLamp)`
    height: 60vw;
    width: 80vw;
    position: absolute;
    z-index: 1500;
`;

const Location = styled.p`
    font-family: Anonymous Pro;
    font-style: italic;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    text-align: left;
    color: #F2874F;
    margin: 0;
`;

export function Modal(props) {
    return (
        <Container>
           {/* <Close onClick={props.handleClick}>x</Close> */}
           <TextContainer>
               <Story>{props.storyInfo.story ?? ""}</Story>
               <Location>{props.storyInfo.location ?? ""}</Location>
           </TextContainer>
           <StyledStreetLamp/>
        </Container>
    );
};