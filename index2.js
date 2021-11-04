const { nextISSTimesForMyLocation } = require('./iss_promised');

const printFlys = function(flyovers) {
  for (const fly of flyovers) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(fly.risetime);
    const duration = fly.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((flyovers) => {
    printFlys(flyovers);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });