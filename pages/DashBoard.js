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
        this.userManagementIcon='//*[@id="root"]/div/div/div/div[2]/div/ul/li[1]/a';
        this.SPprovisioningIcon='//*[@id="root"]/div/div/div/div[2]/div/ul/li[1]/a';
        this.homeIcon='//*[@id="bs-example-navbar-collapse-1"]/ul/li[1]/a';
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

    async clickUserManagementIcon(){
        await this.page.click(this.userManagementIcon);
        await this.page.waitForTimeout(6000);
    }

    async clickSPprovisioningIcon(){
        await this.page.click(this.SPprovisioningIcon);
        await this.page.waitForTimeout(3000);
    }

    async clickHomeIcon(){
        await this.page.click(this.homeIcon);
    }
}

module.exports={DashBoard};