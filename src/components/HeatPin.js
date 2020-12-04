import React from 'react';
import L from "leaflet";
import heatPin from "../assets/heatpin.svg";
import { Marker, Popup} from "react-leaflet";

export function HeatPin(props) {
    const icon = new L.Icon({
        iconUrl: heatPin,
        iconRetinaUrl: heatPin,
        iconAnchor: [0, 0],
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(50, 50),
    });
  return (
    <Marker position={props.position} icon={icon}>
        <Popup>
            A popup
        </Popup>
    </Marker>
  );
};