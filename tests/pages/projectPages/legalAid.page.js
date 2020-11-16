import Page from "../base.page";
import data from '../../testData/profileData'
import utils from "../../utilities/utils";

class legalAidPage extends Page {

    get yesCheck() {
        return $("//body/div[@id='__nuxt']/div[@id='__layout']/div[@class='section']/div/div[@class='legal-aid-details container w-container']/span/div[@class='component-wrapper']/div[1]/label[1]/span[1]")
    };
    get noCheck() {
        return $("//body/div[@id='__nuxt']/div[@id='__layout']/div[@class='section']/div/div[@class='legal-aid-details container w-container']/span/div[@class='component-wrapper']/div[2]/label[1]/span[1]")
    };
    get legalAidNumber() {
        return $("//label[contains(text(),'Legal Aid Certification Numbe')]/following-sibling::input")
    };
    get expirationDate() {
        return $("//label[contains(text(),'Expiration Date')]/following-sibling::input")
    };
    get updateButton() {
        return $("//button[contains(text(),'Update')]")
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