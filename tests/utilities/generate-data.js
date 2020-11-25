const faker = require("faker");
faker.locale = "pt_BR";

// Personal data
function fakeFirstName() {
  return faker.name.firstName()
}

function fakeLastName() {
  return faker.name.lastName()
}

function fakeStreetName() {
  return faker.address.streetName()
}

function fakeSecondaryAddress() {
  return faker.address.secondaryAddress()
}

function fakeCountryName() {
  return faker.address.country()
}

function fakeCityName() {
  return faker.address.city()
}

function fakePostalCode() {
  return faker.address.zipCode("#####")
}

function fakePhoneNumber() {
  return faker.phone.phoneNumber()
}

function fakeNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

module.exports = {
  fakeCityName,
  fakeFirstName,
  fakeLastName,
  fakeNumber,
  fakePhoneNumber,
  fakePostalCode,
  fakeSecondaryAddress,
  fakeStreetName,
  fakeCountryName
}