import React from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import letitout from "../assets/Letitout.svg";
import face from "../assets/face.svg";
import iaq from "../assets/IAQ.svg";
import e5 from "../assets/E5.png";
import tear from "../assets/tear.svg";
import "../assets/fonts.css";



const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #14161b;
`;

const LeftEye = styled.div`
  position: absolute;
  top: 100px;
  left: 340px;
  z-index: 1;

  font-family: 'Roboto Mono', monospace;
  font-size: 21px;
  letter-spacing: 3px;
  font-style: oblique;
`;

const RightEye = styled.div`
  position: absolute;
  top: 220px;
  left: 760px;
  z-index: 1;

  font-family: 'Roboto Mono', monospace;
  font-size: 21px;
  letter-spacing: 2.5px;
  font-style: oblique;
  text-decoration: underline;
`;


const Mouth = styled.div`
  position: absolute;
  top: 320px;
  left: 0px;
  z-index: 1;

  font-family: 'Roboto Mono', monospace;
  font-size: 21px;
  letter-spacing: 2.5px;
  font-style: oblique;
  text-decoration: underline;
`;

const Face = styled.div`
  position: absolute;
  top: 90px;
  left: 0;
  width: 80vw;
  z-index: 1;
`;


const Tear = styled.div`
  position: absolute;
  top: 200px;
  left: 536px;
  width: 80vw;
  z-index: 1;
  animation: 3s ease-out 1.2s 1 forwards cry;
`;

const IAQ = styled.div`
  position: absolute;
  top: 220px;
  left: 730px;
  z-index: 1;
`;

const PrimaryCTA = styled.div`
    position: absolute;
    top: 700px;
    left: 1060px;
    z-index: 1;
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
          <text x='2' fill='#FFFFFF'>
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
          <text x='2' fill='#FFFFFF'>
            <textPath xlinkHref='#righteye' >
            INFREQUENTLY ASKED QUESTIONS
            </textPath>
          </text>
          </svg>
          </Link>
          </RightEye>

          <Tear>
            <img src={tear} alt="Tear" />
          </Tear>

          <IAQ>
            <Link src={iaq} alt="Infrequently Asked Questions" />
          </IAQ>

          <Mouth>
          <svg width='100vw' height='780px'>
            <defs>
            <path id='mouth' d='M2.45136 228.419C157.866 107.918 265.228 20.6277 537.472 58.3286C809.717 96.0295 1001.66 203.214 1153 369.5'/>
            </defs>
          <text x='2' fill='#FFFFFF'>
            <textPath xlinkHref='#mouth' >
            EMOTIONS CAN BE DIFFICULT TO NAVIGATE, BUT YOU'VE GOT GUIDANCE FROM ALL ACROSS CAMPUS.
            </textPath>
          </text>
          </svg>
          </Mouth>

          <PrimaryCTA>
            <Link src={letitout} alt="Entry Link" onClick={() => {history.push("/map")}}/>
          </PrimaryCTA>

          <E5 src={e5} alt="E5" />
        </Container>
    );
};
