import {
    When,
    Then,
    Given,
    And
} from 'cucumber'
import LoginEmailPage from '../../pages/loginPages/loginEmail.page'
import LoginPasswordPage from '../../pages/loginPages/loginPassword.page'
import loginCodePage from '../../pages/loginPages/loginCode.page';
import projectsHomePage from '../../pages/projectPages/projectsHome.page';
import FakemailPage from '../../pages/fakeMail/fakemail';
import SetPasswordPage from '../../pages/loginPages/setPassword.page';

Given("I am on the login page", () => {
    LoginEmailPage.open('/');
});

Given("I am on the projects page", () => {
    LoginEmailPage.open('/');

    if (LoginEmailPage.loginText.getText().includes("Log in")) {
        LoginEmailPage.login2("translationcuz@gmail.com");
        LoginEmailPage.clickContinue();
        LoginPasswordPage.waitForloginPasswordPageToLoad();
        LoginPasswordPage.login("`12qwe");
        browser.waitUntil(() =>
            projectsHomePage.plusSymbol.isClickable(), {
                timeout: 60000,
                timeoutMsg: "contiue button is not clickable"
            });
    }
});

When("I enter new user email and verification code", () => {
    FakemailPage.getLoginCode();
});

When("I create new password {string}", (arg1) => {
    SetPasswordPage.enterNewPassword(arg1)
    LoginEmailPage.clickContinue();
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

When("I delete cookies", () => {
    browser.deleteCookies();
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

Then("I should be able to see {string} error message", (arg1) => {
    LoginPasswordPage.waitForWarningMessage();
    //LoginPasswordPage.waitForloginPasswordPageToLoad()
    expect(LoginPasswordPage.warningMessage).toHaveText(arg1);

});

Then("I should be able to see {string} success message", (arg1) => {
    LoginPasswordPage.waitForSuccessMessage();
    //LoginPasswordPage.waitForloginPasswordPageToLoad()
    expect(LoginPasswordPage.successAlert).toHaveText(arg1);

});

Then("I should see invalid email error", () => {
    expect(LoginEmailPage.invalidEmailError).toHaveText("Please enter a valid e-mail address.");

});

Then("I login {string} email and {string} password", (username, password) => {

    LoginEmailPage.login(username);
    LoginEmailPage.clickContinue();
    LoginPasswordPage.waitForWrapperLoadMaskDisappear();
    //LoginPasswordPage.waitForloginPasswordPageToLoad();
    LoginPasswordPage.loginParamater(password);

});

When("sign up with verification code", () => {
    LoginPasswordPage.clickVerificationCodeButton();
});

When("I enter a invalid sign up code", () => {
    loginCodePage.enterInvalidCode();
});

Then("I should see that the code was wrong", () => {
    browser.waitUntil(() =>
        loginCodePage.wrongCodeWarning.getText() === "Login code or email is wrong."
    )
    expect(loginCodePage.wrongCodeWarning).toHaveText("Login code or email is wrong.")
});