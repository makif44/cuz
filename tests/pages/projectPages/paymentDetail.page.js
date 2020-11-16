import Page from "../base.page";
import data from "../../testData/profileData"

class paymentDetailPage extends Page{

    get referralCode(){return $("//input[@placeholder='Please Enter a Referral Code']")};
    get referalCodeError(){return $("//div[@class='ref-code']")};
    get defaultPaymentMethod(){return $("default-payment-method")}
    get offerSent(){return $("//h2[@class='title']")};

    
    enterReferalCode(arg){
        this.waitForWrapperLoadMaskDisappear();
        browser.pause(1000);
        browser.waitUntil(() =>
        this.referralCode.isClickable(), {
         timeout: 60000,
         timeoutMsg: "what is problem"
       })
        if(arg==="valid"){
            this.referralCode.setValue(data['referalCode']);
        }else{
            this.referralCode.setValue(arg);
            this.referalCodeError.waitForEnabled({timeout:25000});
        }
        
    }
    selectDefaultPaymentMethod(){
        this.defaultPaymentMethod.click();
    }
   
}
export default new paymentDetailPage();