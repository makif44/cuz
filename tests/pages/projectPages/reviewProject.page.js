import Page from "../base.page";

class reviewProjectPage extends Page {
    //label[contains(text(),'Video Chat Platform')]/following-sibling::div
    get ProjectTitle() {
        return $("//label[contains(text(),'Project Title')]/following-sibling::div")
    };
    get VideoChatPlatform() {
        return $("//label[contains(text(),'Video Chat Platform')]/following-sibling::div")
    };
    get ContactInformation() {
        return $("//label[contains(text(),'Contact Information')]/following-sibling::div")
    };
    get SourceLanguage() {
        return $("//label[contains(text(),'Source Language')]/following-sibling::div")
    };
    get TargetLanguages() {
        return $("(//label[contains(text(),'Target Language')]/following-sibling::div/span)[1]")
    };
    get AppointmentTopic() {
        return $("//label[contains(text(),'Appointment Topic')]/following-sibling::div")
    };
    get AppointmentDetails() {
        return $("//label[contains(text(),'Appointment Details')]/following-sibling::div")
    };
    get AppointmentType() {
        return $("//label[contains(text(),'Appointment Type')]/following-sibling::div")
    };
    get AppointmentStartDateAndTime() {
        return $("//label[contains(text(),'Appointment Start Date and Time')]/following-sibling::div")
    };
    get AppointmentEndDateAndTime() {
        return $("//label[contains(text(),'Appointment End Date and Time')]/following-sibling::div")
    };
    get AppointmentAddress() {
        return $("//label[contains(text(),'Appointment Address')]/following-sibling::div")
    };
    get AppointmentDuration() {
        return $("//label[contains(text(),'Appointment Duration')]/following-sibling::div")
    };
    get CertificationType() {
        return $("//label[contains(text(),'Certification Type')]/following-sibling::div")
    };
    get TypeofDocument() {
        return $("//label[contains(text(),'Type of Document')]/following-sibling::div")
    };
    get Subject() {
        return $("//label[contains(text(),'Subject')]/following-sibling::div")
    };
    get DueDate() {
        return $("//label[contains(text(),'Due Date')]/following-sibling::div")
    };
    get DressCode() {
        return $("//label[contains(text(),'Dress Code')]/following-sibling::div")
    };
    get FirstInterpreterName() {
        return $("(//div[@class='file-name---doc-card'])[1]")
    };
    get SecondInterpreterName() {
        return $("(//div[@class='file-name---doc-card'])[2]")
    };
    get SourceLanguage() {
        return $("//label[contains(text(),'Source Language')]/following-sibling::div")
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