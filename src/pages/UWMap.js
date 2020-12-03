import React from 'react';
import styled from "styled-components";
import { AttributionControl, MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Pin } from "../components";

const StyledMap = styled(MapContainer)`
  height: 100vh;
  width: 100vw;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  flex-direction: column;
  align-items: center;
`;

export function UWMap() {
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
          {pinPositions.map((pin, key) => {
            return (
              <Pin
                position={[pin.lat, pin.lng]}
              />
            );
          })}
        </StyledMap>
      </Container>
    </React.Fragment>
  );
};
