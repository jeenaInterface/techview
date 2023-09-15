import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { fixture } from "../../hooks/pageFixture";
import * as data from "../../helper/util/test-data/loginCredentials.json"
import techViewPage from "../../pages/techViewPage";


setDefaultTimeout(60 * 1000 * 5)
let techView: techViewPage


Given('User navigates to the dgAlarmPortal application', async function () {
    techView = new techViewPage(fixture.page)
    await techView.navigateToLoginPage();
    fixture.logger.info("Navigated to the application")
})

Given('Search a site', async function () {
    await techView.clickstoreLocator()
    await techView.SelectFirstEntry()
});

Given('Click on Alarm Panel Code Change Request', async function () {
    await techView.clickAlarmPanelCodeChangeRequest()

})

When('Enter Passcode', async function () {
    await techView.enterPassword() 
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(2000);
});

When('Click on submit', async function () {
    await techView.clickSubmitButton() 
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds") 
});

When('Edit a contact and submit', async function () {
    await techView.FillDetails()
});

 When('Verify success message', async function () {
    const OriginalMessage = await techView.returnSuccessMessage()
    const ExpectedSuccessMessage = "Contacts update successful. Please allow 2 business days for passcode changes to be applied to your system."
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds") 
    if (ExpectedSuccessMessage === OriginalMessage) {
        console.log("Contact details are updated");
      } else {
        throw new Error("No records updated");
      }
      await fixture.page.waitForLoadState();
      fixture.logger.info("Waiting for 2 seconds")
 })

