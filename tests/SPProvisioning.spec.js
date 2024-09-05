const {test,expect}=require('@playwright/test');
const {Loginpage}=require('../pages/LoginPage');
const {DashBoard}=require('../pages/DashBoard');
const testData=require('../config/test-data.json');
const { Common } = require('../utils/Common');
const { Usermanagement } = require('../pages/Usermanagement');
const {SPProvisioning} = require('../pages/SPProvisioning');

test.describe('SP provisioning',()=>{

    let page; 
    let commonPage;
    let loginPage;
    let dashBoard;
    let userManagement;
    let spProvisioning
    

    test.beforeAll(async ({ browser }) => {
      
        const context = await browser.newContext();
        page = await context.newPage();
        
        commonPage = new Common(page);
        loginPage = new Loginpage(page);
        dashBoard = new DashBoard(page);
        userManagement = new Usermanagement(page);
        spProvisioning = new SPProvisioning(page);
       
    });

    test('Availability of Provisioning module for SP user',async()=>{

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })
        await test.step('Login to the user account by using valid credentials',async()=>{
            await loginPage.login(testData.validCredentials['sp-user'].username,testData.validCredentials['sp-user'].password);
        })

        await test.step('Click the provisioning icon',async()=>{
            await dashBoard.clickSPprovisioningIcon();
        })

        await test.step('Click home icon',async()=>{
            await dashBoard.clickHomeIcon();
        })

        await test.step('Logout from the system',async()=>{
            await dashBoard.spLogout();
        })
    })  
    
    
    test('Creating a new Provisioning app',async()=>{

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })
        await test.step('Login to the user account by using valid credentials',async()=>{
            await loginPage.login(testData.validCredentials['sp-user'].username,testData.validCredentials['sp-user'].password);
        })

        await test.step('Click the provisioning icon',async()=>{
            await dashBoard.clickSPprovisioningIcon();
        })

        await test.step('Click create new app icon',async()=>{
            await spProvisioning.clickCreateNewApp();
        })

        await test.step('Enter the basic app details',async()=>{
            await spProvisioning.enterBasicAppDetails('iapp3','uerikdklfjlweiokrld');
        })

        // await test.step('Click home icon',async()=>{
        //     await dashBoard.clickHomeIcon();
        // })

        await test.step('Logout from the system',async()=>{
            await dashBoard.spLogout();
        })
    })
    
})