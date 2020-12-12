export enum Types {
  GETPLACESSAGA = 'GETPLACESSAGA',
  GET_FIVE_PLACES = 'GET_FIVE_PLACES',
  CHECKPLACE = 'CHECKPLACE',
  GETPLACESREVIEW = 'GETPLACESREVIEWS',
  ADDPLACESREVIEW = 'ADDPLACESREVIEW',
  SHARE_PLACE_SAGA = 'SHARE_PLACE',
  ADDPLACERATING = 'ADDPLACERATING',
}

export interface ICommon {
  rating?: number;
  _id?: string;
}

export interface IPlace extends ICommon {
  description: string;
  geometry: number[];
  info: {
    address: string;
    workingHours: string;
    phone: string;
  };
  latitude?: number;
  longitude?: number;
  placeName: string;
  placePhotoUrl: string[];
  placeUrl?: string;
  secrecy?: number;
  visitor?: number;
  votesNumber?: number;
  votesSum?: number;
  category?: string;
}

export interface ModalState {
  description: string;
  info: {
    address: string;
    workingHours: string;
    phone: string;
  };
  placeName: string;
  placePhotoUrl: string[];
  _id: string;
  geometry?: number[];
  secrecy?: number;
}

export interface PlacesState extends ICommon {
  places: IPlace[];
  message: string;
  visited: string[];
  checkPlaceModalOpened: boolean;
  modalCheckPlaceInfo: string;
  isOpenPlaceMark: boolean;
  modalClass: string;
  modalPlaceMarkInfo: ModalState;
}

export interface PlacesAction {
  places: IPlace[];
  visited: string[];
}

export interface FivePlacesState extends ICommon {
  fivePlaces: ModalState[];
}

export interface ShareState {
  shareStatus: string;
}

export interface IReview {
  review?: string;
  pecularities?: string;
  id?: string;
  _id?: string;
  author?: string;
}

export interface ReviewsState {
  reviews: IReview[];
}

interface GetPlacesListSaga {
  type: typeof Types.GETPLACESSAGA;
}

export interface AddPlaceRatingSaga {
  type: typeof Types.ADDPLACERATING;
  id: string;
  stars: number;
}

export interface CheckPlaceSaga {
  type: typeof Types.CHECKPLACE;
  latitude: number;
  longitude: number;
  user: string;
}

interface GetFivePlacesSaga {
  type: typeof Types.GET_FIVE_PLACES;
}

export interface GetReviewsListSaga {
  type: typeof Types.GETPLACESREVIEW;
  id: string;
}

export interface AddPlaceReviewSaga {
  type: typeof Types.ADDPLACESREVIEW;
  review: string;
  pecularities: string;
  id: string;
}

export interface SharePlaceSaga {
  type: typeof Types.SHARE_PLACE_SAGA;
  username: string;
  placeID: string;
}

export type PlaceActionTypes =
  | GetPlacesListSaga
  | AddPlaceRatingSaga
  | CheckPlaceSaga
  | GetFivePlacesSaga
  | GetReviewsListSaga
  | AddPlaceReviewSaga
  | SharePlaceSaga;
