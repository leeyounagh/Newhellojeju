import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ModalType from "../../types/types";

const { REACT_APP_GOOGLEMAP_KEY } = process.env;

const containerStyle = {
  width: "100%",
  height: "100%",
};

function Map() {
  const mapData = useSelector(
    (state: RootState) => state.MapDataReducer.filteredData
  );
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${REACT_APP_GOOGLEMAP_KEY}`,
  });

  const [center, setCenter] = useState({
    lat: Number(33.37212380975274),
    lng: Number(126.53518867943278),
  });
  console.log(mapData, "mapdata");

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
      <>
        {mapData?.map((item: ModalType) => {
          return (
            <>
              <MarkerF
                position={{
                  lat: Number(item.latitude),
                  lng: Number(item.longitude),
                }}
              ></MarkerF>
              ;
            </>
          );
        })}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
