import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";
const { randomValuePhone } = require('../helper/util/test-data/randomdata');
const { randomValuePasscode } = require('../helper/util/test-data/randomdata');
const { randomName } = require('../helper/util/test-data/randomdata');


export default class techViewPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {

        passwordInput: "//input[@id='MainContent_LoginUser_Password']",
        storeLocator: "//input[@id='caseSiteSearchInput']",
        firstItem: "//a[@id='site_DG-TEST2']",
        password: "//input[@id='password']",
        AlarmPanelCodeChangeRequest: "//span[text()='Alarm Panel Code Change Request']",
        submitButton: "//input[@id='submitPasscode']",
        FifthEditButton: "//input[@id='chkEdit5']",
        name: "//input[@id='name']",
        MobileTextbox: "//input[@id='mobile']",
        HomePhone: "//input[@id='home']",
        passcode: "//input[@id='password']",
        saveChanges: "//input[@value='Save Changes']",
        successMessage: "Contacts update successful. Please allow 2 business days for passcode changes to be applied to your system.",
        SubmitChanges: "//input[@value='Submit Changes']",
        storePassword: "//input[@id='storePassword']",
        submit: "//input[@value='Submit']"

    }

    async navigateToLoginPage() {
        await this.base.goto(process.env.BASEURLDGAlarmPortal);


    }

    async clickstoreLocator() {
        await this.base.waitAndClick(this.Elements.storeLocator);
        await this.page.locator(this.Elements.storeLocator).fill("DG-TEST2")
    }


    async SelectFirstEntry() {
        await this.base.waitAndClick(this.Elements.firstItem);
        ;
    }
    async clickAlarmPanelCodeChangeRequest() {
        await this.base.waitAndClick(this.Elements.AlarmPanelCodeChangeRequest);
        ;
    }
    async enterPassword() {
        await this.base.waitAndClick(this.Elements.password);
        await this.page.locator(this.Elements.password).type("7765");
        await this.base.waitAndClick(this.Elements.password);
    }

    async clickSubmitButton() {
        await this.base.waitAndClick(this.Elements.submitButton);
    }

    async FillDetails() {
        await this.base.waitAndClick(this.Elements.FifthEditButton);
        await this.page.locator(this.Elements.name).clear()
        await this.page.locator(this.Elements.name).type(randomName.toString())
        await this.page.locator(this.Elements.MobileTextbox).clear()
        await this.page.locator(this.Elements.MobileTextbox).type(randomValuePhone.toString())
        await this.page.locator(this.Elements.HomePhone).clear()
        await this.page.locator(this.Elements.HomePhone).type(randomValuePhone.toString())
        await this.page.locator(this.Elements.passcode).type(randomValuePasscode.toString())
        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.accept().catch(() => { });
        });
        this.page.on('dialog', async (dialog) => {
            // Check if the dialog is an "alert" dialog
            if (dialog.type() === 'alert') {
                console.log('Alert Message: ' + dialog.message());

                await dialog.accept();
            }
        });
        await this.base.waitAndClick(this.Elements.saveChanges);

        await this.base.waitAndClick(this.Elements.SubmitChanges);
        await this.page.locator(this.Elements.storePassword).type("7765");
        await this.base.waitAndClick(this.Elements.submit);

    }

    async returnSuccessMessage() {
        const SuccessMessage = await this.page.getByText(this.Elements.successMessage);
        const innertext = await SuccessMessage.innerText();
        return innertext
    }

}