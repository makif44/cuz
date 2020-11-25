import Page from '../base.page'

class ProjectsHomePage extends Page {
    get plusSymbol() {
        return $("//span[@class='cuz-btn-icon cuz-new-project cuz-icon-add']")
    };
    get pageTitle() {
        return $("//h1[@class='cuz-title']")
    };
    get firstProject() {
        return $("(//div[@class='cuz-dynamic-wrapper'])[1]")
    };//a[@class="close-button w-inline-block nuxt-link-active"]
    

    clickProfileButton() {
        //browser.pause(8000);
        this.waitForWrapperLoadMaskDisappear();
        this.profileButton.waitForClickable({
            timeout: 15000
        });
        this.profileButton.click();
    }

    clickPlusSymbol() {
        this.waitForWrapperLoadMaskDisappear();
        browser.waitUntil(() =>
            this.plusSymbol.isClickable(), {
                timeout: 20000,
                timeoutMsg: "Button not clickable"
            });
        this.plusSymbol.click();

    }

    goToFirstProject() {
        this.waitForWrapperLoadMaskDisappear();
        browser.waitUntil(() =>
            this.firstProject.isDisplayed(), {
                timeout: 10000,
                timeoutMsg: "Button not clickable"
            });
        this.firstProject.click();
    }
    
    findProject(arg){
        this.waitForWrapperLoadMaskDisappear();
        browser.waitUntil(() =>
            $("(//h4[contains(text(),'"+arg+"')])[1]/..").isClickable(), {
                timeout: 30000,
                timeoutMsg: "Button not clickable"
            });
        $("(//h4[contains(text(),'"+arg+"')])[1]/..").click();
    }
   
}
export default new ProjectsHomePage();