const {test,expect}=require('@playwright/test');
const {Loginpage}=require('../pages/LoginPage');
const {DashBoard}=require('../pages/DashBoard');
const testData=require('../config/test-data.json');
const { Common } = require('../utils/Common');

test.describe('Login page',()=>{

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

    test.describe.configure({ mode: 'serial' });
    
    test('SDP Admin can be able to login successfully by using valid credentials',async()=>{

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })

        await test.step('Login to the user account by using valid credentials',async()=>{
            await loginPage.login(testData.validCredentials['sdp-admin'].username,testData.validCredentials['sdp-admin'].password);
        })

        await test.step('Verify the successful login',async()=>{
            await dashBoard.verifyModuleName('User Management');
        }) 

        await test.step('Logout from the system',async()=>{
            await dashBoard.adminLogout();
        })

        await test.step('Verify logout alert message',async()=>{
            await loginPage.verifyLogoutPageAlert('You have successfully logout from the system');
        })
    })

    test('SP user can be able to login successfully by using valid credentials',async()=>{

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })

        await test.step('Login to the user account by using valid credentials',async()=>{
            await loginPage.login(testData.validCredentials['sp-user'].username,testData.validCredentials['sp-user'].password);
        })

        await test.step('Verify the successful login',async()=>{
            await dashBoard.verifyModuleName('Provisioning');
        }) 

        await test.step('Logout from the system',async()=>{
            await dashBoard.spLogout();
        })
        await test.step('Verify logout alert message',async()=>{
            await loginPage.verifyLogoutPageAlert('You have successfully logout from the system');
        })
    })

    test('Customer-care admin can be able to login successfully by using valid credentials',async()=>{

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })

        await test.step('Login to the user account by using valid credentials',async()=>{
            await loginPage.login(testData.validCredentials['customer-care-admin'].username,testData.validCredentials['customer-care-admin'].password);
        })

        await test.step('Verify the successful login',async()=>{
            await dashBoard.verifyModuleName('Reporting');
        }) 

        await test.step('Logout from the system',async()=>{
            await dashBoard.adminLogout();
        })
        await test.step('Verify logout alert message',async()=>{
            await loginPage.verifyLogoutPageAlert('You have successfully logout from the system');
        })
    })

    test('login to the system by using invalid username and password',async()=>{

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })
        await test.step('Login to the user account by using invalid credentials',async()=>{
            await loginPage.login(testData.invalidCredentials.username,testData.invalidCredentials.password);
        })
        await test.step('Verify logout alert message',async()=>{
            await loginPage.verifyLogoutPageAlert('Username or password you have entered is incorrect. Please try again.');
        })

    })

    test('verify the account verified or not',async()=>{
        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })

        await test.step('Login to the user account by using valid credentials',async()=>{
            await loginPage.login(testData.validCredentials['sp-user'].username,testData.validCredentials['sp-user'].password);
        })

        await test.step('Go to the settings page',async()=>{
            await dashBoard.clickSettings();
        })
       
        await test.step('Verify the Account verification message',async()=>{
            await dashBoard.verifyAccountVerificationMsg('Account Verification Successful');
        })

    })
})