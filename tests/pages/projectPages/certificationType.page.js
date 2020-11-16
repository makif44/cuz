import Page from "../base.page";

class certificationTypePage extends Page {

    get certification() {
        return $("(//span[@class='w-form-formradioinput w-form-formradioinput--inputType-custom radio-button'])[1]")
    }

    selectCertification(arg) {
        //this.waitForWrapperLoadMaskDisappear();
        browser.waitUntil(() =>
        $("//span[starts-with(text(),'"+arg+"')]//preceding-sibling::span").isClickable(), {
                timeout: 10000
            });
            $("//span[starts-with(text(),'"+arg+"')]//preceding-sibling::span").click();
    }
}
export default new certificationTypePage