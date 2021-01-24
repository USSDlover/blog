export interface IPlace {
  _id: string;
  title: string;
  /**
   * @deprecated
   */
  city: string;
  image_url: string;
  /**
   * @deprecated
   */
  catIds: string[];
  catId: string;
  /**
   * @deprecated
   */
  state: string;
  location: {
    city: string;
    state: string;
  };
}

export interface IPlaceDetail extends IPlace {
  description: string;
  address: string;
  images: string[];
}
