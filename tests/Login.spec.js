const {test,expect}=require('@playwright/test');
const {Loginpage}=require('../pages/LoginPage');
const {DashBoard}=require('../pages/DashBoard');
const testData=require('../config/test-data.json');

test.describe('Login page',()=>{
    
    test('Registered users can be able to login successfully by using valid credentials',async({page})=>{

        const loginPage=new Loginpage(page);
        const dashBoard=new DashBoard(page);
        const loginUrl=testData.urls.loginUrl;

        await test.step('Naviagate to the loginpage',async()=>{
            await loginPage.goto(loginUrl);
        })

        await test.step('Login to the user account by using valid credentials',async()=>{
            await loginPage.login(testData.validCredentials.username,testData.validCredentials.password);
        })

        await test.step('Verify the successful login',async()=>{
            await dashBoard.verifyModuleName();
            await page.waitForTimeout(10000);
        })
        
    })
})