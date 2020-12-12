export interface IModal {
  open: boolean;
  onClose: () => void;
  info: {
    description: string;
    info: {
      address: string;
      workingHours: string;
      phone: string;
    };
    placeName: string;
    placePhotoUrl: string[];
    _id: string;
  };
}
