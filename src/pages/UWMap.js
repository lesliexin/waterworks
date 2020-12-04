import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { AttributionControl, MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { HeatPin, Modal, Pin } from "../components";

const StyledMap = styled(MapContainer)`
  height: 100vh;
  width: 100vw;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function UWMap() {
  const [heatmapCoordinates, setHeatmapCoordinates] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const zoom = 16.5;
  const minZoom = 16.3;
  const maxZoom = 18;
  const currentLocation = { lat: 43.471, lng: -80.543 };

  const pinPositions = [
    {
      lat: 43.4723,
      lng: -80.5449,
    },
    {
      lat: 43.47,
      lng: -80.5443,
    },
    {
      lat: 43.4721,
      lng: -80.541,
    },
    {
      lat: 43.47,
      lng: -80.541,
    },
  ];

  useEffect(() => {
    fetch('/heatmap').then(res => res.json()).then(result => {
      setHeatmapCoordinates(result.data);
    });
  }, [setHeatmapCoordinates]);

  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <React.Fragment>
      <Container>
        <StyledMap
          center={currentLocation}
          zoom={zoom}
          minZoom={minZoom}
          maxZoom={maxZoom}
          zoomControl={false}
          attributionControl={false}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/lesliex/cki7youlz31xg19scmnvtid8r/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGVzbGlleCIsImEiOiJja2k3eW1jZ2cwMGwxMzBwbGx3Y3U1bDQzIn0.UdTT7u_4ZTlr9QAUIv75qA`}
          />
          <ZoomControl position="bottomright" />
          <AttributionControl position="bottomleft" />
          {heatmapCoordinates.map((pin, key) => {
            return (
              <HeatPin
                position={[pin.lat, pin.lng]}
              />
            );
          })}
          {pinPositions.map((pin, key) => {
            return (
              <Pin
                position={[pin.lat, pin.lng]}
                handleClick={handleOpenModal}
              />
            );
          })}
        </StyledMap>
        {showModal && <Modal handleClick={handleCloseModal}/>}
      </Container>
    </React.Fragment>
  );
};
