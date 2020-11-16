import {When,Then, Given, And} from 'cucumber' 
import LoginEmailPage from '../../pages/loginPages/loginEmail.page'
import LoginPasswordPage from '../../pages/loginPages/loginPassword.page'
import TranslationRegistrationPage from '../../pages/translatorRegistration.page'
import loginCodePage from '../../pages/loginPages/loginCode.page';
import projectsHomePage from '../../pages/projectPages/projectsHome.page';

Given("I am on the login page", { wrapperOptions: { retry: 2 } }, () => {
    LoginEmailPage.open('/');
});

When("I login with {string} email adress", (arg1) => {
    LoginEmailPage.login(arg1);
    LoginEmailPage.clickContinue();
});

When("I just login with {string} email adress", (arg1) => {
    LoginEmailPage.login(arg1);
});

When("I login with password", () => {
    LoginPasswordPage.waitForloginPasswordPageToLoad();
    LoginPasswordPage.login();
})

Then("I should be able to see {string} page title", (arg1) => {
    //projectsHomePage.waitForLoadMaskDisappear();
    //projectsHomePage.pageTitle.waitForDisplayed();
    projectsHomePage.waitForPageLoad(arg1)
    expect(projectsHomePage.pageTitle).toHaveText(arg1);

});

When("I login with {string} password", (arg1) => {
    LoginPasswordPage.loginParamater(arg1);
});

Then("I should be able to see {string} message", (arg1) => {
    LoginPasswordPage.waitForloginPasswordPageToLoad()
    expect(LoginPasswordPage.warningMessage).toHaveText(arg1);

});

Then("I should see invalid email error", () => {
    expect(LoginEmailPage.invalidEmailError).toHaveText("Please enter a valid e-mail address.");

});

Then("I login {string} email and {string} password", (username, password) => {
    
    LoginEmailPage.login(username);
    LoginEmailPage.clickContinue();
    LoginPasswordPage. waitForWrapperLoadMaskDisappear();
    //LoginPasswordPage.waitForloginPasswordPageToLoad();
    LoginPasswordPage.loginParamater(password);

});

When("sign up with verification code", () => {
    LoginPasswordPage.clickVerificationCodeButton();
});

When("I enter a invalid sign up code", ()=> {
    loginCodePage.enterInvalidCode();
});

Then("I should see that the code was wrong", ()=> {
    browser.waitUntil(()=>
    loginCodePage.wrongCodeWarning.getText()==="Login code or email is wrong."
    )
    expect(loginCodePage.wrongCodeWarning).toHaveText("Login code or email is wrong.")
});


