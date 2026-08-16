const { test, expect } = require('../fixtures/commonFixture');
const loginData = require('../testdata/loginData.json');
const TestUtils = require('../utils/TestUtils');

test.describe('OrangeHRM Login Tests', () => {

    // Verify Login Page URL
    test('TC001 - Verify Login Page URL', async ({ loginPage, page }) => {
        await loginPage.goto();
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    // Verify Login Page Title
    test('TC002 - Verify Login Page Title', async ({ loginPage, page }) => {
        await loginPage.goto();
        await expect(page).toHaveTitle(/OrangeHRM/);
    });

    // Verify Login Page UI Elements
    test('TC003 - Verify Login Page UI Elements', async ({ loginPage }) => {
        await loginPage.goto();
        await expect(loginPage.locators.usernameInput).toBeVisible();
        await expect(loginPage.locators.passwordInput).toBeVisible();
        await expect(loginPage.locators.forgotPasswordLink).toBeVisible();

    });

    // Verify Username Field
    test('TC004 - Verify Username Field', async ({ loginPage }) => {
        await loginPage.goto();
        await expect(loginPage.locators.usernameInput).toBeEditable();
        await loginPage.enterUsername(loginData.validUser.username);
        await expect(loginPage.locators.usernameInput).toHaveValue('Admin');
    });

    // Verify Password Field
    test('TC005 - Verify Password Field', async ({ loginPage }) => {
        await loginPage.goto();
        await expect(loginPage.locators.passwordInput).toBeEditable();
        await loginPage.enterPassword(loginData.validUser.password);
        await expect(loginPage.locators.passwordInput).toHaveValue('admin123');
    });

    // Login With Valid Credentials
    test('TC006 - Login With Valid Credentials', async ({ loginPage, page }) => {
        await loginPage.goto();
        await loginPage.login(loginData.validUser.username, loginData.validUser.password);
        await expect(page).toHaveURL(/dashboard/);
        await expect(loginPage.locators.dashboardHeading).toBeVisible();
    });

    // Login With Invalid Username
    test('TC007 - Login With Invalid Username', async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login(loginData.invalidUser.username,
            loginData.invalidUser.password);
        await expect(loginPage.locators.invalidCredentialsMessage).toBeVisible();
    });

    // Login With Valid Username And Invalid Password
    test('TC008 - Login With Valid Username And Invalid Password', async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login(loginData.validUsernameInvalidPassword.username,
            loginData.validUsernameInvalidPassword.password);
        await expect(loginPage.locators.invalidCredentialsMessage).toBeVisible();
    });



    // Login With Invalid Username And Valid Password
    test('TC009 - Login With Invalid Username And Valid Password', async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login(loginData.invalidUsernameValidPassword.username,
            loginData.invalidUsernameValidPassword.password);
        await expect(loginPage.locators.invalidCredentialsMessage).toBeVisible();
    });


    // Login With Empty Username
    test('TC010 - Login With Empty Username', async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login(loginData.emptyUsername.username,
            loginData.emptyUsername.password);
        await expect(loginPage.locators.usernameInput).toBeVisible();
        await expect(loginPage.page).not.toHaveURL(/dashboard/);
    });


    // Login With Empty Password
    test('TC011 - Login With Empty Password', async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login(
            loginData.emptyPassword.username,
            loginData.emptyPassword.password);
        await expect(loginPage.locators.passwordInput).toBeVisible();
        await expect(loginPage.page).not.toHaveURL(/dashboard/);
    });


    // Login With Empty Username And Password
    test('TC012 - Login With Empty Username And Password', async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login(
            loginData.emptyCredentials.username,
            loginData.emptyCredentials.password);
        await expect(loginPage.page).not.toHaveURL(/dashboard/);
    });



    // Username With Special Characters
    test('TC013 - Username With Special Characters', async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login(
            loginData.specialCharacterUsername.username,
            loginData.specialCharacterUsername.password);
        await expect(loginPage.locators.invalidCredentialsMessage).toBeVisible();
    });


    // Verify Login Button Is Enabled
    test('TC014 - Verify Login Button Is Enabled', async ({ loginPage }) => {
        await loginPage.goto();
        await expect(loginPage.locators.loginButton).toBeEnabled();
    });


    // Verify Forgot Password Link
    test('TC015 - Verify Forgot Password Link', async ({ loginPage }) => {
        await loginPage.goto();
        await expect(loginPage.locators.forgotPasswordLink).toBeVisible();
        await expect(loginPage.locators.forgotPasswordLink).toBeEnabled();
    });


    // Verify Username Field Initial State
    test('TC016 - Verify Username Field Initial State', async ({ loginPage }) => {
        await loginPage.goto();
        await expect(loginPage.locators.usernameInput).toHaveValue('');
    });


    // Verify Password Field Initial State
    test('TC017 - Verify Password Field Initial State', async ({ loginPage }) => {
        await loginPage.goto();
        await expect(loginPage.locators.passwordInput).toHaveValue('');
    });


    // Invalid Login Should Not Navigate To Dashboard
    test('TC018 - Invalid Login Should Not Navigate To Dashboard', async ({ loginPage, page }) => {
        await loginPage.goto();
        await loginPage.login(
            loginData.invalidUser.username, loginData.invalidUser.password);
        await expect(page).not.toHaveURL(/dashboard/);
        await expect(loginPage.locators.invalidCredentialsMessage).toBeVisible();
    });


    // Verify Password Is Masked
    test('TC019 - Verify Password Is Masked', async ({ loginPage }) => {
        await loginPage.goto();
        const passwordType = await loginPage.locators.passwordInput.getAttribute('type');
        expect(passwordType).toBe('password');
    });



    // Verify Successful Login URL
    test('TC020 - Verify Successful Login URL', async ({ loginPage, page }) => {
        await loginPage.goto();
        await loginPage.login(loginData.validUser.username, loginData.validUser.password);
        await expect(page).toHaveURL(/dashboard/);
    });

});

