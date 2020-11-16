import Page from "../base.page";

class interpretationDetailsPage extends Page{
    get interpretationTitle(){
        return $("//label[contains(text(),'Interpretation Title')]/following-sibling::input")
    }
    get appointmentTopic(){
        return $("(//div[@class='component-wrapper']//input)[2]");
    }
    get appointmentTopicList(){
        return $("(//ul[contains(@id,'listbox')])[1]")
    }
    get appointmentDetails(){
        return $("(//div[@class='component-wrapper']//input)[3]");
    }
    get appointmentDetailsList(){
        return $("(//ul[contains(@id,'listbox')])[2]");
    }

    enterInterpretationTitle(arg1){
        if (arg1===" ") {
            arg1="";
        }
        //this.waitForWrapperLoadMaskDisappear();
        this.interpretationTitle.waitForEnabled({timeout:20000});
        this.interpretationTitle.setValue(arg1);
        browser.pause(500);
    }
    
    selectAppointmentTopic(arg1){
        this.appointmentTopic.setValue(arg1);
        browser.pause(250);
        this.appointmentTopicList.click();
    }

    selectAppointmentDetails(arg1){
        this.appointmentDetails.setValue(arg1);
        browser.pause(250);
        this.appointmentDetailsList.click();
    }

}
export default new interpretationDetailsPage();