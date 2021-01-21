import React from 'react';
import styled from "styled-components";
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
  justify-content: ${props => (props.align)};
`;

const CloseContainer = styled(Close)`
    cursor: cell;
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
    font-family: 'Anonymous Pro', monospace;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 32px;
    color: #FFFFFF;
    margin-bottom: 8%;
    width: ${props => (props.width)};

    @media ${device.laptopL} {
        font-size: 18px;
        line-height: 26px;
    }

    @media ${device.tablet} {
        font-size: 16px;
        line-height: 20px;
    }
`;

const Location = styled.p`
    font-family: 'Anonymous Pro', monospace;
    font-style: italic;
    font-weight: bold;
    font-size: 22px;
    line-height: 32px;
    text-align: left;
    color: #F2874F;
    margin: 0;
    width: ${props => (props.width ? props.width : '50%')};

    @media ${device.laptopL} {
        font-size: 18px;
        line-height: 26px;
    }

    @media ${device.tablet} {
        font-size: 16px;
        line-height: 20px;
    }
`;

const StyledIllustration = styled.img`
    height: 60vw;
    width: 80vw;
    position: absolute;
    z-index: 1500;

    @media (orientation:landscape) {
        height: 70vh;
        width: 100vh;
    }
`;

export function Modal({ storyInfo, handleClick }) {

    return (
        <Container>
            <CloseContainer onClick={handleClick}/>
           <TextContainer align={storyInfo.align}>
               <Story width={storyInfo.width}>{storyInfo.story ?? ""}</Story>
               <Location width={storyInfo.width}>{storyInfo.location ?? ""}</Location>
           </TextContainer>
           {storyInfo.id && <StyledIllustration src={`/illustrations/${storyInfo.id}.svg`}/>}
        </Container>
    );
};
