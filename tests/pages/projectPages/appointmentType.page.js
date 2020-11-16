import Page from "../base.page";
import utils from "../../utilities/utils";

class appointmentTypePage extends Page {
    get onSiteInterpretation() {
        return $("(//span[@class='w-form-formradioinput w-form-formradioinput--inputType-custom radio-button'])[1]");
    }                     
    get videoInterpretation() {
        return $("(//span[@class='w-form-formradioinput w-form-formradioinput--inputType-custom radio-button'])[2]");
    }
    get startDate() {
        return $("(//input[@class='dropdown-search with-icon calender w-input flatpickr-input'])[1]");
    }
    get endDate() {
        return $("(//div[@class='datepicker w-container']/input)[2]");
    }
    get appointmentDurationNotice(){
        return $("//div[contains(text(),'Appointment duration cannot be less than 2 hours.')]");
    }
    get emptyPlace(){
        return $("//label[1]");
    }

    selectAppointmentType(arg) {
        //this.waitForWrapperLoadMaskDisappear();
        this.onSiteInterpretation.waitForClickable();
        //browser.pause(1000);
        if (arg == "On-site") {
            this.onSiteInterpretation.click();
        } else {
            this.videoInterpretation.click();
        }
    }

    selectAppointmentDuration(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
        this.startDate.waitForEnabled();
        this.startDate.click();
        this.startDate.setValue("2020-08-04 04:34")
        utils.selectStartDate(arg1, arg2, arg3);
        utils.selectStartDateTime(arg4, arg5);
        this.endDate.click();
        this.endDate.setValue("2020-08-04 04:34");
        browser.pause(500);
        utils.selectEndDate(arg6, arg7, arg8);
        utils.selectEndDateTime(arg9, arg10);
        this.emptyPlace.click()
        browser.pause(250);
    }

    editAppointmentDuration(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
        this.startDate.waitForEnabled();
        this.startDate.click();
        //this.startDate.setValue("2020-08-04 04:34")
        utils.editStartDate(arg1, arg2, arg3);
        utils.selectStartDateTime(arg4, arg5);
        this.endDate.click();
       // this.endDate.setValue("2020-08-04 04:34");
        browser.pause(500);
        utils.editEndDate(arg6, arg7, arg8);
        utils.selectEndDateTime(arg9, arg10);
        this.emptyPlace.click()
        browser.pause(250);
    }
}
export default new appointmentTypePage();