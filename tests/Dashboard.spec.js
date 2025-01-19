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

    test('Verify the Search functionality of left navigation bar in dashboard',async()=>{

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })

        await test.step('Login to the user account by using valid credentials',async()=>{
            await loginPage.login(testData.validCredentials["admin"].username,testData.validCredentials["admin"].password);
        })

        await test.step('Enter a text in search box',async()=>{
            await dashBoard.searchFunction('Dashboard');
        })

        await test.step('Click the username icon in navigation bar',async()=>{
            await dashBoard.hoverempusernamedropdown();
        })

        await test.step('Logout from the system',async()=>{
            await dashBoard.Logout();
        })
    })
})