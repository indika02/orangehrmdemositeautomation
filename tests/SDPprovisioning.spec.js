const {test,expect}=require('@playwright/test');
const {Loginpage}=require('../pages/LoginPage');
const {DashBoard}=require('../pages/DashBoard');
const {SdpProvisioning}=require('../pages/SDPprovisioning');
const testData=require('../config/test-data.json');
const { Common } = require('../utils/Common');

test.describe('Sdp provisioning',()=>{

    let page; 
    let commonPage;
    let loginPage;
    let dashBoard;
    let sdpprovisioning;


    test.beforeAll(async ({ browser }) => {
      
        const context = await browser.newContext();
        page = await context.newPage();
        
        commonPage = new Common(page);
        loginPage = new Loginpage(page);
        dashBoard = new DashBoard(page);
        sdpprovisioning=new SdpProvisioning(page);
    });

    test('Change the State of newly created app',async()=>{

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })
        await test.step('Login to the user account by using valid credentials',async()=>{
            await loginPage.login(testData.validCredentials['sdp-admin'].username,testData.validCredentials['sdp-admin'].password);
        })
        
        await test.step('Click the provisioning icon',async()=>{
            await sdpprovisioning.clickSDProvisioningIcon();
        })

        await test.step('click on the new app',async()=>{
            await sdpprovisioning.clickFirstApp();
        })

        await test.step('Click change state button',async()=>{
            await sdpprovisioning.clickChangeStateBtn();
        })

        
    })
})