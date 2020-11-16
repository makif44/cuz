import Page from "../base.page";
import possibleDeliveryAddress from "../../testData/hardCopyDeliveryData"
import notPossibleDeliveryAddress from "../../testData/hardCopyDeliveryInvalidData"
class deliveryDetailsPage extends Page {
    get country() {
        return $("//label[contains(text(),'Country')]/..//input")
    };
    get countryList() {
        return $("//label[contains(text(),'Country')]/..//ul")
    };

    get province() {
        return $("//label[contains(text(),'Province / Territory')]/..//input")
    };
    get provinceList() {
        return $("//label[contains(text(),'Province / Territory')]/..//ul")
    };
    get city() {
        return $("//label[contains(text(),'City')]/..//input")
    };
    get streetNumberName() {
        return $("//label[contains(text(),'Street Number')]/..//input")
    };
    get postalCode() {
        return $("//label[contains(text(),'Postal Code')]/..//input")
    };
    get calculating() {
        return $("//div[contains(text(),'Word Count')]/following-sibling::div")
    };

    fillDeliveryAdress(arg) {

        let country = "";
        let province = "";
        let city = "";
        let streetNumber = "";
        let postalCode = "";
        if (arg == "possible") {
            country = possibleDeliveryAddress['country'];
            province = possibleDeliveryAddress['province'];
            city = possibleDeliveryAddress['city'];
            streetNumber = possibleDeliveryAddress['streetNumber'];
            postalCode = possibleDeliveryAddress['postalCode'];
        } else {
            country = notPossibleDeliveryAddress['country'];
            province = notPossibleDeliveryAddress['province'];
            city = notPossibleDeliveryAddress['city'];
            streetNumber = notPossibleDeliveryAddress['streetNumber'];
            postalCode = notPossibleDeliveryAddress['postalCode'];
        }
        //browser.pause(1500);
        //this.country.waitForEnabled({timeout: 3000});
        browser.waitUntil(() =>
            this.country.isClickable(), {
                timeout: 5000,
                timeoutMsg: ""
            });
        this.country.click();
        this.country.setValue(country);
        browser.pause(250);
        this.countryList.click();
        if (country === "Canada") {
            this.province.waitForDisplayed();
            this.province.click();
            this.province.setValue(province);
            browser.pause(250);
            this.provinceList.click();
        }
        this.city.setValue(city);
        this.streetNumberName.setValue(streetNumber);
        this.postalCode.setValue(postalCode);
        browser.waitUntil(() =>
            this.calculating.getText().trim() !== "Calculating...", {
                timeout: 60000,
                timeoutMsg: "calculating is not done"
            });

    }
}
export default new deliveryDetailsPage();