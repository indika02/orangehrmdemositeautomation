const testData = require('../config/test-data.json');
const { expect } = require('@playwright/test');

class DashBoard{
    
    constructor(page){
        this.page=page;
        this.moduleTitle=page.locator('#root > div > div > div > div.common-access-block > div > ul > li:nth-child(1) > a > div > div');
    }

    async verifyModuleName(){
        await expect(this.moduleTitle).toHaveText('User Management');  
    }
}

module.exports={DashBoard};