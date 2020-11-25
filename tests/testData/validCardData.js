const fakeData = require("../utilities/generate-data")
module.exports={

    'cardName': fakeData.fakeFirstName()+" "+fakeData.fakeLastName(),
    'visaCardNumber': '4242424242424242',
    'americaCardNumber': '378282246310005',
    'wrongCardNumber': fakeData.fakeNumber(1000000000000000,9999999999999999),
    'expirationDate': fakeData.fakeNumber(10,12)+"/"+fakeData.fakeNumber(21,25),
    'cvc': fakeData.fakeNumber(100,999),
    'a_cvc' : fakeData.fakeNumber(1000,9999),
    'country': 'Canada',
    'postalCode': fakeData.fakePostalCode()
};