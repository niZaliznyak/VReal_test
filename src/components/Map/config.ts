export const mapOptions: google.maps.MapOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: true,
  disableDoubleClickZoom: true,
  fullscreenControl: false,
  styles: [
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "transit.station",
      stylers: [{ visibility: "off" }]
    }
  ]
};
