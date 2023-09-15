import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, test } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
const { randomValuePhone } = require('../../helper/util/test-data/randomdata');
const { randomValuePasscode } = require('../../helper/util/test-data/randomdata');
import * as data from "../../helper/util/test-data/loginCredentials.json"
import oneViewPage from "../../pages/oneViewPage";



setDefaultTimeout(60 * 1000 * 2)
let oneView: oneViewPage

Given('User navigates to the Oneview application', async function () {
    oneView = new oneViewPage(fixture.page)
    await oneView.navigateToLoginPage();
    fixture.logger.info("Navigated to the application")
})

Given('User enter the username', async function () {
    await oneView.enterUserName(data.userNameOneView)
});

Given('User enter the password', async function () {
    await oneView.enterPassword(data.passwordOneView)
})

When('User click on the login button', async function () {
    await oneView.clickLoginButton()
});

When('Change the Company', async function () {
    await oneView.changeCompany()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds") 
    await fixture.page.waitForTimeout(2000);
});


When('Click on service trips', async function () {
    await oneView.ClickServiceTrip()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(2000);

});
When('Filter scheduled work orders', async function () {
    await oneView.FilterscheduledOrders()

});
When('Select first work order', async function () {
    await oneView.SelectFirstWorkOrder()
});