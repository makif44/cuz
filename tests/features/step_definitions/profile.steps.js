import {When,Then, Given,} from 'cucumber'
import ProjectPage from '../../pages/projectPages/projectsHome.page'
import profileSettingPage from '../../pages/profilePages/profileSetting.page';
import editProfilePage from '../../pages/profilePages/editProfile.page';
import profilePage from '../../pages/profilePages/profile.page';
import uploadDocumentPage from '../../pages/projectPages/uploadDocument.page';


When("I click profile button", ()=> {
    ProjectPage.clickProfileButton();
});

When("I go to settings and {string} section", (arg1)=> {
    profilePage.clickSettingButton();
    profileSettingPage.clickSettingSubs(arg1)
});

When("I update profile data", ()=> {
    editProfilePage.updatedata();
});

When("I create new profile data", ()=> {
    editProfilePage.createData();
});

Then("I should be able to see {string} green wrapper notification", (arg1)=> {
    editProfilePage.waitForWrapperLoadMaskDisappear();
    //editProfilePage.greenWrapperNotification.waitForDisplayed(5000)
    browser.waitUntil(()=>
         editProfilePage.greenWrapperNotification.getText()!=="Loading..."
    , {timeout:25000, timeoutMsg:"notification not visible"});
    expect(editProfilePage.greenWrapperNotification).toHaveText(arg1);
});

Then("I should be able to see {string} red wrapper notification", (arg1)=> {
    //editProfilePage.waitForWrapperLoadMaskDisappear();
    browser.waitUntil(()=>
         editProfilePage.redWrapperNotification.isDisplayed(),
    {timeout:10000, timeoutMsg:"notification not visible"});
    //editProfilePage.redWrapperNotification.waitForDisplayed(3000)
    expect(editProfilePage.redWrapperNotification).toHaveText(arg1);
});

Then("I should be able to see warning notification {string}", (arg1)=> {
    //editProfilePage.waitForWrapperLoadMaskDisappear();
    browser.waitUntil(()=>
         editProfilePage.warningMessage.isDisplayed(),
    {timeout:10000, timeoutMsg:"notification not visible"});
    //editProfilePage.redWrapperNotification.waitForDisplayed(3000)
    expect(editProfilePage.warningMessage).toHaveText(arg1);
});

Then("I should be able to see invalid document type notification", ()=> {
    uploadDocumentPage.invalidTypeWarning.waitForDisplayed();
    expect(uploadDocumentPage.invalidTypeWarning).toHaveTextContaining('could not be loaded.');

});


When("I enter invalid {string} name, {string} last name, {string} phone number, {string} city name", (arg1,arg2,arg3,arg4)=> {
    editProfilePage.editInvalidName(arg1);    
    editProfilePage.editInvalidLastName(arg2);
    editProfilePage.editInvalidPhone(arg3);
    editProfilePage.editInvalidCity(arg4);
});

Then("I should be able to see all profile warning messages", ()=> {
    expect(editProfilePage.nameWarningField).toHaveText("This field may only contain alphabetic characters as well as spaces.");
    expect(editProfilePage.lastNameWarningField).toHaveText("This field may only contain alphabetic characters as well as spaces.");
    expect(editProfilePage.phoneWarningField).toHaveText("This field must be at least 10 characters.");
    expect(editProfilePage.cityWarningField).toHaveText("This field may only contain alphabetic characters as well as spaces.");
});

