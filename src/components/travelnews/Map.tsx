import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoBox,
} from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ModalType from "../../types/types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const { REACT_APP_GOOGLEMAP_KEY } = process.env;

const containerStyle = {
  width: "100%",
  height: "100%",
};
const SInfoBoxDiv = styled.div`
  background: #f2f3f5;
  width: 300px;
  height: 300px;
  a {
    text-decoration: none;
  }
`;
const SImg = styled.img`
  width: 100%;
  height: 65%;
`;
const SInfoboxTitle = styled.div`
  width: 100%;
  height: 15%;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`;
const SButtonDiv = styled.div`
  height: 15%;
  display: flex;
  justify-content: center;
`;
const SButton = styled.button`
  height: 100%;
  width: 60%;
  font-size: 1.2rem;
  background-color: white;
  cursor: pointer;
  border: 0;
  outline: 0;
  &:hover {
    background: black;
    color: white;
  }
`;

type DataType = {
  selectedData: ModalType[];
  setSelectedData: Dispatch<SetStateAction<any>>;
  markerClick: boolean;
  SetMarkerClick: Dispatch<SetStateAction<boolean>>;
  ImgClick: boolean;
  SetImgClick: Dispatch<SetStateAction<boolean>>;
};
function Map({
  selectedData,
  setSelectedData,
  markerClick,
  SetMarkerClick,
  ImgClick,
  SetImgClick,
}: DataType) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${REACT_APP_GOOGLEMAP_KEY}`,
  });
  const mapData = useSelector(
    (state: RootState) => state?.MapDataReducer?.filteredData
  );
  const options = { closeBoxURL: "", enableEventPropagation: true };

  const [center, setCenter] = useState(
    new google.maps.LatLng(mapData?.[0]?.latitude, mapData?.[0]?.longitude)
  );
  useEffect(() => {
    if (ImgClick === true) {
      setCenter(
        new google.maps.LatLng(
          Number(selectedData?.[0]?.latitude),
          Number(selectedData?.[0]?.longitude)
        )
      );
      SetImgClick(false);
    }
  }, [selectedData]);

  const handleCenter = (item: ModalType) => {
    setCenter(
      new google.maps.LatLng(Number(item.latitude), Number(item.longitude))
    );
    SetMarkerClick(true);
    setSelectedData([item]);
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
      <>
        {mapData?.map((item: ModalType) => {
          return (
            <>
              <MarkerF
                onClick={() => {
                  handleCenter(item);
                }}
                position={{
                  lat: Number(item?.latitude),
                  lng: Number(item?.longitude),
                }}
              ></MarkerF>
            </>
          );
        })}
        {markerClick ? (
          <InfoBox options={options} position={center}>
            <SInfoBoxDiv>
              <SImg src={selectedData?.[0]?.imgpath} />
              <SInfoboxTitle>{selectedData?.[0]?.title}</SInfoboxTitle>
              <Link to={`/travelspot/${selectedData?.[0]?.contentsid}`}>
                <SButtonDiv>
                  <SButton>자세히보기</SButton>
                </SButtonDiv>
              </Link>
            </SInfoBoxDiv>
          </InfoBox>
        ) : (
          <InfoBox
            options={options}
            position={
              new google.maps.LatLng(
                Number(mapData?.[0].latitude),
                Number(mapData?.[0].longitude)
              )
            }
          >
            <SInfoBoxDiv>
              <SImg src={mapData?.[0]?.imgpath} />
              <SInfoboxTitle>{mapData?.[0]?.title}</SInfoboxTitle>
              <Link to={`/travelspot/${mapData?.[0]?.contentsid}`}>
                <SButtonDiv>
                  <SButton>자세히보기</SButton>
                </SButtonDiv>
              </Link>
            </SInfoBoxDiv>
          </InfoBox>
        )}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
