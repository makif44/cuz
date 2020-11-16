import Page from '../base.page';
import data from '../../testData/credentials'

 class LoginPasswordPage extends Page{

    get emailInbox (){return $("//input[@placeholder='Email']")};
    get passwordInbox() {return $("//input[@placeholder='Password']")};
    get continueButton(){return $("button")};
    get warningMessage(){return $("//div[@class='status-notification-text red']")}
    get VerificationCodeButton(){return $("//button[@class='button-alt w-button gray-alt -alt']")};
//div[@class='status-notification-text green']
//notification-wrapper    
    login(){
        this.passwordInbox.setValue(data['password']);
        this.continueButton.waitForDisplayed(3000)
        this.continueButton.click();
        
    }
    loginParamater(role){
      let password ='';
      switch(role){
          case 'user':
            password= data['user_password'];
            break;
          case 'translator':
            password= data['translator_password'];
              break;
          case 'invalid':
            password='qwerkjlkas'
            break;
          default:
              throw 'Invalid role!';
      }  
      this.passwordInbox.waitForDisplayed({timeout:50000});
      this.passwordInbox.setValue(password);
      this.continueButton.waitForDisplayed({timeout:10000});
      this.continueButton.click();
        
    }
    waitForloginPasswordPageToLoad () {
       this.waitForWrapperLoadMaskDisappear();   
        if(!this.passwordInbox.isEnabled()){
          this.passwordInbox.waitForClickable(10000);
        }
      }
    clickVerificationCodeButton(){
      this.VerificationCodeButton.click();
    }
}
export default new LoginPasswordPage();