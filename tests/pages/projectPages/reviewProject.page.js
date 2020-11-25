import Page from "../base.page";

class reviewProjectPage extends Page {
    //label[contains(text(),'Video Chat Platform')]/following-sibling::div
    get ProjectTitle() {
        return $("//p[contains(text(),'Project Title')]/../../following-sibling::div//div[@class='cuz-field cuz-field-left']")
    };
    get VideoChatPlatform() {
        return $("//p[contains(text(),'Video Chat Platform')]/../../following-sibling::div//div[@class='cuz-field cuz-field-left']")
    };
    get ContactInformation() {ol
        return $("//p[contains(text(),'Contact Information')]/../../following-sibling::div//div[@class='cuz-field cuz-field-left']")
    };
    get SourceLanguage() {
        return $("//p[contains(text(),'Source Language')]/../../following-sibling::div//div[@class='cuz-field cuz-field-left']")
    };
    get TargetLanguages() {
        return $("(//p[contains(text(),'Target Language')]/../../following-sibling::div//div[@class='cuz-field cuz-field-left']")
    };
    get AppointmentTopic() {
        return $("//p[contains(text(),'Appointment Topic')]/../../following-sibling::div//div[@class='cuz-field cuz-field-left']")
    };
    get AppointmentDetails() {
        return $("//p[contains(text(),'Appointment Details')]/../../following-sibling::div//div[@class='cuz-field cuz-field-left']")
    };
    get AppointmentType() {
        return $("//p[contains(text(),'Appointment Type')]/../../following-sibling::div//div[@class='cuz-field cuz-field-left']")
    };
    get AppointmentStartDateAndTime() {
        return $("//p[contains(text(),'Appointment Start Date and Time')]/../../following-sibling::div//div[@class='cuz-field cuz-field-left']")
    };
    get AppointmentEndDateAndTime() {
        return $("//p[contains(text(),'Appointment End Date and Time')]/../../following-sibling::div//div[@class='cuz-field cuz-field-left']")
    };
    get AppointmentAddress() {
        return $("//p[contains(text(),'Appointment Address')]/../../following-sibling::div//div[@class='cuz-field cuz-field-left']")
    };
    get AppointmentDuration() {
        return $("//p[contains(text(),'Appointment Duration')]/../../following-sibling::div//div[@class='cuz-field cuz-field-left']")
    };
    get CertificationType() {
        return $("//p[contains(text(),'Certification Type')]/../../following-sibling::div//div[@class='cuz-field cuz-field-left']")
    };
    get TypeofDocument() {
        return $("//p[contains(text(),'Type of Document')]/../../following-sibling::div//div[@class='cuz-field cuz-field-left']")
    };
    get Subject() {
        return $("//p[contains(text(),'Subject')]/../../following-sibling::div//div[@class='cuz-field cuz-field-left']")
    };
    get DueDate() {
        return $("//p[contains(text(),'Due Date')]/../../following-sibling::div//div[@class='cuz-field cuz-field-left']")
    };
    get DressCode() {
        return $("//p[contains(text(),'Dress Code')]/../../following-sibling::div//div[@class='cuz-field cuz-field-left']")
    };
    get FirstInterpreterName() {
        return $("(//div[@class='file-name---doc-card'])[1]")
    };
    get SecondInterpreterName() {
        return $("(//div[@class='file-name---doc-card'])[2]")
    };
    get FirstTargetLanguage() {
        return $("(//span[@class='pill'])[1]")
    };
    get SecondTargetLanguage() {
        return $("(//span[@class='pill'])[2]")
    };
    get deliveryFee() {
        return $("(//div[@class='table-column'])[8]/div")
    };
    get hardCopy() {
        return $("//label[contains(text(),'Hard Copy')]/following-sibling::div")
    }; 
    get hardCopyAddress() {
        return $("//label[contains(text(),'Hard Copy')]/following-sibling::div/span")
    }; 
    get documentName() {
        return $("(//h4[contains(text(),'Documents')]/..//div[@class='table-column name'])[2]//div")
    };
    get totalPrice() {
        return $("(//strong)[1]")
    };
    

    reviewClick() {
        this.waitForPageLoad("Review Project Details");
        this.countinueButton.click();
    }

}
export default new reviewProjectPage();