import { GoogleMap, Marker } from "@react-google-maps/api";

import useMap from "./hooks/useMap";
import { mapOptions } from "./config";

type TProps = {};

export default function Map(props: TProps) {
  const { center, markers, addMarker, removeMarker } = useMap();

  return (
    <GoogleMap
      mapContainerStyle={{
        width: "100%",
        height: "100%"
      }}
      center={center}
      zoom={16}
      onDblClick={addMarker}
      options={mapOptions}
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={marker}
          onDblClick={() => removeMarker(marker.id)}
        />
      ))}
    </GoogleMap>
  );
}
