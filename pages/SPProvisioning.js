const { expect } = require('@playwright/test');
const { Common } = require('../utils/Common');

class SPProvisioning{
    constructor(page){
        this.page=page;
        this.createNewAppIcon='//*[@id="content"]/div/div/div/div[2]/div[1]/div[2]/div/div[1]/div/img';
        this.appNameTxtBox='//*[@id="false"]';
        this.appDescription='//*[@id="appCreateWizard"]/div/div[2]/div[2]/div[1]/div/div/div/span[1]/div/div/div[3]/div/span/div/textarea';
    }

    async clickCreateNewApp(){
        await this.page.click(this.createNewAppIcon);
        await  this.page.waitForTimeout(4000);
    }

    async enterBasicAppDetails(name,desc){
        await this.page.locator(this.appNameTxtBox).fill(name);
        await this.page.locator(this.appDescription).fill(desc)
    }
}


module.exports={SPProvisioning};