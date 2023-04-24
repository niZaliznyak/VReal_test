import { useState, useEffect, useMemo, useCallback } from "react";

import { TLocation } from "../../../types";
import { getBrowserLocation } from "../../../utils";

type TDirections = google.maps.DirectionsResult | null;

export default function useMap(initialPath?: TLocation[]) {
  const [center, setCenter] = useState<TLocation>();
  const [markers, setMarkers] = useState<TLocation[]>([]);
  const [directions, setDirections] = useState<TDirections>(null);
  const [distance, setDistance] = useState<number>(0);

  const origin = useMemo(() => markers[0], [markers]);
  const destination = useMemo(
    () => (markers.length > 1 ? markers.at(-1) : null),
    [markers]
  );
  const waypoints = useMemo(() => {
    return markers.map(({ lat, lng }) => ({
      location: new google.maps.LatLng(lat, lng)
    }));
  }, [markers]);

  const onChangeDirection = useCallback(
    (response: TDirections) => {
      if (response !== null) {
        setDirections(response);
        const route = response.routes[0];
        const distanceInMeters = Math.round(
          google.maps.geometry.spherical.computeLength(route.overview_path)
        );
        if (distanceInMeters !== distance) {
          setDistance(distanceInMeters);
        }
      }
    },
    [distance]
  );

  const addMarker = ({ latLng }: google.maps.MapMouseEvent) => {
    const newMarker = {
      id: new Date().valueOf(),
      lat: latLng!.lat(),
      lng: latLng!.lng()
    };
    setMarkers([...markers, newMarker]);
  };

  const removeMarker = (id: number) => {
    setMarkers(markers.filter((marker) => marker.id !== id));
  };

  useEffect(() => {
    if (initialPath) {
      setCenter(initialPath[0]);
      setMarkers(initialPath);
    } else {
      getBrowserLocation()
        .then(({ latitude, longitude }) => {
          const userPositionMarke: TLocation = {
            id: new Date().valueOf(),
            lat: latitude,
            lng: longitude
          };
          setCenter(userPositionMarke);
          setMarkers([userPositionMarke]);
        })
        .catch(() => {
          const initialCenter: TLocation = {
            id: new Date().valueOf(),
            lat: 48.464061,
            lng: 35.045512
          };
          setCenter(initialCenter);
          setMarkers([initialCenter]);
        });
    }
  }, [initialPath]);

  return {
    center,
    markers,
    origin,
    destination,
    directions,
    waypoints,
    distance,
    addMarker,
    removeMarker,
    onChangeDirection
  };
}
