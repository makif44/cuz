import Page from '../base.page'

class ProfilePage extends Page{
    
    get settingButton(){return $("//button[@class='button w-button blue']")}


    clickSettingButton(){
        this.settingButton.waitForClickable({timeout:3000})
        this.settingButton.click();
    }

}
export default new ProfilePage();