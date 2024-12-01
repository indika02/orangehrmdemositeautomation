const { expect } = require('@playwright/test');
const {Common} = require('../utils/Common');

class SdpProvisioning{

    constructor(page){
        this.page=page;
        this.commonPage=new Common(page);
        this.newApp='#content > div > div > div > div.content-block > div.container > div.card-view > div > div:nth-child(1) > div'; 
        this.provisioning='//*[@id="root"]/div/div/div/div[2]/div/ul/li[2]/a/div/img'; 
        this.changeStateBtn='//*[@id="appViewModal"]/div/div/div[4]/div[3]/div[2]/button';
    }

    async clickSDProvisioningIcon(){
        await this.page.click(this.provisioning);
        await this.page.waitForTimeout(3000);
    }

    async clickFirstApp() {
        await this.page.click(this.newApp);
        await this.page.waitForTimeout(6000);
    }

    async clickChangeStateBtn(){
        await this.page.click(this.changeStateBtn);
        await this.page.waitForTimeout(3000);
    }
}

module.exports={SdpProvisioning};