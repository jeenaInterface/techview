import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class APMPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        userName: "//input[@name = 'username']",
        passwordInput: "//input[@name = 'password']",
        loginBtn: "//button[@type= 'submit']",
        queqeLink:"//a[text()='Queue']",
        LatestcreatedDate: "//table/tbody/tr[1]/td[5]",
        panelType: "//table/tbody/tr[1]/td[3]"
 }

    async navigateToLoginPage() {
        await this.base.goto(process.env.BASEURLAPM);
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

    getErrorMessage() {
        return this.page.getByRole("alert");
    }

    async loginUser(user: string, password: string) {
        await this.enterUserName(user);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    async clickqueqeLink() {
        await this.base.waitAndClick(this.Elements.queqeLink);
    }

    async LatestDate() {
        const LatesteDate = await this.page.locator(this.Elements.LatestcreatedDate);
        const innertextDate = await LatesteDate.innerText();
        return innertextDate
    }
    async panelType() {
        const panelType = await this.page.locator(this.Elements.panelType);
        const innertextPanel = await panelType.innerText();
        return innertextPanel
    }

}