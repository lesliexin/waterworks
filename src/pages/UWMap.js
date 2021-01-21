import React, { useState, useEffect } from "react";
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
