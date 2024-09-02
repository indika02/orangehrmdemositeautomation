const { expect } = require('@playwright/test');
const { Common } = require('../utils/Common');

class Usermanagement{
    constructor(page){
        this.page=page;
        this.commonPage = new Common(page);
        this.appCreatorsTab='//*[@id="root"]/div/div/div[1]/div/ul[2]/li/a';
        this.appstoreUsersTab='//*[@id="root"]/div/div/div[1]/div/ul[3]/li/a';
        this.searchBoxInput='//*[@id="root"]/div/div/div[2]/div/div/div[1]/div[1]/div[1]/span/input';
        this.filterIcon='//*[@id="root"]/div/div/div[2]/div/div/div[1]/div[1]/div[2]/span/a/i';
        this.filterByUsername='#root > div > div > div.wrapper > div > div > div.search-bar.row > div.col-md-6 > div.col-xs-2.search-input.filtering-method > span > ul > li:nth-child(2) > a';
    }


    async clickAppCreatorsTab(){
        await this.page.click(this.appCreatorsTab);
        await this.page.waitForTimeout(6000);
    }


    async clickAppstoreUsersTab(){
        await this.page.click(this.appstoreUsersTab);
        await this.page.waitForTimeout(6000);
    }

    async enterSearchInput(searchInput){
        await this.page.locator(this.searchBoxInput).fill(searchInput);
        await this.page.waitForTimeout(6000);
        await this.commonPage.clearTextBox(this.searchBoxInput);
        await this.page.waitForTimeout(1000);
        await this.page.hover(this.filterIcon);
        await this.page.click(this.filterByUsername);
        await this.page.locator(this.searchBoxInput).fill(searchInput);
    }

}

module.exports={Usermanagement};