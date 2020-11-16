import Page from '../base.page'
import data from '../../testData/credentials'

 class LoginEmailPage extends Page{
  

    get emailInbox(){return $("//input[@placeholder='Email']")};
    get continueButton(){return $("button")};
    get invalidEmailError(){return $("//p[@class='error-detail errors-block']")};


    open(){
        super.open("/")
    }

    login( role ){
        let email ='';
        switch(role){
            case 'user':
              email= data['user_email'];
              break;
            case 'translator':
                email= data['translator_email'];
                break;
            case 'invalid':
                email="ad qwe asd.com";
                break;
            default:
                throw 'Invalid role!';
        }
        this.emailInbox.setValue( email);
        
    }
    clickContinue(){
        this.continueButton.waitForEnabled(3000);
        this.continueButton.click();
    }
}
export default new LoginEmailPage()