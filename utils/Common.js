const testData = require('../config/test-data.json');
const { expect } = require('@playwright/test');
const { timeout } = require('../playwright.config');

class Common{


    constructor(page){
        this.page=page;
        this.testData=testData;
    }

    async goto(){
        await this.page.goto(this.testData.urls.loginUrl);
    }

    async clearTextBox(locator){
        await this.page.locator(locator).fill('');
    }

    async type(locator,text){
        await this.page.fill(locator,text);
    }

    async hoverbtn(locator){
        await this.page.hover(locator);
    }
    async clickbutton(locator){
        await this.page.click(locator);
    }

    async verifyText(locator,text){
        await expect(this.page.locator(locator)).toHaveText(text,{ timeout: 90000 });
    }
}



module.exports={Common};
