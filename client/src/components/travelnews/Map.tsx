import React, { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const { REACT_APP_GOOGLEMAP_KEY } = process.env;

const containerStyle = {
  width: "100%",
  height: "100%",
};

type DataType = {
  dataInfo: string | null | undefined;
};

function Map({ dataInfo }: DataType) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${REACT_APP_GOOGLEMAP_KEY}`,
  });

  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({
    lat: Number(33.37212380975274),
    lng: Number(126.53518867943278),
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
