export interface IMember {
  id: string;
  profile: string;
  fullName: string;
  role: {
    id: string;
    title: string;
  };
  detail?: {
    location: {
      state: string;
      city: string;
    };
    about: string;
    activeTours: string[];
    phone: string;
    address: string;
  };
}
