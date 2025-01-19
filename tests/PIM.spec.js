const {test,expect}=require('@playwright/test');
const {Loginpage}=require('../pages/LoginPage');
const {DashBoard}=require('../pages/DashBoard');
const {PIM}=require('../pages/PIM');
const testData=require('../config/test-data.json');
const { Common } = require('../utils/Common');


test.describe('PIM Tab',()=> {

    let page;
    let commonPage;
    let loginPage;
    let dashBoard;
    let pim;

    test.beforeAll(async ({browser}) => {

        const context = await browser.newContext();
        page = await context.newPage();

        commonPage = new Common(page);
        loginPage = new Loginpage(page);
        dashBoard = new DashBoard(page);
        pim = new PIM(page);
    });

    test.describe.configure({mode: 'serial'});


    test('Add a new employee to the system', async () => {

        await test.step('Naviagate to the loginpage', async () => {
            await commonPage.goto();
        })

        await test.step('Login to the user account by using valid credentials', async () => {
            await loginPage.login(testData.validCredentials["admin"].username, testData.validCredentials["admin"].password);
        })

        await test.step('Click the PIM Tab', async () => {
            await pim.clickPIMTab();
        })

        await test.step('Click the Add button', async () => {
            await pim.clickAddBtn();
        })

        await test.step('Upload the Employer image', async () => {
            await pim.uploadEmpImage();
        })

        await test.step('Fill the Employer Details form',async()=>{
            await pim.fillEmpForm('isuru','ruwan','kumara');
        })

        await test.step('Click the create login details toggle',async()=>{
            await pim.ClickcreateLoginDetailsToggle();
        })

        await test.step('enter new login credentials for employer',async()=>{
            await pim.enternewlogincredentials('isuru2','Indika12@#','Indika12@#');
        })

        await test.step('Click the save button',async()=>{
            await pim.clickSaveBtn();
        })

        await test.step('Click the username icon in navigation bar',async()=>{
            await dashBoard.hoverusernamedropdown();
        })

        await test.step('Logout from the system', async () => {
            await dashBoard.Logout();
        })
    })

    test('Search Employee By employee name', async () => {

        await test.step('Naviagate to the loginpage', async () => {
            await commonPage.goto();
        })

        await test.step('Login to the user account by using valid credentials', async () => {
            await loginPage.login(testData.validCredentials["admin"].username, testData.validCredentials["admin"].password);
        })

        await test.step('Click the PIM Tab', async () => {
            await pim.clickPIMTab();
        })

       await test.step('Enter the employer name',async()=>{
           await pim.searchByempName('123445');
       })

        await test.step('Click the Search button',async()=>{
            await pim.clickSearchbtn();
        })

        await test.step('Click the username icon in navigation bar',async()=>{
            await dashBoard.hoverusernamedropdown();
        })

        await test.step('Logout from the system', async () => {
            await dashBoard.Logout();
        })
    })


    test('View a Employer Profile details', async () => {

        await test.step('Naviagate to the loginpage', async () => {
            await commonPage.goto();
        })

        await test.step('Login to the user account by using valid credentials', async () => {
            await loginPage.login(testData.validCredentials["admin"].username, testData.validCredentials["admin"].password);
        })

        await test.step('Click the PIM Tab', async () => {
            await pim.clickPIMTab();
        })

        await test.step('Enter the employer name',async()=>{
            await pim.searchByempName('123445');
        })

        await test.step('Click Employer Data row',async()=>{
            await pim.clickEmpDataRow();
        })

        await test.step('Click the username icon in navigation bar',async()=>{
            await dashBoard.hoverusernamedropdown();
        })

        await test.step('Logout from the system', async () => {
            await dashBoard.Logout();
        })
    })


})