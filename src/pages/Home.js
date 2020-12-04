import React from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import letitout from "../assets/Letitout.svg";
import face from "../assets/face.svg";
import iaq from "../assets/IAQ.svg";
import e5 from "../assets/E5.png";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #000000;
`;


const Face = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  width: 80vw;
  z-index: 1;
`;

const IAQ = styled.div`
  position: absolute;
  top: 200px;
  left: 700px;
  z-index: 1;
`;

const PrimaryCTA = styled.div`
    position: absolute;
    top: 720px;
    left: 1070px;
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
    cursor: pointer;
    &:hover {

    }
`;


export function Home() {
    const history = useHistory();
    return (
        <Container>
          // <Face>
          //   <img src={face} alt="Face" />
          // </Face>,
          <IAQ>
            <Link src={iaq} alt="Infrequently Asked Questions" />
          </IAQ>,
          <PrimaryCTA>
            <Link src={letitout} alt="Entry Link" onClick={() => {history.push("/map")}}/>
          </PrimaryCTA>,
          <E5 src={e5} alt="E5" />
        </Container>
    );
};
