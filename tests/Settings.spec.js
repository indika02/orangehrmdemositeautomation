const {test,expect}=require('@playwright/test');
const{Settings}=require('../pages/Settings');
const {Loginpage}=require('../pages/LoginPage');
const {DashBoard}=require('../pages/DashBoard');
const testData=require('../config/test-data.json');
const { Common } = require('../utils/Common');

test.describe('Settings',()=>{

    let page;
    let commonPage;
    let loginPage;
    let dashBoard;
    let settings;

    test.beforeAll(async({browser})=>{

        const context=await browser.newContext();
        page=await context.newPage();

        commonPage=new Common(page);
        loginPage=new Loginpage(page);
        dashBoard=new DashBoard(page);
        settings=new Settings(page);
    });

    test('Verify the Account verification message in sp account',async()=>{

        await test.step('Navigae to the loginpage',async()=>{
            await commonPage.goto();
        })
        await test.step('Login to the sp user account',async()=>{
            await loginPage.login(testData.validCredentials['sp-user'].username,testData.validCredentials['sp-user'].password);
        })
        await test.step('click the profile icon',async()=>{
            await dashBoard.clickSettings();
        })
        await test.step('Verify the Account activation success message',async()=>{
            await settings.verifyAccountSuccessMsg('Account Verification Successful');
        })
    })
})