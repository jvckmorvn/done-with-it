// import apiClient from "./client";

// const endpoint = '/listings';

// export default function getListings() {
//   apiClient.get(endpoint);
// }

// import BASE_URL from "./client";

// export default async function getListings() {
//   const url = `${BASE_URL}/listings.json`
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

import listings from "../db/listings";

export default function getListings() {
  return listings;
}
