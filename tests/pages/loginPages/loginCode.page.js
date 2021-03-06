import Page from '../base.page';
import data from '../../testData/credentials'

class LoginCodePage extends Page {
    get loginCodeInbox() {
        return $("//input[@placeholder='--------']")
    }
    get wrongCodeWarning() {
        return $("//div[@class='vue-notification-wrapper']")
    }

    enterInvalidCode() {
        this.loginCodeInbox.setValue("AS56R24Q");
        browser.pause(2000);
        this.clickContinue();
    }

}
export default new LoginCodePage();