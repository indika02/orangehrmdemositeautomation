const { expect } = require('@playwright/test');

class Loginpage{

    constructor(page){
        this.page=page;
        this.username='#username';
        this.password='#password';
        this.loginbutton='#fm1 > div > div > button';
        this.usernameicon='//*[@id="common-header"]/div/ul[2]/li[3]/a';
        this.logoutLink='//*[@id="common-header"]/div/ul[2]/li[3]/div/ul/li/a';
        this.loginpageAlert='h6';
    }

    async login(username,password){
        await this.page.fill(this.username,username);
        await this.page.fill(this.password,password);
        await this.page.click(this.loginbutton);
        await  this.page.waitForTimeout(50000);
    }
    
    async logout(){
        await this.page.hover(this.usernameicon);
        await this.page.waitForTimeout(7000);
        await this.page.click(this.logoutLink);
        await this.page.waitForTimeout(7000);
    }

    async verifyLogoutPageAlert(expectedText) {
        await expect(this.page.locator(this.loginpageAlert)).toHaveText(expectedText, { timeout: 90000 });
    }
}

module.exports={Loginpage};