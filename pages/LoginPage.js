const LoginLocators = require('../locators/loginLocators');

class LoginPage {

    constructor(page) {
        this.page = page;
        this.locators = new LoginLocators(page);
    }

    async goto() {
        await this.page.goto('/web/index.php/auth/login');
    }

    async enterUsername(username) {
        await this.locators.usernameInput.fill(username);
    }

    async enterPassword(password) {
        await this.locators.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.locators.loginButton.click();
    }

    async login(username, password) {

        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async getUsernameValue() {
        return await this.locators.usernameInput.inputValue();
    }

    async getPasswordValue() {
        return await this.locators.passwordInput.inputValue();
    }

    async isLoginButtonVisible() {
        return await this.locators.loginButton.isVisible();
    }

    async isUsernameVisible() {
        return await this.locators.usernameInput.isVisible();
    }

    async isPasswordVisible() {
        return await this.locators.passwordInput.isVisible();
    }

    async isForgotPasswordVisible() {
        return await this.locators.forgotPasswordLink.isVisible();
    }
}

module.exports = LoginPage;