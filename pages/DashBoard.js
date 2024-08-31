const testData = require('../config/test-data.json');
const { expect } = require('@playwright/test');

class DashBoard{
    
    constructor(page){
        this.page=page;
        this.moduleTitle=page.locator('//*[@id="root"]/div/div/div/div[2]/div/ul/li[1]/a/div/div');
    }

    async verifyModuleName(){
        await expect(this.moduleTitle).toHaveText('User Management',{ timeout: 90000 });  
    }
}

module.exports={DashBoard};