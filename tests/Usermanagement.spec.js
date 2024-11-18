const {test,expect}=require('@playwright/test');
const {Loginpage}=require('../pages/LoginPage');
const {DashBoard}=require('../pages/DashBoard');
const testData=require('../config/test-data.json');
const { Common } = require('../utils/Common');
const { Usermanagement } = require('../pages/Usermanagement');

test.describe('User Management',()=>{

    let page; 
    let commonPage;
    let loginPage;
    let dashBoard;
    let userManagement;

    test.beforeAll(async ({ browser }) => {
      
        const context = await browser.newContext();
        page = await context.newPage();
        
        commonPage = new Common(page);
        loginPage = new Loginpage(page);
        dashBoard = new DashBoard(page);
        userManagement=new Usermanagement(page);
    });

    test('Availability of User management portal tabs',async()=>{

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })
        await test.step('Login to the user account by using valid credentials',async()=>{
            await loginPage.login(testData.validCredentials['sdp-admin'].username,testData.validCredentials['sdp-admin'].password);
        })

        await test.step('Click the user management icon',async()=>{
            await dashBoard.clickUserManagementIcon();
        })

        await test.step('Click the App creators tab',async()=>{
            await userManagement.clickAppCreatorsTab();
        })

        await test.step('Click the Appstore users tab',async()=>{
            await userManagement.clickAppstoreUsersTab();
        })

        await test.step('Logout from the system',async()=>{
            await dashBoard.adminLogout();
        })
    })


    test('Availability of system users search box by firstname and username',async()=>{

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })
        await test.step('Login to the user account by using valid credentials',async()=>{
            await loginPage.login(testData.validCredentials['sdp-admin'].username,testData.validCredentials['sdp-admin'].password);
        })

        await test.step('Click the user management icon',async()=>{
            await dashBoard.clickUserManagementIcon();
        })

        await test.step('Enter a first name of a system user',async()=>{
            await userManagement.enterSearchInput('123cust');
            await userManagement.enterSearchInput('robicust');
        })

        await test.step('Logout from the system',async()=>{
            await dashBoard.adminLogout();
        })
    })
        
    test('Availability of app creators search box by firstname and username',async()=>{

            await test.step('Naviagate to the loginpage',async()=>{
                await commonPage.goto();
            })
            await test.step('Login to the user account by using valid credentials',async()=>{
                await loginPage.login(testData.validCredentials['sdp-admin'].username,testData.validCredentials['sdp-admin'].password);
            })
    
            await test.step('Click the user management icon',async()=>{
                await dashBoard.clickUserManagementIcon();
            })
    
            await test.step('Enter a first name of a system user',async()=>{
                await userManagement.enterSearchInput('123cust');
                await userManagement.enterSearchInput('robicust');
            })
    
            await test.step('Logout from the system',async()=>{
                await dashBoard.adminLogout();
            })
    })

    test('View the sp user details',async()=>{

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })
        await test.step('Login to the user account by using valid credentials',async()=>{
            await loginPage.login(testData.validCredentials['sdp-admin'].username,testData.validCredentials['sdp-admin'].password);
        })

        await test.step('Click the user management icon',async()=>{
            await dashBoard.clickUserManagementIcon();
        })

        await test.step('Click the App creators tab',async()=>{
            await userManagement.clickAppCreatorsTab();
        })

        await test.step('Click the row of table',async()=>{
            await userManagement.viewSpuserDetails();
        })

        await test.step('Logout from the system',async()=>{
            await dashBoard.adminLogout();
        })
    })
    
    
})