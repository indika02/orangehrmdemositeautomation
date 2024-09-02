const testData = require('../config/test-data.json');

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
}



module.exports={Common};
