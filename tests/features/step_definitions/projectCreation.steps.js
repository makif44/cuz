import {
    Given,
    When,
    Then
} from 'cucumber'
import projectsHomePage from '../../pages/projectPages/projectsHome.page';
import createNewProjectPage from '../../pages/projectPages/createNewProject.page';
import uploadDocumentPage from '../../pages/projectPages/uploadDocument.page';
import selectLanguagePage from '../../pages/projectPages/selelctLanguage.page';
import documentDetailsPage from '../../pages/projectPages/documentDetails.page';
import certificationTypePage from '../../pages/projectPages/certificationType.page';
import translationDetailsPage from '../../pages/projectPages/translationDetails.page';
import legalAidPage from '../../pages/projectPages/legalAid.page';
import selectTranslatorPage from '../../pages/projectPages/selectTranslator.page';
import reviewProjectPage from '../../pages/projectPages/reviewProject.page';
import paymentDetailPage from '../../pages/projectPages/paymentDetail.page';
import projectConclusionPage from '../../pages/projectPages/projectConclusion.page';
import appointmentTypePage from '../../pages/projectPages/appointmentType.page';
import videoCallDetailsPage from '../../pages/projectPages/videoCallDetails.page';
import interpretationDetailsPage from '../../pages/projectPages/interpretationDetails.page';
import projectDetailsPage from '../../pages/projectPages/projectDetails.page';
import appointmentTypeOnSidePage from '../../pages/projectPages/appointmentTypeOnSide.page';
import deliveryDetailsPage from '../../pages/projectPages/deliveryDetails.page';
import deliveryOptionPage from '../../pages/projectPages/deliveryOption.page';
import possibleDeliveryAddress from "../../testData/hardCopyDeliveryData"

When("I click plus symbol", () => {
    projectsHomePage.clickPlusSymbol();
});

When("I select {string} project", (arg1) => {
    createNewProjectPage.clickProject(arg1);
    createNewProjectPage.clickContinue();
});

When("I upload documents {string}", (arg) => {
    uploadDocumentPage.uploadDocAndContinue(arg);
});

When("I upload new documents", () => {
    uploadDocumentPage.uploadNewDocAndContinue();
});

When("I upload invalid document", () => {
    uploadDocumentPage.uploadInvalidDocAndContinue();
});


When("I select language from {string} to {string}", (arg1, arg2) => {
    selectLanguagePage.selectLanguages(arg1, arg2);
});

When("I select new languages from {string} to {string}", (arg1, arg2) => {
    selectLanguagePage.selectNewLanguages(arg1, arg2);
});

When("I select languages from {string} to {string} and {string}", (arg1, arg2, arg3) => {
    selectLanguagePage.selectMultiLanguages(arg1, arg2, arg3);
});

When("I select document type as a {string} and document details {string}", (arg1, arg2) => {
    documentDetailsPage.selectDocumentType(arg1, arg2)
});

When("I select certification type {string}", (arg1) => {
    certificationTypePage.selectCertification(arg1)
});

When("I type project title as a {string} and select date as a {string}-{string}-{string} {string}:{string}", (arg1, arg2, arg3, arg4, arg5, arg6) => {
    translationDetailsPage.selectProjectTitleDueDate(arg1, arg2, arg3, arg4, arg5, arg6);
});

When("I edit project title as a {string} and edit date as a {string}-{string}-{string} {string}:{string}", (arg1, arg2, arg3, arg4, arg5, arg6) => {
    translationDetailsPage.editProjectTitleDueDate(arg1, arg2, arg3, arg4, arg5, arg6);
});

When("I select hard copy {string}", (arg1) => {
    translationDetailsPage.selectHardCopy(arg1)
});

When("I fill out {string} delivery adress", (arg1) => {
    deliveryDetailsPage.fillDeliveryAdress(arg1);
});

When("I select delivery option as {string}", (arg1) => {
    deliveryOptionPage.selectDeliveryOption(arg1);
});

When("I click continue", () => {
    translationDetailsPage.clickContinue();
});

When("I close the project", () => {
    //selectTranslatorPage.waitForTranslator();
    translationDetailsPage.clickCloseButton();
});

When("I find {string} project and click on draft page", (arg) => {
    projectsHomePage.findProject(arg);
});

When("I wait and click continue", () => {
    browser.pause(3000);
    translationDetailsPage.clickContinue();
});

When("I select legal aid details {string}", (arg1) => {
    legalAidPage.selectLegalAid(arg1);
});

When("I select interpreter", () => {
    selectTranslatorPage.selectTranslator();
});

When("I select translator", () => {
    selectTranslatorPage.selectTranslator();
});

When("I select a translator after editing", () => {
    selectTranslatorPage.selectTranslatorAfterEditing();
});

When("I check country not available notification", () => {
    expect(deliveryOptionPage.notAvailableNotification).toHaveTextContaining("Selected country is not available for delivery.");
    browser.pause(1000);
});

When("I check standard delivery fee", () => {
    expect(reviewProjectPage.deliveryFee).toHaveTextContaining("35 CAD");
});

When("I check express delivery fee", () => {

    expect(reviewProjectPage.deliveryFee).toHaveTextContaining("50 CAD");
});

When("I check hard copy info as {string} and address", (arg) => {
    expect(reviewProjectPage.hardCopy).toHaveTextContaining(arg);
    expect(reviewProjectPage.hardCopyAddress).toHaveTextContaining(possibleDeliveryAddress['country']);
    expect(reviewProjectPage.hardCopyAddress).toHaveTextContaining(possibleDeliveryAddress['province']);
    expect(reviewProjectPage.hardCopyAddress).toHaveTextContaining(possibleDeliveryAddress['city']);
    expect(reviewProjectPage.hardCopyAddress).toHaveTextContaining(possibleDeliveryAddress['streetNumber']);
    expect(reviewProjectPage.hardCopyAddress).toHaveTextContaining(possibleDeliveryAddress['postalCode']);
});

When("I check there is no delivery fee in project review", () => {
    expect(reviewProjectPage.deliveryFee).not.toExist();
});

When("I check there is no hard copy field in project review", () => {
    expect(reviewProjectPage.hardCopy).not.toExist();
});

When("I select second interpreter", () => {
    selectTranslatorPage.selectSecondTranslator();
});

When("I select second translator", () => {
    selectTranslatorPage.selectSecondTranslator();
});

When("I check details of project", () => {
    reviewProjectPage.reviewClick();
});

When("I check all details of project", () => {
    expect(reviewProjectPage.ProjectTitle).toHaveText("test");
    expect(reviewProjectPage.AppointmentTopic).toHaveText("Legal");
    expect(reviewProjectPage.AppointmentType).toHaveText("Video Interpretation Job");
    expect(reviewProjectPage.VideoChatPlatform).toHaveText("Skype");
    expect(reviewProjectPage.ContactInformation).toHaveText("chat");
    expect(reviewProjectPage.AppointmentDetails).toHaveText("Arbitrations");
    expect(reviewProjectPage.AppointmentStartDateAndTime).toHaveTextContaining("2021 - 10:00 PM");
    expect(reviewProjectPage.AppointmentEndDateAndTime).toHaveTextContaining("2021 - 11:00 PM");
    expect(reviewProjectPage.FirstInterpreterName).toHaveText("Daisy WERA");
    expect(reviewProjectPage.SecondInterpreterName).toHaveText("Han SOLO");

    reviewProjectPage.reviewClick();
});

When("I check all details of edited interpreter project", () => {
    expect(reviewProjectPage.ProjectTitle).toHaveText("edited test");
    expect(reviewProjectPage.AppointmentTopic).toHaveText("Insurance");
    expect(reviewProjectPage.AppointmentType).toHaveText("On-Site Job");
    expect(reviewProjectPage.AppointmentDetails).toHaveText("Conference Calls");
    expect(reviewProjectPage.AppointmentStartDateAndTime).toHaveTextContaining("2021 - 09:00 PM");
    expect(reviewProjectPage.AppointmentEndDateAndTime).toHaveTextContaining("2021 - 11:00 PM");
    expect(reviewProjectPage.FirstInterpreterName).toHaveText("Daisy WERA");
    expect(reviewProjectPage.SourceLanguage).toHaveTextContaining("English");
    expect(reviewProjectPage.TargetLanguages).toHaveTextContaining("French (Canada)");
    reviewProjectPage.reviewClick();
});

When("I check language details of project {string} {string}", (arg1, arg2) => {
    expect(reviewProjectPage.SourceLanguage).toHaveTextContaining(arg1);
    expect(reviewProjectPage.TargetLanguages).toHaveTextContaining(arg2);
});

When("I check multiple language details of project {string} {string} {string}", (arg1, arg2, arg3) => {
    expect(reviewProjectPage.SourceLanguage).toHaveTextContaining(arg1);
    expect(reviewProjectPage.FirstTargetLanguage).toHaveTextContaining(arg2);
    expect(reviewProjectPage.SecondTargetLanguage).toHaveTextContaining(arg3);
});


When("I check video chat platform as {string} and contact details as {string}", (arg1, arg2) => {
    expect(reviewProjectPage.VideoChatPlatform).toHaveTextContaining(arg1);
    expect(reviewProjectPage.ContactInformation).toHaveTextContaining(arg2);
});

When("I check Appointment Topic and Appointment Details {string} {string}", (arg1, arg2) => {
    expect(reviewProjectPage.AppointmentTopic).toHaveTextContaining(arg1);
    expect(reviewProjectPage.AppointmentDetails).toHaveTextContaining(arg2);

});

When("I check appointment location {string}", (arg1 ) => {
    expect(reviewProjectPage.AppointmentAddress).toHaveTextContaining(arg1);

});

When("I check project title {string}", (arg1 ) => {
    expect(reviewProjectPage.ProjectTitle).toHaveTextContaining(arg1);

});

When("I check due date {string}", (arg1 ) => {
    expect(reviewProjectPage.DueDate).toHaveTextContaining(arg1);

});

When("I check the dress code {string}", (arg1 ) => {
    expect(reviewProjectPage.DressCode).toHaveTextContaining(arg1);

});

When("I check start date {string}, end date {string} and duration {string} hour", (arg1, arg2, arg3) => {
    expect(reviewProjectPage.AppointmentStartDateAndTime).toHaveTextContaining(arg1);
    expect(reviewProjectPage.AppointmentEndDateAndTime).toHaveTextContaining(arg2);
    expect(reviewProjectPage.AppointmentDuration).toHaveTextContaining(arg3);

});

When("I check total price {string}", (arg1 ) => {
    expect(reviewProjectPage.totalPrice).toHaveTextContaining(arg1);

});

When("I check document type details of project {string} {string}", (arg1, arg2) => {
    expect(reviewProjectPage.TypeofDocument).toHaveTextContaining(arg1);
    expect(reviewProjectPage.Subject).toHaveTextContaining(arg2);

});

When("I check certification type details of project {string}", (arg1) => {
    expect(reviewProjectPage.CertificationType).toHaveTextContaining(arg1);

});

When("I check project title details of project {string} {string}", (arg1, arg2) => {
    expect(reviewProjectPage.ProjectTitle).toHaveTextContaining(arg1);
    expect(reviewProjectPage.DueDate).toHaveTextContaining(arg2);

});

When("I check document details of project {string}", (arg1) => {
    expect(reviewProjectPage.documentName).toHaveTextContaining(arg1);

});

When("I enter {string} referal code and select payment method", (arg) => {
    paymentDetailPage.enterReferalCode(arg);
    paymentDetailPage.clickContinue();
});

When("I enter {string} legal aid number and {string}-{string}-{string} date", (arg1, arg2, arg3, arg4) => {
    legalAidPage.enterLANumberAndExpireDate(arg1, arg2, arg3, arg4);
});

When("I select appointment type as {string} interpretation", (arg1) => {
    appointmentTypePage.selectAppointmentType(arg1);
});

When("I select start date {string}-{string}-{string} {string}:{string} and end date {string}-{string}-{string} {string}:{string}", (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) => {
    appointmentTypePage.selectAppointmentDuration(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10);
});

When("I edit start date {string}-{string}-{string} {string}:{string} and end date {string}-{string}-{string} {string}:{string}", (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) => {
    appointmentTypePage.editAppointmentDuration(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10);
});

When("I select location as {string} and Dress Code as {string}", (arg1, arg2) => {
    appointmentTypeOnSidePage.enterAdress(arg1);
    browser.pause(500);
    appointmentTypeOnSidePage.selectDressCode(arg2);
});

When("I select video chat platform as {string} and contact details as {string}", (arg1, arg2) => {
    videoCallDetailsPage.selectProgram(arg1);
    videoCallDetailsPage.enterContactInfo(arg2);
    videoCallDetailsPage.clickContinue();
});

When("I enter project title as {string}, appointment topic as {string} and appointment details as {string}", (arg1, arg2, arg3) => {
    interpretationDetailsPage.enterInterpretationTitle(arg1);
    interpretationDetailsPage.selectAppointmentTopic(arg2);
    interpretationDetailsPage.selectAppointmentDetails(arg3);

});

When("I select the project", () => {
    projectsHomePage.goToFirstProject()
});

When("I click delete button", () => {
    projectDetailsPage.deleteProject();
});

When("I click edit button", () => {
    projectDetailsPage.editProject();
});

When("I delete uploaded document", () => {
    uploadDocumentPage.deleteUploadedFile();
});

Then("I should be on the {string} page", (arg) => {
    projectsHomePage.waitForWrapperLoadMaskDisappear()
    projectsHomePage.waitForPageLoad(arg)
    expect(projectsHomePage.pageTitle).toHaveText(arg)
});

Then("I should able to see project offer sent message", () => {
    projectConclusionPage.waitForPageLoad("Project Offers Sent!");
    expect(projectConclusionPage.pageTitle).toHaveText("Project Offers Sent!")
});

Then("I should be able to see title is required message", () => {
    expect(translationDetailsPage.titleWarningField).toHaveText("This field is required.")
});


Then("I should be able to see code can not be found message", () => {
    expect(paymentDetailPage.referalCodeError).toHaveTextContaining("Code cannot be found.")
});

Then("I should be able to see certification number already exist message", () => {
    expect(legalAidPage).toHaveText("LAO Certification with this Certification Number already exists.")
});

Then("I should be able to see appointment duration notice", () => {
    expect(appointmentTypePage.appointmentDurationNotice).toHaveText("Appointment duration cannot be less than 2 hours.")
});