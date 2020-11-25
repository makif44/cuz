import Page from "../base.page";

class createNewProjectPage extends Page{

    get translationProject(){return $("//div[contains(text(),'Document Translation')]")};
    get interpretationProject(){return $("//div[contains(text(),'Interpretation')]")}

    clickProject(arg){
        //this.translationProject.waitForEnabled(5000);
        if(arg==="translation"){
            this.translationProject.click();
        }else if(arg==="interpretation"){
            this.interpretationProject.click();
        }else{
            throw "Invlid project type!"
        }
        // //this.countinueButton.waitForDisplayed(5000);
        // this.countinueButton.click();
    }

}
export default new createNewProjectPage();