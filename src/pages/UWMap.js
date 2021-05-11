import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  AttributionControl,
  MapContainer,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Error, HeatPin, Modal, Pin } from "../components";
import pinLegend from "../assets/pin.svg";
import heatLegend from "../assets/legendheat.svg";
import back from "../assets/back.svg";

const StyledMap = styled(MapContainer)`
  height: 100vh;
  width: 100vw;
  cursor: crosshair !important;

  .leaflet-interactive {
    cursor: cell;
  }

  .leaflet-disabled {
    color: #14161b !important;
    opacity: 0.8;
  }

  .leaflet-control-zoom {
    left: 2vw;
    bottom: 200px;
    margin: 0;
    cursor: cell;
  }

  .leaflet-control-attribution a {
    font-size: 12px;
    color: #14161b;
    cursor: cell;
  }

  .leaflet-bar a {
    width: 48px;
    height: 48px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid white;
    color: none;
    line-height: 45px;
    font-family: "presicav", sans-serif;
    text-shadow: 0.8px 0.8px 0px #fff, -0.8px -0.8px 0px #fff,
      0.8px -0.8px 0px #fff, -0.8px 0.8px 0px #fff;
    border-radius: 0;
    cursor: cell;
    z-index: 500;

    :first-child {
      font-size: 70px;
    }
    :last-child {
      font-size: 50px;
    }

    &:hover {
      cursor: cell;
      text-shadow: 0;
      color: white;
      text-shadow: none;
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
  bottom: 3vh;
  right: 2vw;
  z-index: 500;

  a:link {
    text-decoration: none;
  }
`;

const ButtonTopLeft = styled.a`
  display: block;
  position: absolute;
  cursor: crosshair;
  top: 2vh;
  right: 2vw;
  z-index: 500;
  text-decoration: none;
`;

const ButtonText = styled.div`
  font-family: "presicav", sans-serif;
  font-size: 42px;
  line-height: 52px;
  letter-spacing: 0.06em;
  color: #14161b;
  text-shadow: 0.8px 0.8px 0px #fff, -0.8px -0.8px 0px #fff,
    0.8px -0.8px 0px #fff, -0.8px 0.8px 0px #fff;
  z-index: 500;

  &:hover {
    cursor: cell;
    text-shadow: 0;
    color: white;
    text-shadow: none;
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
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0;
  border: 1px solid white;
  z-index: 500;
  top: 3vh;
  left: 2vw;
  cursor: cell;
`;

const Legend = styled.div`
  position: absolute;

  width: auto;
  height: 112px;
  bottom: 30px;
  left: 2vw;
  padding: 16px;

  font-family: "Anonymous Pro", mono;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 32px;
  color: white;
  font-weight: 400;

  background-color: rgba(0, 0, 0, 0);
  border: 1px solid white;
  z-index: 500;
`;

const LegendItem = styled.p`
  display: flex;
  align-items: left;

  font-family: "Anonymous Pro", mono;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: white;
  font-weight: 600;
  padding-right: 32px;
`;

export function UWMap({ redirectPage }) {
  const [heatmapCoordinates, setHeatmapCoordinates] = useState([]);
  const [featuredPinData, setFeaturedPinData] = useState([]);
  const [storyInfo, setStoryInfo] = useState(undefined);
  const [error, setError] = useState(false);
  const [lastClicked, setLastClicked] = useState(-1);
  const zoom = 16.25;
  const minZoom = 14.5;
  const maxZoom = 18;
  const zoomSnap = 0;
  const zoomDelta = 0.5;
  const currentLocation = { lat: 43.471, lng: -80.543 };

  useEffect(() => {
    fetch("/heatmap")
      .then((res) => res.json())
      .then((result) => {
        setHeatmapCoordinates(result.data);
        setFeaturedPinData(result.featuredStories);
      });
  }, [setHeatmapCoordinates, setFeaturedPinData]);

  useEffect(() => {
    if (heatmapCoordinates.length === 0 && !error) {
      let timerFunc = setTimeout(() => {
        setError(true);
      }, 5000);
      return () => clearTimeout(timerFunc);
    }
  }, [heatmapCoordinates, error]);

  const handleOpenModal = (s) => {
    setStoryInfo(s);
    setLastClicked(s.id);
  };

  const handleCloseModal = () => {
    setStoryInfo(undefined);
  };

  return (
    <React.Fragment>
      {!error ? (
        <Container>
          <StyledMap
            center={currentLocation}
            zoom={zoom}
            minZoom={minZoom}
            maxZoom={maxZoom}
            zoomSnap={zoomSnap}
            zoomDelta={zoomDelta}
            zoomControl={false}
            attributionControl={false}
          >
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/lesliex/ckiax2fyd06rh19nzhq6680a8/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicXVlZW5pd3UiLCJhIjoiY2traXJ4aXluMDdhbTJua2h0NjIxbTl1aCJ9.YgI4LAGwQLeazZug-OsxWQ`}
            />
            <ZoomControl position="bottomleft" />
            <AttributionControl position="bottomright" />
            <ButtonTopLeft
              href="https://docs.google.com/document/d/1BLiDYif7sKWhhHMilXTnNVRLqB9e47-EDg3NPijdsVU/edit"
              target="_blank"
              rel="noreferrer"
            >
              <ButtonText>about</ButtonText>
            </ButtonTopLeft>
            <ButtonBottomLeft>
              {" "}
              <a
                href="https://forms.gle/hbacdKVqpG9jk7Hw9"
                target="_blank"
                rel="noreferrer"
              >
                <ButtonText>where have you cried?</ButtonText>
              </a>
            </ButtonBottomLeft>
            <RecenterButton onClick={() => redirectPage("home")}>
              <img
                src={back}
                alt="Back button"
                width="22px"
                height="22px"
                style={{ paddingRight: "2px" }}
              />
            </RecenterButton>
            <Legend>
              <i>MAP LEGEND</i>
              <LegendItem>
                <img
                  src={pinLegend}
                  alt="Pin"
                  width="22px"
                  height="24px"
                  style={{ paddingRight: "12px" }}
                />{" "}
                Featured story{" "}
              </LegendItem>
              <LegendItem>
                <img
                  src={heatLegend}
                  alt="heat spot"
                  width="20px"
                  height="22px"
                  style={{ paddingRight: "14px" }}
                />{" "}
                Places students have cried{" "}
              </LegendItem>
            </Legend>
            {heatmapCoordinates.map((pin, key) => {
              return <HeatPin position={[pin.lat, pin.lng]} key={key} />;
            })}
            {featuredPinData.map((pin, key) => {
              return (
                <Pin
                  key={key}
                  position={[pin.lat, pin.lng]}
                  isLastClicked={pin.id === lastClicked}
                  storyInfo={{
                    id: pin.id,
                    story: pin.story,
                    location: pin.location,
                    width: pin.width,
                    align: pin.align ?? "center",
                  }}
                  handleClick={handleOpenModal}
                />
              );
            })}
          </StyledMap>
          {storyInfo && (
            <Modal handleClick={handleCloseModal} storyInfo={storyInfo} />
          )}
        </Container>
      ) : (
        <Error />
      )}
    </React.Fragment>
  );
}
