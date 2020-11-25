import Page from '../base.page';

class SetPasswordPage extends Page {
    get newPassword() {
        return $("(//input[@type='password'])[1]")
    }
    get confirmNewPassword() {
        return $("(//input[@type='password'])[2]")
    }

    enterNewPassword(arg) {
        this.newPassword.waitForClickable();
        this.newPassword.setValue(arg);
        this.confirmNewPassword.setValue(arg);
        this.countinueButton.click();
    }

}
export default new SetPasswordPage();