const calculateDistance = ([referenceLatitude, referenceLongitude], [latitude, longitude]) => {

  if ((referenceLatitude == latitude) && (referenceLongitude == longitude)) {
    return 0;
  }
  else {
    let radLat = Math.PI * referenceLatitude / 180;
    let radLat2 = Math.PI * latitude / 180;
    let theta = referenceLongitude - longitude;
    let radTheta = Math.PI * theta / 180;
    let dist = Math.sin(radLat) * Math.sin(radLat2) + Math.cos(radLat) * Math.cos(radLat2) * Math.cos(radTheta);
    dist = Math.acos(dist > 1 ? 1 : dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;

    return dist;
  }
}

const checkDistance = (offices, location, limit) => {
  return offices.find((office) => calculateDistance(location, office.coordinates.split(',')) <= limit);
}

const getOffices = (partnersArray, location, limit) => {
  return partnersArray
    .map((partner) => {
      const office = checkDistance(partner.offices, location, limit);
      return !!office ? [{ name: partner.organization, address: office.address }]
        : [];
    })
    .reduce((acc, curr) => acc.concat(curr))
    .sort((partner1, partner2) => {
      return partner1.name < partner2.name ? -1
        : partner1.name > partner2.name ? 1
          : 0
    });

}

module.exports = { getOffices, checkDistance, calculateDistance }
