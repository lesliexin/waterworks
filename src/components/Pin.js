import React from 'react';
import L from "leaflet";
import styled from "styled-components";
import pinMarker from "../assets/pin.svg";
import { Marker, Popup} from "react-leaflet";

const StyledMarker = styled(Marker)`
  .leaflet-marker-pane {
    z-index: 1000;
  }
`;

export function Pin(props) {
    const icon = new L.Icon({
        iconUrl: pinMarker,
        iconRetinaUrl: pinMarker,
        iconAnchor: [0, 0],
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(25, 25),
    });
  return (
    <StyledMarker
      position={props.position}
      icon={icon}
      zIndexOffset={1000}
      eventHandlers={{
        click: (e) => {
          console.log('marker clicked', e)
        },
      }}
    >
        <Popup>
            A popup
        </Popup>
    </StyledMarker>
  );
};