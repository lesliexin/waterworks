import React from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: #0F0F0F;
`;

const PrimaryCTA = styled.button`
    cursor: pointer;
    height: 10vh;
    width: 20vw;
    margin: 10vw;
    font-size: 38px;

    &:hover {
        background-color: #EAFCFE;
    }
`;

function Home() {
    const history = useHistory();
    return (
        <Container>
            <PrimaryCTA onClick={() => {history.push("/map")}}>
                let it out →
            </PrimaryCTA>
        </Container>
    );
};

export default Home;