import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  AttributionControl,
  MapContainer,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { ErrorModal, HeatPin, Modal, Pin } from "../components";

const StyledMap = styled(MapContainer)`
  height: 100vh;
  width: 100vw;

  .leaflet-control-zoom {
    right: 2vw;
    bottom: 30px;
    margin: 0;
  }

  .leaflet-bar a {
    width: 48px;
    height: 48px;
    background-color: rgba(0,0,0,0);
    border: 1px solid white;
    color: none;
    line-height: 45px;
    font-family: 'presicav', sans-serif;
    text-shadow: 0.6px 0.6px 0px  #fff, -0.6px -0.6px 0px  #fff, 0.6px -0.6px 0px  #fff, -0.6px 0.6px 0px  #fff;
    border-radius: 0;
    :first-child {
      font-size: 70px;
    }
    :last-child {
      font-size: 50px;
    }
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  cursor: crosshair;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonBottomLeft = styled.div`
  position: absolute;
  cursor: crosshair;
  bottom: 2vh;
  left: 2vw;
  z-index: 5000;

  a:link{
    text-decoration: none;
  }

`;

const ButtonTopLeft = styled.div`
  position: absolute;
  cursor: crosshair;
  top: 2vh;
  left: 2vw;
  z-index: 5000;
`;

const ButtonText = styled.div`
  width: 80vw;
  font-family: 'presicav', sans-serif;
  font-size: 48px;
  line-height: 58px;
  letter-spacing: 0.06em;
  color: #14161b;
  text-shadow: 0.8px 0.8px 0px  #fff, -0.8px -0.8px 0px  #fff, 0.8px -0.8px 0px  #fff, -0.8px 0.8px 0px  #fff;
  z-index: 5000;

  &:hover {
    cursor: cell;
    text-shadow: 0;
  }
`;

const RecenterButton = styled.button`
  position: absolute;
  height: 50px;
  width: 50px;
  font-size: 26px;
  font-weight: 500;
  border: none;
  color: white;
  background-color: rgba(0,0,0,0);
  border-radius: 0;
  border: 1px solid white;
  z-index: 5000;
  bottom: 150px;
  right: 2vw;
`;

const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: none;
  border: 1px solid white;
  margin-left: 11px;
`;

export function UWMap() {
  const [heatmapCoordinates, setHeatmapCoordinates] = useState([]);
  const [featuredPinData, setFeaturedPinData] = useState([]);
  const [storyInfo, setStoryInfo] = useState(undefined);
  const zoom = 16.5;
  const minZoom = 15.9;
  const maxZoom = 18;
  const currentLocation = { lat: 43.471, lng: -80.543 };

  useEffect(() => {
    fetch("/heatmap")
      .then((res) => res.json())
      .then((result) => {
        setHeatmapCoordinates(result.data);
        setFeaturedPinData(result.featuredStories);
      });
  }, [setHeatmapCoordinates, setFeaturedPinData]);

  const handleOpenModal = (s) => {
    setStoryInfo(s);
  };

  const handleCloseModal = () => {
    setStoryInfo(undefined);
  };

  const history = useHistory();
  const isConnected = true;


  return (
    <React.Fragment>
    {isConnected
    ?  <Container>
        <StyledMap
          center={currentLocation}
          zoom={zoom}
          minZoom={minZoom}
          maxZoom={maxZoom}
          zoomControl={false}
          attributionControl={false}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/lesliex/ckiax2fyd06rh19nzhq6680a8/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGVzbGlleCIsImEiOiJja2k3eW1jZ2cwMGwxMzBwbGx3Y3U1bDQzIn0.UdTT7u_4ZTlr9QAUIv75qA`}
          />
          <ZoomControl position="bottomright" />
          <AttributionControl position="bottomleft" />
          <ButtonTopLeft onClick={() => {history.push("/")}}><ButtonText>info</ButtonText></ButtonTopLeft>
          <ButtonBottomLeft> <a href="https://forms.gle/hbacdKVqpG9jk7Hw9" target="_blank"><ButtonText>add your story</ButtonText></a></ButtonBottomLeft>
          <RecenterButton><Circle/></RecenterButton>
          {heatmapCoordinates.map((pin, key) => {
            return <HeatPin position={[pin.lat, pin.lng]} key={key}/>;
          })}
          {featuredPinData.map((pin, key) => {
            return (
              <Pin
                key={key}
                position={[pin.lat, pin.lng]}
                storyInfo={{
                  id: pin.id,
                  story: pin.story,
                  location: pin.location,
                  width: pin.width ?? "50%",
                  align: pin.align ?? "center"
                }}
                handleClick={handleOpenModal}
              />
            );
          })}
        </StyledMap>
        {storyInfo && (
          <Modal
            handleClick={handleCloseModal}
            storyInfo={storyInfo}
          />
        )}
      </Container>

    : <ErrorModal/>
      }
    </React.Fragment>
  );
}
