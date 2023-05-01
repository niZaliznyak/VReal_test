import { useState, useEffect, useMemo, useCallback } from "react";

import { TLocation } from "../../../types";
import { getBrowserLocation } from "../../../utils";

type TDirections = google.maps.DirectionsResult | null;

export default function useMap(initialPath?: TLocation[]) {
  const [center, setCenter] = useState<TLocation>();
  const [markers, setMarkers] = useState<TLocation[]>([]);
  const [directions, setDirections] = useState<TDirections>(null);
  const [distance, setDistance] = useState<number>(0);
  const [prevGeocodedWaypoints, setPrevGeocodedWaypoints] = useState<
    google.maps.DirectionsGeocodedWaypoint[]
  >([]);

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
      if (!response || !response.geocoded_waypoints) {
        return;
      }

      const { geocoded_waypoints } = response;
      const waypointsHaveChanged = geocoded_waypoints.some(
        (waypoint, index) => {
          return (
            !prevGeocodedWaypoints[index] ||
            prevGeocodedWaypoints[index].place_id !== waypoint.place_id
          );
        }
      );

      if (waypointsHaveChanged) {
        setDirections(response);
        const distanceInMeters = Math.round(
          google.maps.geometry.spherical.computeLength(
            response.routes[0].overview_path
          )
        );
        setDistance(distanceInMeters);
        setPrevGeocodedWaypoints(geocoded_waypoints);
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
