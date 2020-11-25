import Page from "../base.page";
const path = require('path'); 
var pdfFilePath = path.join(__dirname, '../../testData/uploadFiles/pdf file.pdf');
var pdfFilePath2 = path.join(__dirname, '../../testData/uploadFiles/pdf2 file.pdf');
var batFilePath = path.join(__dirname, '../../testData/uploadFiles/bat file.bat');
var pngFilePath = path.join(__dirname, '../../testData/uploadFiles/png file.png')
class uploadDocument extends Page {

    get dragDropField() {
        return $("//input[@type='file']")
    };
    get invalidTypeWarning() {
        return $("//div[@class='cuz-alert-wrapper cuz-error small']//strong")
    }
    get deleteFileIcon() {
        return $("(//span[@class=cuz-dynamic-icon trash cuz-icon-trash'])[1]")
    }

    uploadDocAndContinue(arg) {
        //browser.pause(5000)
        this.dragDropField.waitForEnabled(5000);
        switch(arg) {
            case "pdf1":
                this.dragDropField.setValue(pdfFilePath);
              break;
            case "pdf2":
                this.dragDropField.setValue(pdfFilePath2);
              break;
            case "png":
                this.dragDropField.setValue(pngFilePath);
              break;
            // case "pdf2":
            //     this.dragDropField.setValue(pdfFilePath2);
            //   break;
            default:
              // code block
          }
       
        this.countinueButton.waitForClickable({
            timeout: 60000
        });
        this.countinueButton.click();
    }

    uploadNewDocAndContinue() {
        this.dragDropField.waitForEnabled(5000);
        this.dragDropField.setValue(pdfFilePath2);
        this.countinueButton.waitForClickable({
            timeout: 60000
        });
        this.countinueButton.click();
    }

    uploadInvalidDocAndContinue() {
        this.dragDropField.waitForEnabled(5000);
        this.dragDropField.setValue(batFilePath);
        // this.countinueButton.waitForClickable({
        //     timeout: 50000
        // });
        // this.countinueButton.click();
    }

    deleteUploadedFile(){
        this.deleteFileIcon.waitForClickable();
        this.deleteFileIcon.click();
        this.waitForWrapperLoadMaskDisappear();
    }

}
export default new uploadDocument();