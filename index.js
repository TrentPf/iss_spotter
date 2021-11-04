const { nextISSTimesForMyLocation } = require('./iss');

const printFlys = function(flyovers) {
  for (const fly of flyovers) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(fly.risetime);
    const duration = fly.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printFlys(passTimes);
});