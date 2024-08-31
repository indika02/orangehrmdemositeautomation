const testData = require('../config/test-data.json');

class Loginpage{

    constructor(page){
        this.page=page;
        this.username='#username';
        this.password='#password';
        this.loginbutton='#fm1 > div > div > button';
        // this.loginUrl=testData.urls.loginUrl;
    }
    // async goto(){
    //     await this.page.goto(this.loginUrl);
    // }

    async login(username,password){
        await this.page.fill(this.username,username);
        await this.page.fill(this.password,password);
        await this.page.click(this.loginbutton);
        await  this.page.waitForTimeout(80000);
    }

  
}

module.exports={Loginpage};