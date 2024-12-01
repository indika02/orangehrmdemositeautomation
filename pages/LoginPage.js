const { expect } = require('@playwright/test');
const {Common} = require('../utils/Common');

class Loginpage{

    constructor(page){
        this.page=page;
        this.commonPage = new Common(page);
        this.username='#username';
        this.password='#password';
        this.loginbutton='#fm1 > div > div > button';
        this.loginpageAlert='h6';
    }

    async login(username,password){
        await this.commonPage.type(this.username,username);
        await this.commonPage.type(this.password,password);
        await this.commonPage.clickbutton(this.loginbutton);
        await this.page.waitForTimeout(7000);
    }

    async verifyLogoutPageAlert(expectedText) {
        await this.commonPage.verifyText(this.loginpageAlert,expectedText);
    }
}

module.exports={Loginpage};