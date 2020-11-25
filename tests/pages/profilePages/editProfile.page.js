import Page from "../base.page";
import profileData from '../../testData/profileData'
var clear = ["\uE003", "\uE003", "\uE003", "\uE003", "\uE003", "\uE003", "\uE003", "\uE003", "\uE003", "\uE003", "\uE003", "\uE003", "\uE003", "\uE003", "\uE003", "\uE003", "\uE003", "\uE003", "\uE003", "\uE003", "\uE003", "\uE003", "\uE003"];

class EditProfilePage extends Page {
    get nameInbox() {
        return $("(//p[starts-with(text(),'Name')]/../../following-sibling::div)[1]/input")
    };
    get lastNameInbox() {
        return $("(//p[starts-with(text(),'Last Name')]/../../following-sibling::div)[1]/input")
    };
    get phoneInbox() {
        return $("(//p[starts-with(text(),'Phone')]/../../following-sibling::div)[1]/input")
    };
    get companyCheckBox() {
        return $("//span[contains(text(),'Company')]/preceding-sibling::input")
    };
    get lawFirmCheckBox() {
        return $("//span[contains(text(),'Law Firm')]/preceding-sibling::input")
    };
    get individualCheckBox() {
        return $("//span[contains(text(),'Individual')]/preceding-sibling::input")
    };
    get immigrationCheckBox() {
        return $("//span[contains(text(),'Immigration')]/preceding-sibling::input")
    };
    get country() {
        return $("(//input[@class='vs__search'])[1]")
    };
    get countryList() {
        return $("((//ul[@role='listbox'])[1]/li)[1]")
    };
    get province() {
        return $("(//input[@class='vs__search'])[2]")
    };
    get provinceList() {
        return $("((//ul[@role='listbox'])[2]/li)[1]")
    };
    get city() {
        return $("(//p[starts-with(text(),'City')]/../../following-sibling::div)[1]/input")
    };
    get street() {
        return $("(//p[starts-with(text(),'Street ')]/../../following-sibling::div)[1]/input")
    };
    get postalCode() {
        return $("(//p[starts-with(text(),'Postal ')]/../../following-sibling::div)[1]/input")
    };
    get saveChangesButton() {
        return $("//span[contains(text(),'Save')]")
    };
    get nameWarningField() {
        return $("//label[starts-with(text(),'Name')]/../following-sibling::p")
    };
    get lastNameWarningField() {
        return $("//label[contains(text(),'Last name')]/../following-sibling::p")
    };
    get phoneWarningField() {
        return $("//label[contains(text(),'Phone')]/../following-sibling::p")
    };
    get cityWarningField() {
        return $("//label[contains(text(),'City')]/../following-sibling::p")
    };

    updatedata() {
        this.nameInbox.click();
        this.nameInbox.setValue(profileData['name']);

        this.lastNameInbox.click();
        this.lastNameInbox.setValue(profileData['lastName']);

        $("//span[contains(text(),'"+profileData.userType+"')]/preceding-sibling::div").click();    
        this.phoneInbox.click();
        this.phoneInbox.setValue(profileData['phoneNumber']);

        this.country.click();
        this.country.setValue(profileData['country']);
        browser.pause(500)
        this.countryList.click();

        this.city.click();
        this.city.setValue(profileData['city']);

        this.street.click();
        this.street.setValue(profileData['street']);

        this.postalCode.click();
        this.postalCode.setValue(profileData['postalCode']);

        this.saveChangesButton.waitForClickable();
        this.saveChangesButton.click();
    }

    createData() {
        this.nameInbox.click();
        this.nameInbox.setValue(profileData.new.firstName);
        this.lastNameInbox.setValue(profileData.new.lastName);
        $("//span[contains(text(),'"+profileData.userType+"')]/preceding-sibling::div").click();    
        this.phoneInbox.setValue(profileData.new.mobilePhone);
        this.country.setValue(profileData.country);
        browser.pause(500)
        this.countryList.click();
        this.city.setValue(profileData.new.city);
        this.street.setValue(profileData.new.street);
        this.postalCode.setValue(profileData.new.postalCode);
        this.nameInbox.setValue("Alex");        
        this.saveChangesButton.waitForClickable();
        this.saveChangesButton.click();
    }

    

    editInvalidName(arg1) {
        this.nameInbox.waitForDisplayed({
            timeout: 10000
        });
        //this.nameInbox.click();
        this.nameInbox.setValue(clear);
        this.nameInbox.setValue(arg1);
    }

    editInvalidLastName(arg1) {
        //this.lastNameInbox.click();
        this.lastNameInbox.setValue(clear);
        this.lastNameInbox.setValue(arg1);
    }

    editInvalidPhone(arg1) {
       // this.phoneInbox.click();
        this.phoneInbox.setValue(clear);
        this.phoneInbox.setValue(arg1);
    }

    editInvalidCity(arg1) {
        //this.city.click();
        this.city.setValue(clear);
        this.city.setValue(arg1);
    }
}
export default new EditProfilePage();