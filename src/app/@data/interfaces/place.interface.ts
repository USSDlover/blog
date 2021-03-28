export interface IPlace {
  id: string;
  title: string;
  imageUrl: string;
  catId: string;
  location: {
    city: string;
    state: string;
  };
}

export interface IPlaceDetail extends IPlace {
  description: string;
  address: string;
  images: Array<string>;
  imageModified: number;
}
