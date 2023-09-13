import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import Oracle from "../../pages/Oracle";
import * as data from "../../helper/util/test-data/loginCredentials.json"

setDefaultTimeout(60 * 1000 * 2)
let oraclePage: Oracle

Given('User navigates to the oracle application', async function () {
    oraclePage = new Oracle(fixture.page)
    await oraclePage.navigateToLoginPage();
    fixture.logger.info("Navigated to the application")
})

Given('User enter the username', async function () {

    const firstname = await oraclePage.enterUserName(data.userNameOracle)
    console.log("firstname", firstname)
    console.log("firstNameOracle", data.userNameOracle)
    await fixture.page.waitForTimeout(2000);
});

Given('User enter the password', async function () {
    await oraclePage.enterPassword(data.passwordOracle)
    await fixture.page.waitForTimeout(2000);


})

When('User click on the login button', async function () {
    await oraclePage.clickLoginButton();
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(2000);
});

When('Search Dollar General Dg23781', async function () {
    await oraclePage.clickSearchButton();
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await oraclePage.clickSearchBox();
    await oraclePage.enterTestData();
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
});


When('Click on Profile Tab', async function () {
    await oraclePage.clickProfile();
});

When('Click on APM checkbox', async function () {
    await oraclePage.clickAPMCheckbox();
});

When('Click on Save', async function () {
    await oraclePage.clickSaveandCloseButton();
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
})

When('Uncheck on APM checkbox', async function () {
    await oraclePage.uncheckAPMCheckbox();
});

When('Click on Service Request Tab', async function () {
    await oraclePage.clickServiceRequest();
});

When('Check whether the SR is created', async function () {

    await oraclePage.clickServiceStausddl()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(2000);

    await oraclePage.clickAllfromddl()
    await oraclePage.clickonsearchbutton()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(2000);

    // await oraclePage.clickOnAsceindingButton()
    // await fixture.page.waitForLoadState();
    // fixture.logger.info("Waiting for 2 seconds")
    // await fixture.page.waitForTimeout(2000)

    const latesteddate = await oraclePage.latestCreatedDate()
    const currentDate = new Date();
    const currentDateFormat = currentDate.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });
    console.log('currentDateFormat:', currentDateFormat); // Check the value of currentDateFormat

    const innertextDate = new Date(latesteddate);
    const formattedCreatedDate = innertextDate.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });
    console.log('formattedCreatedDate:', formattedCreatedDate); // Check the value of formattedCreatedDate  

    if (currentDateFormat === formattedCreatedDate) {
        console.log("Contact details are updated in oracle");
    } else {
        throw new Error("No records created");
    }

});

When('click on Service Request Icon', async function () {
    await oraclePage.clickServiceRequestIcon();
});

When('Select All Open Service Requests from the list', async function () {
    await oraclePage.ListDDLActions();
});
