const testData = require('../config/test-data.json');
const { expect } = require('@playwright/test');

class DashBoard{
    
    constructor(page){
        this.page=page;
        this.moduleTitle='#root > div > div > div > div.common-access-block > div > ul > li:nth-child(1) > a > div > div';
        this.usernameicon='//*[@id="common-header"]/div/ul[2]/li[3]/a';
        this.adminLogoutLink='//*[@id="common-header"]/div/ul[2]/li[3]/div/ul/li/a';
        this.spLogoutLink='//*[@id="common-header"]/div/ul[2]/li[3]/div/ul/li[2]/a';
        this.moduleIcon='//*[@id="common-header"]/div/ul[2]/li[2]/a';
    }

    async adminLogout(){
        await this.page.hover(this.usernameicon);
        await this.page.waitForTimeout(7000);
        await this.page.click(this.adminLogoutLink);
        await this.page.waitForTimeout(7000);
    }

    async spLogout(){
        await this.page.hover(this.usernameicon);
        await this.page.waitForTimeout(7000);
        await this.page.click(this.spLogoutLink);
        await this.page.waitForTimeout(7000);
    }

    async verifyModuleName(expectedText){
        await expect(this.page.locator(this.moduleTitle)).toHaveText(expectedText,{ timeout: 90000 });  
    }
    
    async hoverModuleIcon(){
        await this.page.hover(this.moduleIcon);
        await this.page.waitForTimeout(6000);
    }


}

module.exports={DashBoard};