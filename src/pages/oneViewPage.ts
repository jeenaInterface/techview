import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class oneViewPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        userName: "//input[@id='txt_username']",
        passwordInput: "//input[@id='txt_password']",
        loginBtn: "//button[@id='btn_submit']",
        changeCompanyLink: "//a[@id='changeCompanyLink']",
        SelectACompany: "//h4[text()='Select a Company to view its Sites:']/following-sibling::select",
        changeCompanyButton: "//a[contains(text(),'Change Company')]",
        siteOverview: "//span[text()[normalize-space()='Site Overview']]",
        serviceTrips: "//b[text()='Service Trips']",
        statusFilter: "//a[.='Status Filters']",
        noneUnderStatusFilter: "(//div[@class='content active']//a)[2]",
        scheduledCheckBox: "(//input[@class='small-1'])[3]",
        filterButton: "//a[text()='Filter']",
        FirstWorkOrder: "//td[text()='WO00320681']",
        SecondWorkOrder: "//table[@class='grid-table']/tbody[1]/tr[2]/td[4]"

    }

    async navigateToLoginPage() {
        await this.base.goto(process.env.BASEURLOneView);
    }
    async enterUserName(user: string) {
        await this.page.locator(this.Elements.userName).fill(user);
    }
    async enterPassword(Password: string) {
        await this.page.locator(this.Elements.passwordInput).fill(Password);
    }

    async clickLoginButton() {
        await this.base.waitAndClick(this.Elements.loginBtn);
    }

    async getErrorMessage() {
        return this.page.getByRole("alert");
    }

    async loginUser(user: string, password: string) {
        await this.enterUserName(user);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    async changeCompany() {
        await this.base.waitAndClick(this.Elements.changeCompanyLink);
        await this.page.locator(this.Elements.SelectACompany).selectOption("Helzberg Diamonds - Parent")
        await this.base.waitAndClick(this.Elements.changeCompanyButton);
        await this.base.waitAndClick(this.Elements.siteOverview);

    }

    async ClickServiceTrip() {
        await this.base.waitAndClick(this.Elements.serviceTrips);

    }

    async FilterscheduledOrders() {

        await this.base.waitAndClick(this.Elements.statusFilter);
        await this.base.waitAndClick(this.Elements.noneUnderStatusFilter);
        await this.base.waitAndClick(this.Elements.scheduledCheckBox);
        await this.base.waitAndClick(this.Elements.filterButton);
    }

    async SelectFirstWorkOrder() {

        const FirstWorkOrderOrder = await this.page.getByText(this.Elements.FirstWorkOrder);
        const FirstWorkOrderOrderinnertext = await FirstWorkOrderOrder.innerText();
        return FirstWorkOrderOrderinnertext
        console.log(FirstWorkOrderOrderinnertext)
    }
    async SelectSecondWorkOrder() {
        const SecondWorkOrderOrder = await this.page.getByText(this.Elements.SecondWorkOrder);
        const SecondWorkOrderOrderinnertext = await SecondWorkOrderOrder.innerText();
        return SecondWorkOrderOrderinnertext
        console.log(SecondWorkOrderOrderinnertext)
    }
}