import Page from "../base.page";
import data from '../../testData/profileData'
import utils from "../../utilities/utils";

class legalAidPage extends Page {

    get yesCheck() {
        return $("//span[contains(text(),'Yes')]//preceding-sibling::div")
    };
    get noCheck() {
        return $("//span[contains(text(),'No')]//preceding-sibling::div")
    };
    get legalAidNumber() {
        return $("//p[contains(text(),'Legal Aid Certification Number')]/../../following-sibling::div//input")
    };
    get expirationDate() {
        return $("//p[contains(text(),'Expiration Date')]/../../following-sibling::div//input")
    };
    get updateButton() {
        return $("//span[contains(text(),'Update')]")
    };


    selectLegalAid(arg1) {
        //this.waitForPageLoad("Legal Aid Details");
        //browser.pause(1000);
        //this.yesCheck.waitForDisplayed();
        browser.waitUntil(() =>
            this.noCheck.isClickable(), {
                timeout: 30000,
                timeoutMsg: "Button not clickable"
            });
        if (arg1 === "yes") {
            this.yesCheck.click();

        } else {
            this.noCheck.click();
        }
    }

    enterLANumberAndExpireDate(arg1, arg2, arg3, arg4) {
        if (arg1 === "used") {
            arg1 = data['usedLACnumber']
        };
       // this.waitForWrapperLoadMaskDisappear();
        this.legalAidNumber.waitForDisplayed();
        this.legalAidNumber.click();
        this.legalAidNumber.setValue(arg1);
        this.expirationDate.setValue("2022");
        utils.selectStartDate(arg2, arg3, arg4)
        this.updateButton.click();
    }
}
export default new legalAidPage();