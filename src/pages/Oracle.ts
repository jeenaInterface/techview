import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class Oracle {
    private base: PlaywrightWrapper

    constructor(private page: Page) {

        this.base = new PlaywrightWrapper(page);
       
    }


    private Elements = {
        userName: "input[id='userid']",
        passwordInput: "input[id= 'password']",
        loginBtn: "button[id= 'btnActive']",
        errorMessage: "alert",
        searchButton: "//a[@id='pt1:_UISgsnfsb']",
        searchBox: "Search",
        textAccount: "Dollar General Dg23781",
        profileTab: "//a[@id='_FOpt1:_FOr1:0:_FONSr2:0:_FOTsr1:0:pt1:r1:0:pt1:Profile::disAcr']",
        // profile_tab: page.get_by_role("link", name="Profile")
        apmEnabledCheckbox: "(//label[@class='x17h'])[2]",
        save_and_close_button: "//button[@title='Save']",
        service_request_tab: "//a[@id='_FOpt1:_FOr1:0:_FONSr2:0:_FOTsr1:0:pt1:r1:0:pt1:ServiceRequests::disAcr']",
        service_status_ddl: "//input[@id='_FOpt1:_FOr1:0:_FONSr2:0:_FOTsr1:0:pt1:r1:0:pt1:r19:1:stsSrch:stsSF:stsQ:value00::content']",
        all_from_status_list: "//input[@id ='_FOpt1:_FOr1:0:_FONSr2:0:_FOTsr1:0:pt1:r1:0:pt1:r19:1:stsSrch:stsSF:stsQ:value00::saId']",
        search_button_in_service_request: "//div[@id='_FOpt1:_FOr1:0:_FONSr2:0:_FOTsr1:0:pt1:r1:0:pt1:r19:1:stsSrch:stsSF:stsSRCH']",
        ascending_button: "//a[@class= 'x1hu']",
        date_reported: "//*[@id='_FOpt1:_FOr1:0:_FONSr2:0:_FOTsr1:0:pt1:r1:0:pt1:r19:1:stsSrch:srl_t2::db']/table/tbody/tr[1]/td[2]/span",
        serviceRequestIcon: "//*[@id='itemNode_service_service_requests']",
        Listddl: "//input[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAt1:0:pt1:ls1:slctChoice::content']",
        HomeIcon: "//div//div//a[@title='Home']",
        AllOpenServiceRequests: "//*[@id='_FOpt1:_FOr1:0:_FONSr2:0:MAt1:0:pt1:ls1:slctChoice::pop']/li[7]",
        searchReferanceNumber: "//input[@placeholder='Reference Number']",
        tableEntry: "(//td[@class='xen'])[2]",
        findbutton:"//button[@title='Find']//img[1]"

    }

    async navigateToLoginPage() {
        await this.base.goto(process.env.BASEURLORACLE);

    }
    async enterUserName(userName: string) {
        const firstnameInput = await this.page.$(this.Elements.userName);
        await firstnameInput.fill(userName);
    }
    async enterPassword(Password: string) {
        await this.page.locator(this.Elements.passwordInput).fill(Password);
    }

    async clickLoginButton() {
        await this.base.waitAndClick(this.Elements.loginBtn);
    }

    getErrorMessage() {
        return this.page.getByRole("alert");
    }

    async loginUser(user: string, password: string) {
        await this.enterUserName(user);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    async clickSearchButton() {
        await this.page.locator(this.Elements.searchButton).click();
    }

    async clickSearchBox() {
        await this.page.getByPlaceholder(this.Elements.searchBox).click();
    }

    async enterTestData() {
        // await this.base.waitAndClick(this.Elements.textAccount);
        await this.page.getByText(this.Elements.textAccount).click()

    }

    async clickProfile() {
        await this.base.waitAndClick(this.Elements.profileTab);
    }

    async clickAPMCheckbox() {
        await this.page.locator(this.Elements.apmEnabledCheckbox).check();
    }

    async clickSaveandCloseButton() {
        await this.base.waitAndClick(this.Elements.save_and_close_button);
    }

    async uncheckAPMCheckbox() {
        await this.page.locator(this.Elements.apmEnabledCheckbox).uncheck();
    }
    async clickServiceRequest() {
        await this.base.waitAndClick(this.Elements.service_request_tab);
    }

    async clickServiceStausddl() {
        await this.base.waitAndClick(this.Elements.service_status_ddl);
    }
    async clickAllfromddl() {
        await this.base.waitAndClick(this.Elements.all_from_status_list);
    }
    async clickonsearchbutton() {

        await this.base.waitAndClick(this.Elements.search_button_in_service_request);

    }
    async clickOnAsceindingButton() {

        await this.base.waitAndClick(this.Elements.ascending_button);
    }

    async latestCreatedDate() {
        const FirstCreatedDate = await this.page.locator(this.Elements.date_reported);
        const innertext = await FirstCreatedDate.innerText();
        return innertext
    }
    async clickServiceRequestIcon() {
        await this.base.waitAndClick(this.Elements.HomeIcon);
        await this.base.waitAndClick(this.Elements.serviceRequestIcon);
    }
    async ListDDLActions() {
        await this.base.waitAndClick(this.Elements.Listddl);
        await this.page.locator(this.Elements.AllOpenServiceRequests).click();

    }

        }

