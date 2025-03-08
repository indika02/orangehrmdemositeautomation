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
    
    test('Admin can login to the system by using valid user credentials',async()=>{

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })

        await test.step('Login to the user account by using valid credentials',async()=>{
            await loginPage.login(testData.validCredentials["admin"].username,testData.validCredentials["admin"].password);
        })

        await test.step('Verify the successful login',async()=>{
            await dashBoard.verifyLogin('Dashboard');
        })

        await test.step('Click the username icon in navigation bar',async()=>{
            await dashBoard.hoverusernamedropdown();
        })
        await test.step('Logout from the system',async()=>{
            await dashBoard.Logout();
        })
    })

    test('Verify the forgot password functionality',async()=>{

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })

        await test.step('Click the forgot password link',async()=>{
            await loginPage.clickForgotPassword();
        })

        await test.step('Enter the username in username text box',async()=>{
            await loginPage.enterUsername('Indika');
        })

        await test.step('Click Reset password Button',async()=>{
            await loginPage.ClickresetpasswordBtn();
        })

        await test.step('Verify the message for reset email sent to the user email',async()=>{
            await loginPage.verifyresetpwdemail('Reset Password link sent successfully');
        })
    })

    test('Verify the Invalid user login alert message',async()=>{

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })

        await test.step('Login to the user account by using valid credentials',async()=>{
            await loginPage.login(testData.invalidCredentials.username,testData.invalidCredentials.password);
        })

        await test.step('Verify the login error message',async()=>{
            await loginPage.verifyLoginError('Invalid credentials');
        })

    })

    test('Verify the Footer text is correct',async()=>{
        await test.step('Navigate to the login page',async()=>{
            await commonPage.goto();
        })
        
        await test.step('Verify the Footer Text',async()=>{
            await loginPage.verifyFooterText('OrangeHRM OS 5.7');
        })
    })


})