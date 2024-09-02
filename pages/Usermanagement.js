const { expect } = require('@playwright/test');

class Usermanagement{

    constructor(page){
        this.page=page;
        this.appCreatorsTab='//*[@id="root"]/div/div/div[1]/div/ul[2]/li/a';
        this.appstoreUsersTab='//*[@id="root"]/div/div/div[1]/div/ul[3]/li/a';
    }


    async clickAppCreatorsTab(){
        await this.page.click(this.appCreatorsTab);
        await this.page.waitForTimeout(6000);
    }


    async clickAppstoreUsersTab(){
        await this.page.click(this.appstoreUsersTab);
        await this.page.waitForTimeout(6000);
    }

}

module.exports={Usermanagement};