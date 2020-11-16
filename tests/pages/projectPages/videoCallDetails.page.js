import Page from "../base.page";

class videoCallDetailsPage extends Page {

    get contactProgram() {
        return $("//input[@class='vs__search']");
    }
    get programsList() {
        return $("//ul[contains(@id,'listbox')]");
    }
    get contactInfo() {
        return $("//textarea[@id='field']");
    }

    selectProgram(arg1) {
        this.contactProgram.waitForEnabled();
        this.contactProgram.setValue(arg1)
        browser.pause(500);
        this.programsList.click();
    }
    
    enterContactInfo(arg1) {
        this.contactInfo.setValue(arg1);
    }
}
export default new videoCallDetailsPage();