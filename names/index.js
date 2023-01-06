const peoplename = require("../country/state/city/index");
const getnames = require("../utilities/utils/index");

const getPeopleInCity = (peoplename) => {
  return getnames(peoplename);
};

module.exports = getPeopleInCity;
