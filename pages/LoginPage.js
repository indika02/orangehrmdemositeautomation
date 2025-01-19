const { expect } = require('@playwright/test');
const {Common} = require('../utils/Common');

class Loginpage{

    constructor(page){
        this.page=page;
        this.commonPage = new Common(page);
        this.email='//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input';
        this.password='//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input';
        this.loginbutton='//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button';
        this.forgotPwdlink='//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[4]/p';
        this.usernametxtbox='//*[@id="app"]/div[1]/div[1]/div/form/div[1]/div/div[2]/input';
        this.resetPwdBtn='//*[@id="app"]/div[1]/div[1]/div/form/div[2]/button[2]';
        this.resetpwdconfirmmsg='//*[@id="app"]/div[1]/div[1]/div/h6';
        this.loginErrormsg='//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p';
    }

    async login(username,password){
        await this.commonPage.type(this.email,username);
        await this.commonPage.type(this.password,password);
        await this.commonPage.clickbutton(this.loginbutton);
    }

    async clickForgotPassword(){
        await this.commonPage.clickbutton(this.forgotPwdlink);
        await this.page.waitForTimeout(7000);
    }

    async enterUsername(uname){
        await this.commonPage.type(this.usernametxtbox,uname);
    }

    async ClickresetpasswordBtn(){
        await this.commonPage.clickbutton(this.resetPwdBtn);
    }

    async verifyresetpwdemail(msg){
        await this.commonPage.verifyText(this.resetpwdconfirmmsg,msg);
    }

    async verifyLoginError(error){
        await this.commonPage.verifyText(this.loginErrormsg,error);
    }

}

module.exports={Loginpage};