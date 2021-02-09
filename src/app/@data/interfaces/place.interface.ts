export interface IPlace {
  _id: string;
  title: string;
  image_url: string;
  catId: string;
  location: {
    city: string;
    state: string;
  };
}

export interface IPlaceDetail extends IPlace {
  description: string;
  address: string;
  images: Array<{id: string; url: string}>;
}
