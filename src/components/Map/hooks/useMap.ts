import { useState, useEffect } from "react";
import { getBrowserLocation } from "../../../utils/getBrowserLocation";

type TLocation = {
  id: number;
  lat: number;
  lng: number;
};

export default function useMap() {
  const [center, setCenter] = useState<TLocation>();
  const [markers, setMarkers] = useState<TLocation[]>([]);

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
  }, []);

  return {
    center,
    markers,
    addMarker,
    removeMarker
  };
}
