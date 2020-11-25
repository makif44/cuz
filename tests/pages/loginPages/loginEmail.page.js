import Page from '../base.page'
import data from '../../testData/credentials'

 class LoginEmailPage extends Page{
  

    get emailInbox(){return $("//input[@placeholder='Email']")};
    get invalidEmailError(){return $("//div[@class='cuz-field-error-text']")};


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

    login2( email ){
        
        this.emailInbox.setValue( email);
        
    }
    
}
export default new LoginEmailPage()