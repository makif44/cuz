import Page from "../base.page";
import utils from "../../utilities/utils";

class translationDetailsPage extends Page {

    get projectTitle() {
        return $("//p[contains(text(),'Project Title')]/../../following-sibling::div//input")
    };
    get dueDate() {
        return $("//p[contains(text(),'When do you need your documents translated?')]/../../following-sibling::div//input")
    };
    get date() {
        return $("//body//span[37]")
    };
    get no() {
        return $("(//span[@class='w-form-formradioinput w-form-formradioinput--inputType-custom radio-button'])[2]")
    }
    get yesHardCopy() {
        return $("//span[starts-with(text(),'Yes')]//preceding-sibling::span")
    }
    get noHardCopy() {
        return $("//span[starts-with(text(),'No')]//preceding-sibling::span")
    }
    get titleWarningField() {
        return $("//div[@class='cuz-field-error-text']")
    };
    get emptyPlace() {
        return $("//div[@class='total-text']")
    };

    selectProjectTitleDueDate(arg1, arg2, arg3, arg4, arg5, arg6) {
        if (arg1 === " ") {
            arg1 = "";
        }
        this.projectTitle.waitForClickable(5000);
        this.projectTitle.setValue(arg1);
        this.dueDate.click();
        //browser.pause(2000);
        utils.selectStartDate(arg2, arg3, arg4);
        utils.selectStartDateTime(arg5, arg6);
        browser.pause(500)

        this.projectTitle.click();
    }

    editProjectTitleDueDate(arg1, arg2, arg3, arg4, arg5, arg6) {
        if (arg1 === " ") {
            arg1 = "";
        }
        this.projectTitle.waitForEnabled(5000);
        this.projectTitle.setValue(arg1);
        this.dueDate.click();
        utils.selectStartDate(arg2, arg3, arg4);
        utils.selectStartDateTime(arg5, arg6);
        this.emptyPlace.click();
        browser.pause(500)

        //this.projectTitle.click();  
    }

    selectHardCopy(arg) {

        this.yesHardCopy.click();

        // }else{
        //     this.noHardCopy.click();
        // }
    }
}
export default new translationDetailsPage();