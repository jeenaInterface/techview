import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, test } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
const { randomValuePhone } = require('../../helper/util/test-data/randomdata');
const { randomValuePasscode } = require('../../helper/util/test-data/randomdata');
import * as data from "../../helper/util/test-data/loginCredentials.json"
import APMPage from "../../pages/apmPage";



setDefaultTimeout(60 * 1000 * 2)
let APM: APMPage

Given('User navigates to the APM application', async function () {
    APM = new APMPage(fixture.page)
    await APM.navigateToLoginPage();
    fixture.logger.info("Navigated to the application")
})

Given('User enter the username in apm', async function () {
    await APM.enterUserName(data.userNameAPM)
});

Given('User enter the password in APM', async function () {
    await APM.enterPassword(data.passwordAPM)
})

When('User clicks on the login button in APM', async function () {
    await APM.clickLoginButton()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(2000);
});

When('Click on queqe menu', async function () {
    await APM.clickqueqeLink()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds") 
});


When('Verify the contact details are inserted', async function () {
    const latesteddate = await APM.LatestDate()


    const truncatedText = latesteddate.slice(0, 10);
    console.log('truncatedText:', truncatedText);
    
    const currentDate = new Date();
    const currentDateFormat = currentDate.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });
    console.log('currentDateFormat:', currentDateFormat); // Check the value of currentDateFormat
    
    const innertextDate = new Date(truncatedText);
    const formattedCreatedDate = innertextDate.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });
    console.log('formattedCreatedDate:', formattedCreatedDate); // Check the value of formattedCreatedDate  
    
    const panel_type = await APM.panelType()
    console.log('innertextPanelType:', panel_type); // Check the value of innertextPanelType
    
    const testPanelType = "AGB - 10";
    if (currentDateFormat === formattedCreatedDate && panel_type === testPanelType) {
        console.log("Contact details are updated in apm");
      } else {
        throw new Error("No records created");
      }


});