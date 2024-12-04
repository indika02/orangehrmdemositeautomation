const {expect} = require('@playwright/test');
const {Common}=require('../utils/Common');

class Settings{
    
    constructor(page){
        this.page=page;
        this.commonPage=new Common(page);
        this.accountactivemsg='//*[@id="root"]/div/div/div[2]/div/div/div/div/div/div[1]/div/div/div/p';
        
    }
    
    async verifyAccountSuccessMsg(expectedText){
        await this.commonPage.verifyText(this.accountactivemsg,expectedText);
    }
}

module.exports={Settings};