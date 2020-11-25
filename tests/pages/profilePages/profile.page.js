import Page from '../base.page'

class ProfilePage extends Page{
    
    get settingButton(){return $("//span[@class='cuz-title-icon cuz-icon-settings']")}


    clickSettingButton(){
        this.settingButton.waitForClickable({timeout:10000})
        this.settingButton.click();
    }

}
export default new ProfilePage();