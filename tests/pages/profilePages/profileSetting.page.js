import Page from "../base.page";

class ProfileSettingPage extends Page{

    clickSettingSubs(arg){
        const section ="//h4[contains(text(),'"+arg+"')]"
        browser.$(section).click();
    }
}
export default new ProfileSettingPage();