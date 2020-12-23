import React from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import underline from "../assets/Underline.svg";
import arrow from "../assets/Arrow.svg";
import e5 from "../assets/E5.png";
import tear from "../assets/tear.svg";
import "../assets/fonts.css";



const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #14161b;
  overflow: hidden;
`;

const LeftEye = styled.div`
  position: absolute;
  top: 100px;
  left: 360px;
  z-index: 1;

  font-family: 'Roboto Mono', monospace;
  font-size: 20px;
  letter-spacing: 3px;
  font-style: oblique;
`;

const RightEye = styled.div`
  position: absolute;
  top: 210px;
  left: 780px;
  z-index: 2;

  font-family: 'Roboto Mono', monospace;
  font-size: 20px;
  letter-spacing: 2.5px;
  font-style: oblique;
  text-decoration: 'underline';
`;

const Underline = styled.img`
  position: absolute;
  top: 8px;
  left: -14px;
  z-index: 2;
`;


const Mouth = styled.div`
  position: absolute;
  top: 340px;
  left: 0px;
  z-index: 1;

  font-family: 'Roboto Mono', monospace;
  font-size: 20px;
  letter-spacing: 2px;
  font-style: oblique;
`;


const Tear = styled.div`
  position: absolute;
  top: 200px;
  left: 580px;
  width: 12vw;
  z-index: 1;
  animation: 3s ease-out 1.8s 1 forwards cry;
  overflow: hidden;
`;


const PrimaryCTA = styled.div`
    position: absolute;
    top: 680px;
    left: 1140px;
    z-index: 2;

    font-family: 'Roboto Mono', monospace;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 2px;
    font-style: oblique;
`;

const Arrow = styled.img`
  position: absolute;
  top: 10px;
  left: 6px;
  z-index: 2;
`;

const E5 = styled.img`
  position: absolute;
  right: 0;
  top: 5vh;
  height: 90vh;
  z-index: 0;
  opacity: 50%;
`;


const Link = styled.div`
    cursor: cell;

    &:hover {
      border: 1px solid rgb(127, 0, 0, 0);
      opacity: 80%;

    }
`;


export function Home() {
    const history = useHistory();
    return (
        <Container>
          <LeftEye>
          <svg width='300px'>
            <defs>
            <path id='lefteye' d='M17.1304,0.302002C14.9749,61.3861 53.5336,120 118.569,129.474C183.605,138.949 227.368,107.839 245.386,53.5898'/>
            </defs>
          <text x='10' fill='#FFFFFF'>
            <textPath xlinkHref='#lefteye' >
            WELCOME TO WATERWORKS
            </textPath>
          </text>
          </svg>
          </LeftEye>

          <RightEye>
          <Link>
          <svg width='340px' height='200px'>
            <defs>
            <path id='righteye' d='M29.9248,1C23.1095,69.9761 44.5307,134.828 123.141,167.512C201.752,200.197 286.887,157.46 329.118,98.9685'/>
            </defs>
          <text x='10' fill='#FFFFFF'>
            <textPath xlinkHref='#righteye' >
            INFREQUENTLY ASKED QUESTIONS
            </textPath>
          </text>
          </svg>
          <Underline src={underline} alt="Underline"/>
          </Link>
          </RightEye>

          <Tear>
            <img src={tear} alt="Tear" />
          </Tear>

          <Mouth>
          <svg width='1300px' height='480px'>
            <defs>
            <path id='mouth' d='M2.45136 208.419C157.866 87.9182 315.472 17.8286 596 67C876.528 116.171 1005 224.5 1153 349.5'/>
            </defs>
          <text x='12' fill='#FFFFFF'>
            <textPath xlinkHref='#mouth' >
            EMOTIONS CAN BE DIFFICULT TO NAVIGATE, BUT HERE ARE SOME LANDMARKS FROM ALL ACROSS CAMPUS.
            </textPath>
          </text>
          </svg>
          </Mouth>

          <PrimaryCTA>
            <Link alt="Entry Link" onClick={() => {history.push("/map")}}>
            <svg width='200px' height='90px'>
              <defs>
              <path id='enter' d='M2.5 0.5C25.5 30.5 71.6784 62.9674 103.5 71C155 84 198.417 79.8595 265.5 62'/>
              </defs>
            <text x='20' fill='#F2874F'>
              <textPath xlinkHref='#enter' >
              TAKE A TOUR
              </textPath>
            </text>
            </svg>
            <Arrow src={arrow} alt="Arrow"/>
            </Link>
          </PrimaryCTA>

          <E5 src={e5} alt="E5" />
        </Container>
    );
};
