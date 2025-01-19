const { expect } = require('@playwright/test');
const {Common} = require('../utils/Common');

class PIM{
    constructor(page){
        this.page=page;
        this.commonPage = new Common(page);
        this.pimTab='//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a';
        this.addBtn='//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button';
        this.empImage='//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[1]/div/div[2]/input';
        this.fname='First Name';
        this.mname='Middle Name';
        this.lname='Last Name';
        this.createLoginToggle='//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[2]/div/label/span';
        this.username='//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[3]/div/div[1]/div/div[2]/input';
        this.password='//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[4]/div/div[1]/div/div[2]/input';
        this.confirmpassword='//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[4]/div/div[2]/div/div[2]/input';
        this.saveBtn='//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]';
        this.empnamesearchbox='//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div/input';
        this.searchBtn='//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]';
        this.empDataRow='//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div/div';
    }

    async clickPIMTab(){
        await  this.commonPage.clickbutton(this.pimTab);
    }

    async clickAddBtn(){
        await this.commonPage.clickbutton(this.addBtn);
        await this.page.waitForTimeout(4000);
    }

    async uploadEmpImage(){
        await this.commonPage.uploadFile(this.empImage,'images/image.jpg');
    }

    async fillEmpForm(fname,mname,lname){
        await this.commonPage.enterTextthroughPlaceholder(this.fname,fname);
        await this.commonPage.enterTextthroughPlaceholder(this.mname,mname);
        await this.commonPage.enterTextthroughPlaceholder(this.lname,lname);
    }

    async ClickcreateLoginDetailsToggle(){
        await this.commonPage.clickbutton(this.createLoginToggle);
    }

    async enternewlogincredentials(uname,pwd,cpwd){
        await this.commonPage.type(this.username,uname);
        await this.commonPage.type(this.password,pwd);
        await this.commonPage.type(this.confirmpassword,cpwd);
    }

    async clickSaveBtn(){
        await this.commonPage.clickbutton(this.saveBtn);
        await this.page.waitForTimeout(4000);
    }

    async searchByempName(text){
        await this.commonPage.type(this.empnamesearchbox,text);
    }

    async clickSearchbtn(){
        await this.commonPage.clickbutton(this.searchBtn);
        await this.page.waitForTimeout(6000);
    }

    async clickEmpDataRow(){
        await this.commonPage.clickbutton(this.empDataRow);
        await this.page.waitForTimeout(6000);
    }
}

module.exports={PIM};