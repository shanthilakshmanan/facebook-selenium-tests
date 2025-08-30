const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const LoginPage = require('../../pages/loginPage');

const loginPage = new LoginPage();

Given('the user is on the login page', async () => {
    await loginPage.navigateToLoginPage();
});

When('the user enters valid username {string} and password {string}', async (username, password) => {
    await loginPage.enterUsername(username);
    await loginPage.enterPassword(password);
    await loginPage.clickLoginButton();
});

Then('the user should be logged in successfully', async () => {
    const isLoggedIn = await loginPage.isUserLoggedIn();
    expect(isLoggedIn).to.be.true;
});

When('the user enters invalid username {string} and password {string}', async (username, password) => {
    await loginPage.enterUsername(username);
    await loginPage.enterPassword(password);
    await loginPage.clickLoginButton();
});

Then('the user should see an error message', async () => {
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).to.exist;
});