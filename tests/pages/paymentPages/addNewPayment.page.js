import Page from "../base.page";
import card from '../../testData/validCardData'
import invalidCard from '../../testData/invalidCardData'
import addNewPayment from './addNewPayment.page'


class AddNewPayment extends Page {

    get cardHolderNameInbox() {
        return $("//input[@placeholder='Name']")
    };
    get cardNumberInbox() {
        return $("//input[@placeholder='________________']")
    };
    get expirationDateInbox() {
        return $("//input[@placeholder='MM/YY']")
    };
    get cvcumberInbox() {
        return $("//input[@placeholder='____']")
    };
    get countryInbox() {
        return $("//input[@class='vs__search']")
    };
    get postalCodeInbox() {
        return $("//input[@placeholder='Postal Code']")
    };
    get savePaymentButton() {
        return $("//span[contains(text(),'Add New Card')]")
    };
    get firstCountryInTheList() {
        return $("(//ul[contains(@id,'listbox')])[1]")
    }
    get cardHolderWarningField() {
        return $("(//div[@class='cuz-field-error-text'])[1]")
    }
    get cardNumberWarningField() {
        return $("(//div[@class='cuz-field-error-text'])[2]")
    }
    get expirationDateWarningField() {
        return $("(//div[@class='cuz-field-error-text'])[3]")
    }
    get cvcNumberWarningField() {
        return $("(//div[@class='cuz-field-error-text'])[4]")
    }
    get setAsADefaultButton() {
        return $("(//div[@class='cuz-radio-button'])[1]")
    }
    get paymentMetodNumber() {
        return $$("//div[@class='indicator-column---noti-card']")
    };
    get addNewPaymentButton() {
        return $("//span[contains(text(),'Add New Payment Method')]/..")
    };
    get deleteButton() {
        return $("(//span[@class='cuz-dynamic-icon trash cuz-icon-trash'])[1]")
    };
    get wrongCardNumberNotation() {
        return $("//div[@class='cuz-alert-wrapper cuz-error']//strong")
    }
    get allDeleteButtons() {
        return $$("//span[@class='cuz-dynamic-icon trash cuz-icon-trash']")
    };
    fillWithValidCardData(arg1) {
        let cardNum = '';
        let cardcvc = '';
        switch (arg1) {
            case 'Visa-Master':
                cardNum = 4242424242424242;
                cardcvc = card['cvc'];
                break;
            case 'AmericanExp':
                cardNum = 378282246310005;
                cardcvc = card['a_cvc'];
                break;
            default:
                throw "Invalid card type!"
        }
        this.cardHolderNameInbox.setValue(card['cardName']);
        do {
            this.cardNumberInbox.setValue(cardNum);
        } while (this.cardNumberInbox.getValue() != cardNum)
        this.expirationDateInbox.setValue(card['expirationDate']);
        this.cvcumberInbox.setValue(cardcvc);
        this.postalCodeInbox.setValue(card['postalCode']);
        this.countryInbox.click();
        this.countryInbox.setValue(card['country']);
        //this.firstCountryInTheList.waitForDisplayed();
        browser.pause(500);
        this.firstCountryInTheList.click();
        browser.waitUntil(() =>
            this.savePaymentButton.isClickable(), {
                timeout: 10000,
                timeoutMsg: "Button not clickable"
            });
        this.savePaymentButton.click();
    }

    fillWithInvalidCardData() {
        this.cardHolderNameInbox.setValue(invalidCard[0]['cardName']);
        this.cardNumberInbox.setValue(invalidCard[0]['missingCardNumber']);
        this.expirationDateInbox.setValue(invalidCard[0]['expirationDate']);
        this.cvcumberInbox.setValue(invalidCard[0]['cvc']);
    }

    fillWithWrongCardNumber() {
        this.cardHolderNameInbox.setValue(card['cardName']);
        this.cardNumberInbox.setValue(card['wrongCardNumber']);
        this.expirationDateInbox.setValue(card['expirationDate']);
        this.cvcumberInbox.setValue(card['a_cvc']);
        this.postalCodeInbox.setValue(card['postalCode']);
        this.countryInbox.click();
        this.countryInbox.setValue(card['country']);
        //this.firstCountryInTheList.waitForEnabled();
        browser.pause(250);
        this.firstCountryInTheList.click();
        browser.waitUntil(() =>
            this.savePaymentButton.isClickable(), {
                timeout: 10000,
                timeoutMsg: "Button not clickable"
            });
        this.savePaymentButton.click();
    }

    clickAddNewPayment() {

        // this. waitForWrapperLoadMaskDisappear();
        // browser.pause(1000);
        browser.waitUntil(() =>
            this.addNewPaymentButton.isClickable(), {
                timeout: 10000,
                timeoutMsg: " Add New Button not clickable"
            });
        this.addNewPaymentButton.click();
    }

    clickSetAsADefault() {
        //browser.pause(5000);
        this.waitForWrapperLoadMaskDisappear();
        this.setAsADefaultButton.waitForClickable({
            timeout: 30000
        });
        this.setAsADefaultButton.click();
    }

    deletePaymentMethod() {
        this.deleteButton.waitForEnabled({
            timeout: 15000
        });
        this.deleteButton.click();
        this.confirmationYes.waitForDisplayed();
        this.confirmationYes.click();
    }

    deleteAllPaymentMethod() {
        this.deleteButton.waitForEnabled({
            timeout: 15000
        });

        do {
            this.allDeleteButtons.pop().click();
            this.confirmationYes.waitForDisplayed();
            this.confirmationYes.click();
            browser.pause(3000)
        } while (this.allDeleteButtons.length >= 2);
        this.allDeleteButtons.pop().click();
        this.confirmationYes.waitForDisplayed();
        this.confirmationYes.click();
    }

    verificationMessage(arg1, arg2) {
        var size = Object.keys(this.paymentMetodNumber).length;
        console.log('object size : ', size);
        browser.waitUntil(() => {
            return addNewPayment.greenWrapperNotification.getText() !== "Loading..."
        }, 5000, "notification not visible");
        if (size > 1) {
            addNewPayment.greenWrapperNotification.waitForDisplayed({
                timeout: 10000
            });
            expect(addNewPayment.greenWrapperNotification).toHaveText(arg1);
        } else {
            addNewPayment.redWrapperNotification.waitForDisplayed({
                timeout: 10000
            });
            expect(addNewPayment.redWrapperNotification).toHaveText(arg2);
        }
    }

}
export default new AddNewPayment();