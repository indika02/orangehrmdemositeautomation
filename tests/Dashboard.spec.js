const {test,expect}=require('@playwright/test');
const {Loginpage}=require('../pages/LoginPage');
const {DashBoard}=require('../pages/DashBoard');
const testData=require('../config/test-data.json');
const { Common } = require('../utils/Common');

test.describe('Dash Board',()=>{

    let page; 
    let commonPage;
    let loginPage;
    let dashBoard;

    test.beforeAll(async ({ browser }) => {
      
        const context = await browser.newContext();
        page = await context.newPage();
        
        commonPage = new Common(page);
        loginPage = new Loginpage(page);
        dashBoard = new DashBoard(page);
    });

    test('Verify the modules when click the modules Icon',async()=>{

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })
        await test.step('Login to the user account by using invalid credentials',async()=>{
            await loginPage.login(testData.validCredentials['sdp-admin'].username,testData.validCredentials['sdp-admin'].password);
        })

        await test.step('Verify the successful login',async()=>{
            await dashBoard.verifyModuleName('User Management');
        })
        
        await test.step('click the modules icons in navigation bar',async()=>{
            await dashBoard.hoverModuleIcon();
        })
        await test.step('Logout from the system',async()=>{
            await dashBoard.logout();
        })

    })
})