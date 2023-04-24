export function formatDistance(distanceInMeters: number): string {
  if (distanceInMeters >= 1000) {
    const distanceInKm = (distanceInMeters / 1000).toFixed(2);
    return `${distanceInKm} км`;
  } else {
    return `${distanceInMeters} м`;
  }
}
