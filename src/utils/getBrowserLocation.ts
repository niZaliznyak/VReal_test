interface ICoordinates {
  latitude: number;
  longitude: number;
}

export const getBrowserLocation = (): Promise<ICoordinates> => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        () => {
          reject();
        }
      );
    } else {
      reject();
    }
  });
};
