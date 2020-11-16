import Page from "../base.page";

class projectDetailsPage extends Page {

    get deleteButton() {
        return $("//a[@class='delete-button w-inline-block']")
    }
    get editButton() {
        return $("//a[@class='edit-button w-inline-block']")
    }

    deleteProject() {
        this.waitForWrapperLoadMaskDisappear();
        this.deleteButton.waitForClickable({
            timeout: 10000
        });
        this.deleteButton.click();
        this.confirmationYes.waitForDisplayed();
        this.confirmationYes.click();
    }

    editProject() {
        this.waitForWrapperLoadMaskDisappear();
        browser.waitUntil(() =>
            this.editButton.isClickable(), {
                timeout: 25000,
                timeoutMsg: "edit button is not clickable"
            });
        //this.editButton.waitForClickable({timeout:10000});
        this.editButton.click();
    }
}
export default new projectDetailsPage();