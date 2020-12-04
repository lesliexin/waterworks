import React from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import letitout from "../assets/Letitout.svg";
import face from "../assets/face.svg";
import iaq from "../assets/IAQ.svg";
import e5 from "../assets/pic.png";


const Face = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const E5 = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 0;
`;


const IAQ = styled.div`
  display: block;
  position: absolute;
  height: 10vh;
  width: 20vw;
  margin: 35vw;
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: #000000;
`;

const PrimaryCTA = styled.div`
    height: 10vh;
    width: 20vw;
    margin: 10vw;
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
          <Face>
            <img src={face} alt="Face" />;
          </Face>,
          <IAQ>
            <Link src={iaq} alt="Infrequently Asked Questions" />;
          </IAQ>,
          <PrimaryCTA>
            <Link src={letitout} alt="Entry Link" onClick={() => {history.push("/map")}}/>
          </PrimaryCTA>,
          <E5>
          <img src={e5} alt="E5" />;
          </E5>
        </Container>
    );
};
