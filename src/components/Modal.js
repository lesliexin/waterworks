import React from "react";
import styled from "styled-components";
import { ReactComponent as Close } from "../assets/close.svg";
import { device } from "../styles";
import "../assets/fonts.css";

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 1000;
  background-color: #000000;
  opacity: 0.5;
`;

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

  @media (orientation: landscape) {
    height: 70vh;
    width: 100vh;
  }
`;

const TextContainer = styled.div`
  height: 80%;
  width: 80%;
  z-index: 1100;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.align};
`;

const CloseContainer = styled(Close)`
  cursor: cell;
  width: 10vw;
  z-index: 1200;
  position: absolute;
  top: 41.3vw;
  right: -7vw;

  @media (orientation: landscape) {
    top: 51vh;
    right: -8.2vh;
    width: 10.5vh;
  }

  &:hover {
    color: #f2874f;
  }
`;

const StoryContainer = styled.div`
  width: ${(props) => {
    if (props.width) {
      return props.width;
    } else {
      if (props.id <= 16) {
        return "50%";
      } else {
        return "100%";
      }
    }
  }};
  margin-bottom: 8%;
`;

const Story = styled.span`
  font-family: "Anonymous Pro", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
  margin-bottom: 8%;
  width: 100%;

  @media ${device.laptopL} {
    font-size: 18px;
    line-height: 28px;
  }

  @media ${device.tablet} {
    font-size: 14px;
    line-height: 20px;
  }
`;

const StoryLink = styled.a`
  font-family: "Anonymous Pro", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
  margin-bottom: 8%;
  text-decoration: underline;
  width: 100%;
  position: relative;
  z-index: 1500;

  &:hover {
    cursor: cell;
  }

  @media ${device.laptopL} {
    font-size: 18px;
    line-height: 28px;
  }

  @media ${device.tablet} {
    font-size: 14px;
    line-height: 20px;
  }
`;

const Location = styled.p`
  font-family: "Anonymous Pro", monospace;
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  color: #f2874f;
  margin: 0;
  width: ${(props) => (props.width ? props.width : "50%")};

  @media ${device.laptopL} {
    font-size: 18px;
    line-height: 22px;
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
  z-index: 900;

  @media (orientation: landscape) {
    height: 70vh;
    width: 100vh;
  }
`;

export function Modal({ storyInfo, handleClick }) {
  const getIllustrationId = () => {
    if (storyInfo.id <= 16) {
      return storyInfo.id;
    } else {
      if (storyInfo.id % 5 === 0) {
        return "generic_1";
      } else if (storyInfo.id % 5 === 1) {
        return "generic_2";
      } else if (storyInfo.id % 5 === 2) {
        return "generic_3";
      } else if (storyInfo.id % 5 === 3) {
        return "generic_4";
      } else if (storyInfo.id % 5 === 4) {
        return "generic_5";
      }
    }
  };

  return (
    <>
      <Background onClick={handleClick} />
      <Container>
        <CloseContainer onClick={handleClick} />
        <TextContainer align={storyInfo.align}>
          <StoryContainer width={storyInfo.width} id={storyInfo.id}>
            {storyInfo.story.map((storySection) => {
              if (typeof storySection === "string") {
                return <Story>{storySection ?? ""}</Story>;
              }
              return (
                <StoryLink href={storySection.link} target="_blank">
                  {storySection.text ?? ""}
                </StoryLink>
              );
            })}
          </StoryContainer>
          <Location width={storyInfo.width}>
            {storyInfo.location ?? ""}
          </Location>
        </TextContainer>
        {storyInfo.id && (
          <StyledIllustration
            src={`/illustrations/${getIllustrationId()}.svg`}
          />
        )}
      </Container>
    </>
  );
}
