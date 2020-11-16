import {When,Then, Given, And} from 'cucumber'
import addNewPayment from '../../pages/paymentPages/addNewPayment.page';

When("I fill with valid {string} card info", (arg1) => {
    addNewPayment.fillWithValidCardData(arg1);
});

When("I fill with invalid card info", () => {
    addNewPayment.fillWithInvalidCardData();
});

When("I click Add New Payment Method button", () => {
    addNewPayment.clickAddNewPayment();
});

Then("I should be able to see all card warning messages", () => {
    expect(addNewPayment.cardHolderWarningField).toHaveText('This field may only contain alphabetic characters as well as spaces.');
    expect(addNewPayment.cardNumberWarningField).toHaveText('This field must be at least 15 characters.')
    expect(addNewPayment.expirationDateWarningField).toHaveText('Expiration Date is not valid.')
    expect(addNewPayment.cvcNumberWarningField).toHaveText('This field must be numeric and exactly contain 3 digits.')
    
});

When("I fill with wrong card number", () => {
    addNewPayment.fillWithWrongCardNumber();
});

When("I set as a default credit card", () => {
    addNewPayment.clickSetAsADefault();
});

When("I delete a payment method", () => {
    addNewPayment.deletePaymentMethod();
});

Then("I should be able to see {string} or {string} notification", (arg1,arg2) => {
    addNewPayment.verificationMessage(arg1,arg2);
});
Then("I should be able to see wrong card number notation", () => {
    expect(addNewPayment.wrongCardNumberNotation).toHaveText('Your card number is incorrect.')
});