import React from 'react';
import styled from "styled-components";
import { AttributionControl, MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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

function UWMap() {
  const zoom = 16;
  const minZoom = 15;
  const maxZoom = 18;
  const currentLocation = { lat: 43.4723, lng: -80.5449 };

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
        </StyledMap>
      </Container>
    </React.Fragment>
  );
};

export default UWMap;