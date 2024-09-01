const { expect } = require('@playwright/test');

class Loginpage{

    constructor(page){
        this.page=page;
        this.username='#username';
        this.password='#password';
        this.loginbutton='#fm1 > div > div > button';
        this.loginpageAlert='h6';
    }

    async login(username,password){
        await this.page.fill(this.username,username);
        await this.page.fill(this.password,password);
        await this.page.click(this.loginbutton);
        await  this.page.waitForTimeout(50000);
    }

    async verifyLogoutPageAlert(expectedText) {
        await expect(this.page.locator(this.loginpageAlert)).toHaveText(expectedText, { timeout: 90000 });
    }
}

module.exports={Loginpage};