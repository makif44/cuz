import Page from "../base.page";

class deliveryOptionPage extends Page {

    get deliveryOption() {
        return $("//label[contains(text(),'Select your delivery option')]/..//input")
    };
    get deliveryOptionList() {
        return $("//label[contains(text(),'Select your delivery option')]/..//ul")
    };
    get notAvailableNotification() {
        return $("//div[@class='notice-text']/strong")
    };
    get calculation() {
        return $("(//strong)[1]")
    };

    selectDeliveryOption(arg) {
        
        browser.waitUntil(() =>
            this.deliveryOption.isClickable(), {
                timeout: 5000,
                timeoutMsg: ""
            });
        this.deliveryOption.click();
        this.deliveryOption.setValue(arg);
        browser.waitUntil(() =>
            this.deliveryOptionList.isClickable(), {
                timeout: 5000,
                timeoutMsg: ""
            });
        this.deliveryOptionList.click();
        

    }
}
export default new deliveryOptionPage();