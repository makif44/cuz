import Page from "../base.page";

class selectLanguagePage extends Page{

    get countinueButton(){return $("//div[@class='bot-nav-column']/button")};
    get sourceLanguage(){return $("//label[contains(text(),'Source Language')]/..//input")};
    get targetLanguage(){return $("//label[contains(text(),'Target Language')]/..//input")};
    get sourceList(){return $("((//ul[@role='listbox'])[1]/descendant::*)[1]")};
    get targetList(){return $("((//ul[@role='listbox'])[2]/descendant::*)[1]")}
    get deleteTargetLanguage(){return $("(//span[@class='selected-close'])[1]/img")}
    
    selectLanguages(arg1,arg2){
        this.waitForWrapperLoadMaskDisappear();
        this.sourceLanguage.waitForClickable({timeout:20000});
        this.sourceLanguage.click({x: 0, y: 0});
        this.sourceLanguage.setValue(arg1);
        browser.pause(250);
        this.sourceList.click();
        this.targetLanguage.click({x: 0, y: 0});
        this.targetLanguage.setValue(arg2);
        browser.pause(250);
        this.targetList.click({x: 0, y: 0});
        // this.countinueButton.waitForDisplayed(5000);
        // this.countinueButton.click();
        
    }

    selectMultiLanguages(arg1,arg2,arg3){
        this.waitForWrapperLoadMaskDisappear();
        this.sourceLanguage.waitForEnabled(10000);
        this.sourceLanguage.click();
        this.sourceLanguage.setValue(arg1);
        browser.pause(250);
        this.sourceList.click({x: 0, y: 0});
        this.targetLanguage.click({x: 0, y: 0});
        this.targetLanguage.setValue(arg2);
        browser.pause(250);
        this.targetList.click({x: 0, y: 0});
        this.targetLanguage.click({x: 0, y: 0});
        this.targetLanguage.setValue(arg3);
        browser.pause(250);
        this.targetList.click({x: 0, y: 0});
        // this.countinueButton.waitForDisplayed(5000);
        // this.countinueButton.click();
        
    }

    selectNewLanguages(arg1,arg2){
        //this.waitForWrapperLoadMaskDisappear();
        this.sourceLanguage.waitForClickable({timeout:10000});
        this.sourceLanguage.click({x: 0, y: 0});
        this.sourceLanguage.setValue(arg1);
        browser.pause(250);
        this.sourceList.click();
        this.targetLanguage.click({x: 0, y: 0});
        this.targetLanguage.setValue(arg2);
        browser.pause(250);
        this.targetList.click({x: 0, y: 0});
        // this.countinueButton.waitForDisplayed(5000);
        // this.countinueButton.click();
        browser.pause(500);
    }
    deleteTargetLanguages(){
       // this.waitForWrapperLoadMaskDisappear();
        browser.pause(2000);
        browser.waitUntil(() =>
          this.targetLanguage.isDisplayed(), {
             timeout: 10000,
             timeoutMsg: "target language is not clickable"
        });
        this.deleteTargetLanguage.click();
        browser.pause(1000);
        
    }
}
export default new selectLanguagePage();