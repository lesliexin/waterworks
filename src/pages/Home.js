import React from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import letitout from "../assets/Letitout.svg";
import face from "../assets/face.svg";
import iaq from "../assets/IAQ.svg";
import e5 from "../assets/E5.png";
import tear from "../assets/tear.svg";



const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #14161b
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



const Link = styled.img`
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
            <img src={face} alt="Face" />
          </Face>
          <Tear>
            <img src={tear} alt="Tear" />
          </Tear>
          <IAQ>
            <Link src={iaq} alt="Infrequently Asked Questions" />
          </IAQ>
          <PrimaryCTA>
            <Link src={letitout} alt="Entry Link" onClick={() => {history.push("/map")}}/>
          </PrimaryCTA>
          <E5 src={e5} alt="E5" />
        </Container>
    );
};
