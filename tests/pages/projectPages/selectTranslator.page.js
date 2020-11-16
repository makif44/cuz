import Page from "../base.page";

class selectTranslatorPage extends Page {

    get translator() {
        return $("(//div[@class='card selectable'])[1]")
    };
    get translator2() {
        return $("//div[@class='details-column']")
    };
    get language1() {
        return $("//div[@class='tab active']")
    };
    get language2() {
        return $("//div[@class='tab']")
    };
    get message() {
        return $("//p[contains(text(),'Here are the most qualified translators for your p')]")
    };
    selectTranslator() {
        this.waitForWrapperLoadMaskDisappear();
        browser.waitUntil(() =>
            this.translator.isClickable(), {
                timeout: 60000,
                timeoutMsg: "translator is not clickable"
            })
        browser.pause(1000);
        this.translator.click();
    }
    
    selectTranslatorAfterEditing() {

        browser.pause(5000)
        this.translator.click();
    }

    selectSecondTranslator() {
        this.language2.click();
        this.waitForWrapperLoadMaskDisappear();
        browser.waitUntil(() =>
            this.translator2.isClickable(), {
                timeout: 60000,
                timeoutMsg: "translator 2 is not clickable"
            })
        browser.pause(1000)
        this.translator2.click();
    }
   
    waitForTranslator() {
        this.waitForWrapperLoadMaskDisappear();
        browser.waitUntil(() =>
            this.translator.isClcikable(), {
                timeout: 60000,
                timeoutMsg: "translator is not clickable"
            })
    }
}
export default new selectTranslatorPage();