import Page from '../base.page';
import loginCodePage from '../loginPages/loginCode.page'
import LoginEmailPage from '../loginPages/loginEmail.page'
class fakemailPage extends Page {

    get mailAddress() {
        return $("//span[@id='email']")
    }
    get inbox() {
        return $("//td[contains(text(),'Cuz Translation')]")
    }

    get loginCode() {
        return $("//tbody/tr[2]/td[1]/p[2]/following-sibling::h2")
    }

    getLoginCode() {
        browser.newWindow('https://www.fakemail.net')
        browser.pause(5000)
        try {
            browser.switchWindow('https://www.fakemail.net')
        } catch (err) {
            browser.pause(5000);
            browser.switchWindow('https://www.fakemail.net')
        }

        let emailAdress = this.mailAddress.getText();

        browser.switchWindow('Cuz Translation')
        LoginEmailPage.login2(emailAdress);
        this.clickContinue();
        browser.pause(2000)
        browser.switchWindow('FakeMail | Disposable Temp Mail')

        while (!this.inbox.isExisting()) {
            browser.refresh()
            browser.pause(2000);
        }
        this.inbox.click();                    
        browser.pause(1000);
        browser.switchToFrame($('#iframeMail'));
        browser.waitUntil(() =>
            this.loginCode.isDisplayed(), {
                timeout: 60000,
                timeoutMsg: "what is problem"
            })
        let loginCode1 = this.loginCode.getText();
        browser.switchWindow('Cuz Translation')
        loginCodePage.loginCodeInbox.setValue(loginCode1);
        this.clickContinue();
        browser.pause(2000)
    }

}
export default new fakemailPage();