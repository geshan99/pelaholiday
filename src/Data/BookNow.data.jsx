import React from 'react';

function BookNowDataJSON(
  tourDetails,
  tourCode,
  packageType,
  durations,
  locations,
  packageCapacity
) {
  console.log('book');
  console.log(tourDetails);
  return {
    tourDetails: { tourDetails },
    tourCode: { tourCode },
    packageType: { packageType },
    durations: { durations },
    locations: { locations },
    packageCapacity: { packageCapacity },
  };
}

export default BookNowDataJSON;
