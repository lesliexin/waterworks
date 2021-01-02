import React from 'react';
import L from "leaflet";
import pinMarker from "../assets/pin.svg";
import scribble from "../assets/scribble.svg";
import { Marker } from "react-leaflet";

export function Pin(props) {
    const icon = new L.Icon({
        iconUrl: scribble,
        iconRetinaUrl: scribble,
        iconAnchor: [0, 0],
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(25, 25),
    });
  return (
    <Marker
      position={props.position}
      icon={icon}
      zIndexOffset={1000}
      eventHandlers={{
        click: (e) => {props.handleClick({
            story: props.story,
            location: props.location
        })}
      }}
    />
  );
};