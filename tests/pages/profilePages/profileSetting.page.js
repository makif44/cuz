import Page from "../base.page";

class ProfileSettingPage extends Page{

    clickSettingSubs(arg){
        const section ="//div[contains(text(),'"+arg+"')]"
        browser.$(section).click();
    }
}
export default new ProfileSettingPage();