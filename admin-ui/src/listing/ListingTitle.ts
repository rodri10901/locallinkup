import { Listing as TListing } from "../api/listing/Listing";

export const LISTING_TITLE_FIELD = "listingCreateBy";

export const ListingTitle = (record: TListing): string => {
  return record.listingCreateBy?.toString() || String(record.id);
};
