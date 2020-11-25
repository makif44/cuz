import Page from "../base.page";

class documentDetailsPage extends Page {

    get countinueButton() {
        return $("//div[@class='bot-nav-column']/button")
    };
    get documentType() {
        return $("//p[contains(text(),'Select Document Type')]/../../following-sibling::div//input")
    };
    get documentTypeList() {
        return $("((//ul[@role='listbox'])[1]/li)[1]")
    };
    get documentDetails() {
        return $("//p[contains(text(),'Set Document Details')]/../../following-sibling::div//input")
    };
    get documentDetailsList() {
        return $("((//ul[@role='listbox'])[2]/descendant::*)[1]")
    }

    selectDocumentType(arg1, arg2) {
        browser.waitUntil(() =>
            this.documentType.isClickable(), {
                timeout: 20000,
                timeoutMsg: "document Type is not clickable"
            });
        this.documentType.click();
        this.documentType.setValue(arg1);
        browser.pause(2000);
        //this.waitForElementVerification(this.documentTypeList,arg1);
        this.documentTypeList.click();
        this.documentDetails.click();
        this.documentDetails.setValue(arg2);
        browser.pause(1000);
        this.documentDetailsList.click();
        // this.countinueButton.waitForDisplayed(5000);
        // this.countinueButton.click();

    }
}
export default new documentDetailsPage();