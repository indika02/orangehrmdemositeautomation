const testData = require('../config/test-data.json');
const { expect } = require('@playwright/test');
const { Common } = require('../utils/Common');

class DashBoard{
    
    constructor(page){
        this.page=page;
        this.commonPage=new Common(page);
        this.dashboard='//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6';
        this.usernameDropdown='//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/span/p';
        this.empusernameDropdown='//*[@id="app"]/div[1]/div[1]/header/div[1]/div[2]/ul/li/span/p';
        this.logoutLink='//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/ul/li[4]/a';
        this.emplogoutLink='//*[@id="app"]/div[1]/div[1]/header/div[1]/div[2]/ul/li/ul/li[4]/a';
        this.searchBox='//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/div/div/input';
    }

    async hoverusernamedropdown(){
        await this.commonPage.clickbutton(this.usernameDropdown);
    }
    async hoverempusernamedropdown(){
        await this.commonPage.clickbutton(this.empusernameDropdown);
    }
    async Logout(){
        await this.commonPage.clickbutton(this.logoutLink);
        await this.page.waitForTimeout(7000);
    }

    async searchFunction(text){
        await this.commonPage.type(this.searchBox,text);
        await this.page.waitForTimeout(4000);
    }

    async verifyLogin(expectedText){
        await this.commonPage.verifyText(this.dashboard,expectedText);
    }


}

module.exports={DashBoard};