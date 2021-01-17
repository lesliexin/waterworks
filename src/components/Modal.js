import React from 'react';
import styled from "styled-components";
import { ReactComponent as StreetLamp} from "../assets/streetlamp.svg";
import { ReactComponent as Close} from "../assets/close.svg";
import { device } from "../styles";
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

  @media (orientation:landscape) {
    height: 70vh;
    width: 100vh;
  }
`;

const TextContainer = styled.div`
  height: 80%;
  width: 80%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

const CloseContainer = styled(Close)`
    cursor: pointer;
    width: 10vw;
    z-index: 5000;
    position: absolute;
    top: 41.3vw;
    right: -7vw;

    @media (orientation:landscape) {
        top: 51vh;
        right: -8.2vh;
        width: 10.5vh;
    }

    &:hover {
        color: #F2874F;
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

    @media ${device.laptopL} {
        font-size: px;
        line-height: 21px;
    }

    @media ${device.tablet} {
        font-size: 14px;
        line-height: 16px;
    }
`;

const StyledStreetLamp = styled(StreetLamp)`
    height: 60vw;
    width: 80vw;
    position: absolute;
    z-index: 1500;

    @media (orientation:landscape) {
        height: 70vh;
        width: 100vh;
    }
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

    @media ${device.laptopL} {
        font-size: 18px;
        line-height: 21px;
    }

    @media ${device.tablet} {
        font-size: 14px;
        line-height: 16px;
    }
`;

export function Modal(props) {
    return (
        <Container>
            <CloseContainer onClick={props.handleClick}/>
           <TextContainer>
               <Story>{props.storyInfo.story ?? ""}</Story>
               <Location>{props.storyInfo.location ?? ""}</Location>
           </TextContainer>
           <StyledStreetLamp/>
        </Container>
    );
};