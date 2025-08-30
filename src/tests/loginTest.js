// This file contains the test suite for the login functionality.
const { Given, When, Then } = require('cucumber');
const LoginPage = require('../pages/loginPage');

const loginPage = new LoginPage();

Given('I am on the login page', async function () {
    await loginPage.navigateToLoginPage();
});

When('I enter valid username and password', async function () {
    await loginPage.enterUsername('validUser');
    await loginPage.enterPassword('validPassword');
    await loginPage.clickLoginButton();
});

Then('I should be logged in successfully', async function () {
    // Add assertion to verify successful login
});

When('I enter invalid username and password', async function () {
    await loginPage.enterUsername('invalidUser');
    await loginPage.enterPassword('invalidPassword');
    await loginPage.clickLoginButton();
});

Then('I should see an error message', async function () {
    // Add assertion to verify error message
});