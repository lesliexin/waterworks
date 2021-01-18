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

const Face = styled.div`
  position: absolute;
  margin-top: 6vh;
  height: 560px;
  width: 100vw;
  overflow: hidden;
`;

const LeftEye = styled.div`
  position: absolute;
  top: 0px;
  left: 300px;
  z-index: 1;
  font-family: 'Roboto Mono', monospace;
  font-size: 18px;
  letter-spacing: 2.8px;
  font-style: oblique;
`;

const RightEye = styled.div`
  position: absolute;
  top: 90px;
  left: 700px;
  z-index: 2;
  font-family: 'Roboto Mono', monospace;
  font-size: 18px;
  letter-spacing: 2px;
  font-style: oblique;
`;

const Underline = styled.img`
  position: absolute;
  top: 8px;
  left: -14px;
  z-index: 2;
`;


const Mouth = styled.div`
  position: absolute;
  top: 220px;
  left: 0px;
  z-index: 1;
  font-family: 'Roboto Mono', monospace;
  font-size: 18px;
  letter-spacing: 1px;
  font-style: oblique;
`;


const Tear = styled.div`
  position: absolute;
  top: 120px;
  left: 500px;
  width: 12vw;
  z-index: 1;
  animation: 3s ease-out 1.8s 1 forwards cry;
  overflow: hidden;
`;


const PrimaryCTA = styled.div`
    position: absolute;
    top: 476px;
    left: 950px;
    z-index: 2;
    font-family: 'Roboto Mono', monospace;
    font-weight: 600;
    font-size: 18px;
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
  top: 0;
  height: 100vh;
  min-height: 500px;
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
        <Face>
          <LeftEye>
          <svg width='300px'>
            <defs>
            <path id='lefteye' d='M15.3306,0.301758C13.4663,53.1349 46.8166,103.831 103.068,112.026C159.319,120.221 197.17,93.313 212.754,46.3916'/>
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
          <svg width='280px' height='180px'>
            <defs>
            <path id='righteye' d='M25.8062,0.993164C19.9115,60.6523 38.4392,116.744 106.432,145.014C174.424,173.283 248.059,136.319 284.586,85.7286'/>
            </defs>
          <text x='8' fill='#FFFFFF'>
            <textPath xlinkHref='#righteye' >
            WHAT IS THIS PROJECT ABOUT?
            </textPath>
          </text>
          </svg>
          <Underline src={underline} alt="Underline"/>
          </Link>
          </RightEye>

          <Mouth>
          <svg width='1000px' height='300px'>
            <defs>
            <path id='mouth' d='M2.32053 180.132C136.743 75.9072 273.06 15.285 515.695 57.8145C758.331 100.344 869.45 194.04 997.458 302.156'/>
            </defs>
          <text x='12' fill='#FFFFFF'>
            <textPath xlinkHref='#mouth' >
            EMOTIONS CAN BE DIFFICULT TO NAVIGATE, SO LET'S START WITH SOME LANDMARKS ACROSS CAMPUS.
            </textPath>
          </text>
          </svg>
          </Mouth>

          <PrimaryCTA>
            <Link alt="Entry Link" onClick={() => {history.push("/map")}}>
            <svg width='200px' height='90px'>
              <defs>
              <path id='enter' d='M0.924805 1C20.864 26.7386 60.897 54.5941 88.4837 61.4857C133.13 72.6391 170.769 69.0867 228.925 53.7641'/>
              </defs>
            <text x='24' fill='#F2874F'>
              <textPath xlinkHref='#enter' >
              TAKE A TOUR
              </textPath>
            </text>
            </svg>
            <Arrow src={arrow} alt="Arrow"/>
            </Link>
          </PrimaryCTA>
          </Face>

          <Tear>
            <img src={tear} alt="Tear" />
          </Tear>
          <E5 src={e5} alt="E5" />
        </Container>
    );
};
