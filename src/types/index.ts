export type TPath = {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  length: string;
  favorite?: boolean;
  markers: TLocation[];
};

export type TLocation = {
  id: number;
  lat: number;
  lng: number;
};
