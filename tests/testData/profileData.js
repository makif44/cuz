const fakeData = require("../utilities/generate-data")
module.exports={

    'name':'Dimitri',
    'lastName': 'Papadopulos',
    'userType': 'Company',
    'phoneNumber': '6516458541',
    'country': 'Greece',
    'city': 'Athens',
    'street': 'Sofokleos',
    'postalCode': '12543',
    'referalCode': 'rrdmjgti',
    'usedLACnumber': '12312312321',
    'new': {
        "firstName": fakeData.fakeFirstName(),
        "lastName": fakeData.fakeLastName(),
        "city": fakeData.fakeCityName(),
        "state": fakeData.fakeNumber(1, 50),
        "postalCode": fakeData.fakePostalCode(),
        "country": fakeData.fakeCountryName(),
        "mobilePhone": fakeData.fakePhoneNumber(),
        "street": fakeData.fakeStreetName()
      }

};