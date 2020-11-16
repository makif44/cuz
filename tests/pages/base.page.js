 export default class Page {

   get profileButton() {
     return $("//div[@class='text-block']")
   };
   get greenWrapperNotification() {
     //return $("//div[@class='status-notification-text green']")
     return $("//div[@class='footer-column left']/div")
   };
   get redWrapperNotification() {
     return $("//div[@class='footer-column left']/div")
   };
   get countinueButton() {
     return $("//button[contains(text(),'Continue')]")
   };
   get wraperLoadMask() {
     return $("//div[@class='loading-bar']")
   };
   get pageTitle() {
     return $("//h2[@class='title']")
   };
   get confirmationYes() {
     return $("//button[contains(text(),'Yes')]")
   };
   get warningMessage() {
     return $("//div[contains(text(),'Warning')]")
   };
   get closeButton() {
     return $("//a[@class='close-button w-inline-block nuxt-link-active']")
   };


   open(path) {
     browser.url(path);
   }

   waitForWrapperLoadMaskDisappear() {
     browser.waitUntil(() =>
       this.greenWrapperNotification.getText() !== "Loding...", {
         timeout: 60000,
         timeoutMsg: "what is problem"
       })
   }

   clickContinue() {
     //this.waitForWrapperLoadMaskDisappear()
     browser.waitUntil(() =>
       this.countinueButton.isClickable(), {
         timeout: 60000,
         timeoutMsg: "contiue button is not clickable"
       });
     this.countinueButton.click();
   }

   waitForPageLoad(arg1) {
     browser.waitUntil(
       () => this.pageTitle.getText() === arg1, {
         timeout: 20000,
         timeoutMsg: 'expected text to be different after 10s'
       });
   }
   waitForNotification() {
     browser.waitUntil(() =>
       editProfilePage.greenWrapperNotification.getText() !== "Loading...", {
         timeout: 25000,
         timeoutMsg: "notification not visible"
       });
   }

   clickCloseButton() {
    // browser.waitUntil(() =>
    // this.closeButton.isClickable(), {
    //   timeout: 60000,
    //   timeoutMsg: "contiue button is not clickable"
    // });
    browser.pause(5000);
     this.closeButton.click();
     
   }

 }
 // export default new Page();