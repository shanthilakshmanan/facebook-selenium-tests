class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.usernameField = 'input[name="username"]'; // Update with actual selector
        this.passwordField = 'input[name="password"]'; // Update with actual selector
        this.loginButton = 'button[type="submit"]'; // Update with actual selector
    }

    async enterUsername(username) {
        await this.driver.findElement(By.css(this.usernameField)).sendKeys(username);
    }

    async enterPassword(password) {
        await this.driver.findElement(By.css(this.passwordField)).sendKeys(password);
    }

    async clickLoginButton() {
        await this.driver.findElement(By.css(this.loginButton)).click();
    }
}

module.exports = LoginPage;