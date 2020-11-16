import Page from "../base.page";
import utils from "../../utilities/utils";

class appointmentTypeOnSidePage extends Page {
    get appointmentAdress() {
        return $("//input[@class='text-field w-input']");
    }  
    get appointmentAdressList() {
        return $("(//a[@class='dropdown-item'])[1]   ");
    }   
    get dressCode() {
        return $("(//span[@class='w-form-formradioinput w-form-formradioinput--inputType-custom radio-button'])[1]");
    }
   

    enterAdress(arg) {
      this.appointmentAdress.setValue(arg);
      this.appointmentAdressList.waitForDisplayed({timeout:20000});
      this.appointmentAdressList.click();
    }

    selectDressCode(arg){
        $("//span[starts-with(text(),'"+arg+"')]//preceding-sibling::span").click();
    }
}
export default new appointmentTypeOnSidePage();