const {test,expect}=require('@playwright/test');
const {Loginpage}=require('../pages/LoginPage');
const {DashBoard}=require('../pages/DashBoard');
const testData=require('../config/test-data.json');
const { Common } = require('../utils/Common');

test.describe('Login page',()=>{
    
    test('Registered users can be able to login successfully by using valid credentials',async({page})=>{

        const commonPage=new Common(page);
        const loginPage=new Loginpage(page);
        const dashBoard=new DashBoard(page);

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })

        await test.step('Login to the user account by using valid credentials',async()=>{
            await loginPage.login(testData.validCredentials['sdp-admin'].username,testData.validCredentials['sdp-admin'].password);
        })

        await test.step('Verify the successful login',async()=>{
            await dashBoard.verifyModuleName();
        }) 

        await test.step('Logout from the system',async()=>{
            await loginPage.logout();
        })

        await test.step('Verify logout alert message',async()=>{
            await loginPage.verifyLogoutPageAlert('You have successfully logout from the system');
        })
    })

    test('login to the system by using invalid username and password',async({page})=>{

        const commonPage=new Common(page);
        const loginPage=new Loginpage(page);

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


})