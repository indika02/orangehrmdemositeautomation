const {test,expect}=require('@playwright/test');
const {Loginpage}=require('../pages/LoginPage');
const {DashBoard}=require('../pages/DashBoard');
const {CompleteProfilePage}=require('../pages/CompleteProfilePage');
const testData=require('../config/test-data.json');
const { Common } = require('../utils/Common');

test.describe('Complete Profile page',async()=>{

    let page; 
    let commonPage;
    let loginPage;
    let dashBoard;
    let completeprofilepage;

    test.beforeAll(async ({ browser }) => {
      
        const context = await browser.newContext();
        page = await context.newPage();
        
        commonPage = new Common(page);
        loginPage = new Loginpage(page);
        dashBoard = new DashBoard(page);
        completeprofilepage=new CompleteProfilePage(page);
    });

test('Filling the organization details form',async()=>{

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })
        await test.step('Login to the newly created sp user account',async()=>{
            await loginPage.login(testData.validCredentials['new-sp'].username,testData.validCredentials['new-sp'].password);
        })

        await test.step('Click the complete button in dashboard',async()=>{
            await dashBoard.clickCompleteBtn();
        })

        await test.step('Enter the Organization name',async()=>{
            await completeprofilepage.enterOrgName('abcd');
        })

        await test.step('Select the organization size',async()=>{
            await completeprofilepage.selectOrgSize('10-50 employees');
        })

        await test.step('Select the industry',async()=>{
            await completeprofilepage.selectIndustry('IT');
        })
    })

})