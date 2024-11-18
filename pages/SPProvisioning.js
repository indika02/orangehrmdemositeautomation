const { expect } = require('@playwright/test');
const { Common } = require('../utils/Common');

class SPProvisioning{
    constructor(page){
        this.page=page;
        this.createNewAppIcon='//*[@id="content"]/div/div/div/div[2]/div[1]/div[2]/div/div[1]/div/img';
        this.appNameTxtBox='//*[@id="false"]';
        this.appDescription='//*[@id="appCreateWizard"]/div/div[2]/div[2]/div[1]/div/div/div/span[1]/div/div/div[3]/div/span/div/textarea';
        this.hostAddress='//*[@id="appCreateWizard"]/div/div[2]/div[2]/div[1]/div/div/div/span[1]/div/div/div[4]/div/span/div/textarea';
        this.whiteListedno='//*[@id="appCreateWizard"]/div/div[2]/div[2]/div[1]/div/div/div/span[1]/div/div/div[5]/div[1]/span/div/textarea';
        this.blackListedno='//*[@id="appCreateWizard"]/div/div[2]/div[2]/div[1]/div/div/div/span[1]/div/div/div[5]/div[2]/span/div/textarea';
        this.buttonNext='#appCreateWizard > div > div.modal-content > div.modal-footer > div > button.btn.app-view-modal__btn--approve';
        this.buttonNext2='//*[@id="appCreateWizard"]/div/div[2]/div[3]/div/button[3]';
        this.smsApi='#appCreateWizard > div > div.modal-content > div.modal-body > div:nth-child(2) > div > div > div:nth-child(2) > div.row.app-creating-modal__api-components > div.col-md-3.col-sm-3.api-option-sms > div > img';
        this.ussdApi='#appCreateWizard > div > div.modal-content > div.modal-body > div:nth-child(2) > div > div > div:nth-child(2) > div.row.app-creating-modal__api-components > div.col-md-3.col-sm-3.api-option-ussd > div > img';
        this.msgUrl='/html/body/div[1]/div/div/div/div[2]/span/div[1]/div/div[2]/div[2]/div[3]/div/div/div[2]/div[1]/div[2]/div/div/div/span/div/input';
        this.smsKeyword='//*[@id="keyword"]';

    }

    async clickCreateNewApp(){
        await this.page.click(this.createNewAppIcon);
        await  this.page.waitForTimeout(4000);
    }

    async enterBasicAppDetails(name,desc,hostAddr,whiteNo,blackNo){
        await this.page.locator(this.appNameTxtBox).fill(name);
        await this.page.locator(this.appDescription).fill(desc);
        await this.page.locator(this.hostAddress).fill(hostAddr);
        await this.page.locator(this.whiteListedno).fill(whiteNo);
        await this.page.locator(this.blackListedno).fill(blackNo);
    }

    async clickNextButton(){
        await this.page.click(this.buttonNext);
        await  this.page.waitForTimeout(4000);
    }

    async clickNextButton2(){
        await this.page.click(this.buttonNext2);
        await  this.page.waitForTimeout(4000);
    }


    async selectApi(){
        await this.page.click(this.smsApi);
        await this.page.click(this.ussdApi);
    }

    async enterMsgUrl(msgurl){
        await this.page.locator(this.msgUrl).fill(msgurl);
       
    }

    async enterSMSKeyword(smsKeyword){
        await this.page.locator(locator.smsKeyword).fill(smsKeyword);
    }
}


module.exports={SPProvisioning};