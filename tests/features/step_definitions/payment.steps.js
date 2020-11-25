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

When("I delete all payment method", () => {
    addNewPayment.deleteAllPaymentMethod();
});

Then("I should be able to see wrong card number notation", () => {
    expect(addNewPayment.wrongCardNumberNotation).toHaveTextContaining('The card number is incorrect. Check the card’s number or use a different card.')
});