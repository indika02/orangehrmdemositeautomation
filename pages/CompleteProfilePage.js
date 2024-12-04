const {expect} = require('@playwright/test');
const {Common} = require('../utils/Common');

class CompleteProfilePage{

    constructor(page){
        this.page=page;
        this.commonPage=new Common(page);
        // organization details
        this.orgName='//*[@id="root"]/div/div/div/div/div/div/div/div/div[2]/div/div/form/div/div[1]/div[2]/div[1]/div/div/div/input';
        this.orgSize='//*[@id="root"]/div/div/div/div/div/div/div/div/div[2]/div/div/form/div/div[1]/div[2]/div[2]/div/div/select';
        this.industry='//*[@id="root"]/div/div/div/div/div/div/div/div/div[2]/div/div/form/div/div[1]/div[3]/div[1]/div/div/select';
        this.contactNo='//*[@id="root"]/div/div/div/div/div/div/div/div/div[2]/div/div/form/div/div[1]/div[3]/div[2]/div/div[1]/div/input';
        this.faxNo='//*[@id="root"]/div/div/div/div/div/div/div/div/div[2]/div/div/form/div/div[1]/div[4]/div/div/div/div/input';
        this.Country='//*[@id="root"]/div/div/div/div/div/div/div/div/div[2]/div/div/form/div/div[1]/div[5]/div[1]/div/div/select';
        this.Division='//*[@id="root"]/div/div/div/div/div/div/div/div/div[2]/div/div/form/div/div[1]/div[5]/div[2]/div/div[1]/select';
        this.District='//*[@id="root"]/div/div/div/div/div/div/div/div/div[2]/div/div/form/div/div[1]/div[6]/div[1]/div/div/div/div/div[1]';
        this.postcode='//*[@id="root"]/div/div/div/div/div/div/div/div/div[2]/div/div/form/div/div[1]/div[6]/div[2]/div/div/div/input';
        this.address='//*[@id="root"]/div/div/div/div/div/div/div/div/div[2]/div/div/form/div/div[1]/div[7]/div/div/div/div/input';
        // contact person details
        this.contactpersonname='//*[@id="root"]/div/div/div/div/div/div/div/div/div[2]/div/div/form/div/div[2]/div[2]/div[1]/div/div[1]/div/input';
        this.birthday='combobox';
    }

    async enterOrgName(orgname){
        await this.commonPage.type(this.orgName,orgname);
    }

    async selectOrgSize(size){
        await this.commonPage.selectitem(this.orgSize,size);
    }

    async selectIndustry(Industry){
        await this.commonPage.selectitem(this.industry,Industry);
    }

    async enterContactno(contact){
        await this.commonPage.type(this.contactNo,contact);
    }

    async enterFaxno(fax){
        await this.commonPage.type(this.faxNo,fax);
    }

    async selectCountry(country){
        await this.commonPage.selectitem(this.Country,country);
    }

    async selectDivision(division){
        await this.commonPage.selectitem(this.Division,division);
    }

    async selectDistrict(district){
        await this.commonPage.keyboardtype(this.District,district);
    }

    async enterPostalCode(post){
        await this.commonPage.type(this.postcode,post);
    }

    async enterAddress(addr){
        await this.commonPage.type(this.address,addr);
    }

    async enterContactpersonname(cpersonname){
        await this.commonPage.type(this.contactpersonname,cpersonname);
    }

    async enterBirthday(bday){
        await this.page.getByRole('combobox',{class:'rw-widget-input rw-input'}).fill(bday);
    }

}

module.exports={CompleteProfilePage};