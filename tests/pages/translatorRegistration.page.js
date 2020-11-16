import Page from './base.page'

class TranslationRegistrationPage extends Page{
    
    get pageTitle() {return $("//h2[@class='title']")};
    get emailAdressLabel(){return $("//label[@class='field-label']")}

    waitForHomePageToLoad() {
        
        browser.waitUntil(function () {
             this.emailAdressLabel.getText() === "Email Address"
        }, {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        });

    }
}
export default new TranslationRegistrationPage();