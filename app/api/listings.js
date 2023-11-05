import listings from "../db/listings";

function getListings() {
  return listings;
}

function addListing(listing) {
  return [listing, ...listings];
}

export default {
  getListings,
  addListing
}