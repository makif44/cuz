export default class Page {

  get profileButton() {
    return $("//div[@class='cuz-navlink-pp empty-pp']")
  };
  get greenWrapperNotification() {
    //return $("//div[@class='status-notification-text green']")
    return $("//div[@class='footer-column left']/div")
  };
  get redWrapperNotification() {
    return $("//div[@class='footer-column left']/div")
  };
  get countinueButton() {
    return $("//span[contains(text(),'CONTINUE')]/..")
  };
  get wraperLoadMask() {
    return $("//div[@class='loading-bar']")
  };
  get pageTitle() {
    return $("//h2[@class='title']")
  };
  get confirmationYes() {
    return $("//span[contains(text(),'Confirm')]")
  };
  get warningMessage() {
    return $("(//div[@class='cuz-alert-wrapper cuz-error']/div)[1]/div")
  };
  get successAlert() {
    return $("(//div[@class='cuz-alert-wrapper cuz-success']/div)[1]/strong")
  };
  get closeButton() {
    return $("//a[@class='close-button w-inline-block nuxt-link-active']")
  };
  get loginText() {
   return $("//div[@class='cuz-navlink-pp empty-pp']/following-sibling::div")
 };


  open(path) {
    browser.url(path);
   
  }

  waitForWrapperLoadMaskDisappear() {
    if (this.greenWrapperNotification.isExisting()) {
        browser.waitUntil(() =>
          this.greenWrapperNotification.getText() !== "Loding...", {
            timeout: 60000,
            timeoutMsg: "what is problem"
          })
      }
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
          timeout: 10000,
          timeoutMsg: 'expected text to be different after 10s'
        });
    }
    waitForElementVerification(arg1, arg2) {
      browser.waitUntil(() =>
      expect(arg1).toHaveTextContaining(arg2), {
          timeout: 25000,
          timeoutMsg: "element is wrong"
        });
    }

    waitForWarningMessage() {
      browser.waitUntil(() =>
        this.warningMessage.isExisting(), {
          timeout: 15000,
          timeoutMsg: "notification not visible"
        });
    }

    waitForSuccessMessage() {
      browser.waitUntil(() =>
        this.successAlert.isExisting(), {
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