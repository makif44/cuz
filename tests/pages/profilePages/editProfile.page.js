import Page from "../base.page";
import profileData from '../../testData/profileData'
var clear=["\uE003","\uE003","\uE003","\uE003","\uE003","\uE003","\uE003","\uE003","\uE003","\uE003","\uE003","\uE003","\uE003","\uE003","\uE003","\uE003","\uE003","\uE003","\uE003","\uE003","\uE003","\uE003","\uE003"];

class EditProfilePage extends Page {
    get nameInbox() { return $("//input[@placeholder='Name']")};
    get lastNameInbox() {return $("//input[@placeholder='Last name']")};
    get phoneInbox() { return $("//input[@placeholder='Phone Number']")};
    get companyCheckBox() {return $("//body/div[@id='__nuxt']/div[@id='__layout']/div[@class='section']/div/div[@class='container w-container']/div[@class='w-form']/span/form[@id='edit-profile-form']/span/div[@class='component-wrapper']/div[1]/label[1]/span[1]")};
    get lawFirmCheckBox() {return $("//body/div[@id='__nuxt']/div[@id='__layout']/div[@class='section']/div/div[@class='container w-container']/div[@class='w-form']/span/form[@id='edit-profile-form']/span/div[@class='component-wrapper']/div[2]/label[1]/span[1]")};
    get individualCheckBox() {return $("//span[@class='w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input w--redirected-checked']")};
    get country() { return $("//input[@class='vs__search']")};
    get city() { return $("//input[@placeholder='City']")};
    get street() {return $("//span[6]//div[1]//input[1]")};
    get postalCode() {return $("//input[@placeholder='Postal Code']")};
    get saveChangesButton() {return $("//button[@class='button w-button blue']")};
    get nameWarningField() {return $("div.section div.container.w-container div.w-form span:nth-child(1) form.form span:nth-child(2) > p.error-detail.errors-block")};
    get lastNameWarningField() {return $("div.section div.container.w-container div.w-form span:nth-child(1) form.form span:nth-child(3) > p.error-detail.errors-block")};
    get phoneWarningField() {return $("div.section div.container.w-container div.w-form span:nth-child(1) form.form span:nth-child(6) > p.error-detail.errors-block") };
    get cityWarningField() {return $("div.section div.container.w-container div.w-form span:nth-child(1) form.form span:nth-child(9) > p.error-detail.errors-block")};
   
    updatedata() {
        this.nameInbox.click();
        this.nameInbox.setValue(clear);
        this.nameInbox.setValue(profileData['name']);
        
        this.lastNameInbox.click();
        this.lastNameInbox.setValue(clear);
        this.lastNameInbox.setValue(profileData['lastName']);

        this.phoneInbox.click();
        this.phoneInbox.setValue(clear);
        this.phoneInbox.setValue(profileData['phoneNumber']);

        this.country.click();
        this.country.setValue(clear);
        this.country.setValue(profileData['country']);

        this.city.click();
        this.city.setValue(clear);
        this.city.setValue(profileData['city']);

        this.street.click();
        this.street.setValue(clear);
        this.street.setValue(profileData['street']);

        this.postalCode.click();
        this.postalCode.setValue(clear);
        this.postalCode.setValue(profileData['postalCode']);
    
        this.saveChangesButton.waitForClickable();
        this.saveChangesButton.click();
    }

    editInvalidName(arg1) {
        this.nameInbox.waitForDisplayed({timeout:10000});
        this.nameInbox.click();
        this.nameInbox.setValue(clear);
        this.nameInbox.setValue(arg1);
    }

    editInvalidLastName(arg1) {
        this.lastNameInbox.click();
        this.lastNameInbox.setValue(clear);
        this.lastNameInbox.setValue(arg1);
    }

    editInvalidPhone(arg1) {
        this.phoneInbox.click();
        this.phoneInbox.setValue(clear);
        this.phoneInbox.setValue(arg1);
    }

    editInvalidCity(arg1) {
        this.city.click();
        this.city.setValue(clear);
        this.city.setValue(arg1);
    }
}
export default new EditProfilePage();