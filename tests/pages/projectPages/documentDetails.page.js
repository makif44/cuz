import Page from "../base.page";

class documentDetailsPage extends Page {

    get countinueButton() {
        return $("//div[@class='bot-nav-column']/button")
    };
    get documentType() {
        return $("//label[contains(text(),'Select Document Type')]/..//input")
    };
    get documentTypeList() {
        return $("//label[contains(text(),'Select Document Type')]/..//ul")
    };
    get documentDetails() {
        return $("//label[contains(text(),'Set Document Details')]/..//input")
    };
    get documentDetailsList() {
        return $("//label[contains(text(),'Set Document Details')]/..//ul")
    }

    selectDocumentType(arg1, arg2) {
        browser.waitUntil(() =>
            this.documentType.isClickable(), {
                timeout: 20000,
                timeoutMsg: "document Type is not clickable"
            });
        this.documentType.click();
        this.documentType.setValue(arg1);
        browser.pause(250);
        this.documentTypeList.click();
        this.documentDetails.click();
        this.documentDetails.setValue(arg2);
        browser.pause(250);
        this.documentDetailsList.click();
        // this.countinueButton.waitForDisplayed(5000);
        // this.countinueButton.click();

    }
}
export default new documentDetailsPage();