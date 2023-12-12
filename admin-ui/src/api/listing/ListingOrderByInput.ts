import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  listingCreateBy?: SortOrder;
  locationData?: SortOrder;
  locationType?: SortOrder;
  mapData?: SortOrder;
  photos?: SortOrder;
  placeAmeneties?: SortOrder;
  placeSpace?: SortOrder;
  placeType?: SortOrder;
  updatedAt?: SortOrder;
};
