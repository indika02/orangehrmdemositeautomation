const {expect} = require('@playwright/test');
const {Common} = require('../utils/Common');

class CompleteProfilePage{

    constructor(page){
        this.page=page;
        this.commonPage=new Common(page);
        this.orgName='//*[@id="root"]/div/div/div/div/div/div/div/div/div[2]/div/div/form/div/div[1]/div[2]/div[1]/div/div/div/input';
        this.orgSize='//*[@id="root"]/div/div/div/div/div/div/div/div/div[2]/div/div/form/div/div[1]/div[2]/div[2]/div/div/select';
        this.industry='//*[@id="root"]/div/div/div/div/div/div/div/div/div[2]/div/div/form/div/div[1]/div[3]/div[1]/div/div/select';
    }

    async enterOrgName(orgname){
        await this.commonPage.type(this.orgName,orgname);
    }

    async selectOrgSize(size){
        await this.commonPage.selectitem(this.orgSize,size);
    }

    async selectIndustry(Industry){
        await this.commonPage.selectitem(this.industry,Industry)
    }
}

module.exports={CompleteProfilePage};