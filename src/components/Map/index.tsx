import { useEffect } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsService,
  DirectionsRenderer
} from "@react-google-maps/api";

import useMap from "./hooks/useMap";
import { mapOptions } from "./config";
import { TLocation } from "../../types";
import { formatDistance } from "../../utils";

type TProps = {
  initialMarkers?: TLocation[];
  onCourseChage?: (markers: TLocation[], length: string) => void;
  onlyView?: boolean;
};

export default function Map({
  initialMarkers,
  onCourseChage,
  onlyView
}: TProps) {
  const {
    center,
    markers,
    origin,
    destination,
    waypoints,
    directions,
    distance,
    addMarker,
    removeMarker,
    onChangeDirection
  } = useMap(initialMarkers);

  useEffect(() => {
    onCourseChage && onCourseChage(markers, formatDistance(distance));
  }, [distance, markers, onCourseChage]);

  return (
    <GoogleMap
      mapContainerStyle={{
        width: "100%",
        height: "100%"
      }}
      center={center}
      zoom={16}
      onDblClick={onlyView ? undefined : addMarker}
      options={mapOptions}
    >
      {origin && destination && (
        <DirectionsService
          options={{
            destination,
            origin,
            waypoints,
            travelMode: google.maps.TravelMode.WALKING
          }}
          callback={onChangeDirection}
        />
      )}
      {directions && (
        <DirectionsRenderer
          directions={directions}
          options={{
            preserveViewport: false,
            suppressMarkers: true
          }}
        />
      )}
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={marker}
          onDblClick={() => {
            !onlyView && removeMarker(marker.id);
          }}
        />
      ))}
    </GoogleMap>
  );
}
