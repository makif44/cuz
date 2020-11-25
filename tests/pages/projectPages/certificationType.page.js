import Page from "../base.page";

class certificationTypePage extends Page {

    get certification() {
        return $("(//span[@class='w-form-formradioinput w-form-formradioinput--inputType-custom radio-button'])[1]")
    }

    selectCertification(arg) {
        //this.waitForWrapperLoadMaskDisappear();
        browser.waitUntil(() =>
        $("//span[contains(text(),'"+arg+"')]//preceding-sibling::div").isClickable(), {
                timeout: 20000
            });
            $("//span[contains(text(),'"+arg+"')]//preceding-sibling::div").click();
    }
}
export default new certificationTypePage