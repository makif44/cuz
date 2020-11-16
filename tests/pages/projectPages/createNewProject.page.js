import Page from "../base.page";

class createNewProjectPage extends Page{

    get translationProject(){return $("//h3[contains(text(),'Translation Project')]")};
    get interpretationProject(){return $("//h3[contains(text(),'Interpretation Project')]")}
    get countinueButton(){return $("div.footer-section div.footer.w-container:nth-child(1) div.bot-nav-wrapper div.bot-nav-column > button.button.w-button.blue")};

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