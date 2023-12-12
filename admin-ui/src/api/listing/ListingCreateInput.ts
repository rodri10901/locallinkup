import { InputJsonValue } from "../../types";

export type ListingCreateInput = {
  listingCreateBy: string;
  locationData?: InputJsonValue;
  locationType: string;
  mapData: InputJsonValue;
  photos: InputJsonValue;
  placeAmeneties?: InputJsonValue;
  placeSpace: InputJsonValue;
  placeType: string;
};
