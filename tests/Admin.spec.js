const { test, expect } = require('../fixtures/commonFixture');
const loginData = require('../testdata/loginData.json');
const adminData = require('../testdata/adminData.json');
const TestUtils = require('../utils/TestUtils');

test.describe('OrangeHRM Admin Module', () => {
    // Login Before each admin test
    test.beforeEach(async ({ loginPage, adminPage }) => {

        await loginPage.goto();

        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );

        await adminPage.openAdmin();
    });

    test('TC001- Verify Admin Page URL', async ({ page }) => {
        await expect(page).toHaveURL(/admin\/viewSystemUsers/);
    });

    test('TC002 - Verify Admin Page Title', async ({ page }) => {
        await expect(page).toHaveTitle(/OrangeHRM/);
    });

    test('TC003 - Verify Admin Heading', async ({ adminPage }) => {
        await expect(adminPage.locators.adminHeading).toBeVisible();
    });

    test('TC004 - Verify User Management', async ({ adminPage }) => {
        await expect(adminPage.locators.userManagementText).toBeVisible();
    });

    test('TC005 - Verify Users Section', async ({ adminPage }) => {
        await expect(adminPage.locators.usersLink).toBeVisible();
    });

    // BUTTON ASSERTIONS
    test('TC006 - Verify Add button', async ({ adminPage }) => {
        await expect(adminPage.locators.addButton).toBeVisible();
        await expect(adminPage.locators.addButton).toBeEnabled();
    });

    test('TC007 - Verify Search button', async ({ adminPage }) => {
        await expect(adminPage.locators.searchButton).toBeVisible();
        await expect(adminPage.locators.searchButton).toBeEnabled();
    });

    test('TC007 - Verify Reset Button', async ({ adminPage }) => {
        await expect(adminPage.locators.resetButton).toBeVisible();
        await expect(adminPage.locators.resetButton).toBeEnabled();
    })

    // User Table
    test('TC009 - Verify User Table', async ({ adminPage }) => {
        await expect(adminPage.locators.userTable).toBeVisible();
    });

    test('TC010 - Verify User Table Contains Rows', async ({ adminPage }) => {
        const rowCount = await adminPage.getUserRowCount();
        expect(rowCount).toBeGreaterThan(0);
    });

    // Search Username
    test('TC011 - Search User By Valid Username', async ({ adminPage }) => {
        await adminPage.searchByUsername(adminData.validSearch.username);
        await expect(adminPage.locators.userTable).toBeVisible();
    });

    test('TC012 - Search User By Invalid Username', async ({ adminPage }) => {
        await adminPage.searchByUsername(adminData.invalidSearch.username);
        await expect(adminPage.locators.userTable).toBeVisible();
    });

    // Search Employee Name
    test('TC013 - Search User By Employee Name', async ({ adminPage }) => {
        await adminPage.searchByEmployeeName(adminData.validSearch.employeeName);
        await expect(adminPage.locators.userTable).toBeVisible();
    });

    test('TC014 - Search User By Invalid Employee Name', async ({ adminPage }) => {
        await adminPage.searchByEmployeeName(adminData.invalidSearch.employeeName);
        await expect(adminPage.locators.userTable).toBeVisible();
    });

    // Search Role
    test('TC015 - Search User By Role', async ({ adminPage }) => {
        await adminPage.selectUserRole(adminData.searchByRole.role);
        await adminPage.locators.searchButton.click();
        await expect(adminPage.locators.userTable).toBeVisible();
    });

    // Search Status
    test('TC016 - Search User By Status', async ({ adminPage }) => {
        await adminPage.selectStatus(adminData.searchByStatus.status);
        await adminPage.locators.searchButton.click();
        await expect(adminPage.locators.userTable).toBeVisible();
    });

    // Multiple Filters
    test('TC017 - Search Using Multiple Filters', async ({ adminPage }) => {

        await adminPage.searchWithFilters({
            username: adminData.validSearch.username,
            userRole: adminData.validSearch.role,
            employeeName: adminData.validSearch.employeeName,
            status: adminData.validSearch.status
        });

        await expect(adminPage.locators.userTable).toBeVisible();
    });

    // Reset 
    test('TC018 - Reset Search Filters', async ({ adminPage }) => {

        await adminPage.searchWithFilters({
            username: adminData.validSearch.username,
            userRole: adminData.validSearch.role,
            status: adminData.validSearch.status
        });

        await adminPage.resetSearch();

        await expect(adminPage.locators.usernameSearchInput).toHaveValue('');
    });

    // Add user Page

    test('TC019 - Open Add User Page', async ({ adminPage, page }) => {
        await adminPage.clickAdd();
        await expect(page).toHaveURL(/admin\/saveSystemUser/);
        await expect(adminPage.locators.addUserHeading).toBeVisible();
    });

    test('TC020 - Verify Username Field', async ({ adminPage }) => {
        await adminPage.clickAdd();
        await expect(adminPage.locators.usernameInput).toBeVisible();
        await expect(adminPage.locators.usernameInput).toBeEditable();
    });

    test('TC021 - Verify Password Field', async ({ adminPage }) => {
        await adminPage.clickAdd();
        await expect(adminPage.locators.passwordInput).toBeVisible();
        await expect(adminPage.locators.passwordInput).toBeEditable();
    });

    test('TC022 - Verify Confirm Password Field', async ({ adminPage }) => {
        await adminPage.clickAdd();
        await expect(adminPage.locators.confirmPasswordInput).toBeVisible();
        await expect(adminPage.locators.confirmPasswordInput).toBeEditable();
    });

    test('TC023 - Verify Save Button', async ({ adminPage }) => {
        await adminPage.clickAdd();
        await expect(adminPage.locators.saveButton).toBeVisible();
        await expect(adminPage.locators.saveButton).toBeEnabled();
    });

    test('TC024 - Verify Cancel Button', async ({ adminPage }) => {
        await adminPage.clickAdd();
        await expect(adminPage.locators.cancelButton).toBeVisible();
        await expect(adminPage.locators.cancelButton).toBeEnabled();
    });

    // Initial Field State

    test('TC025 - Verify Username Initial State', async ({ adminPage }) => {
        await adminPage.clickAdd();
        await expect(adminPage.locators.usernameInput).toHaveValue('');
    });


    test('TC026 - Verify Password Initial State', async ({ adminPage }) => {
        await adminPage.clickAdd();
        await expect(adminPage.locators.passwordInput).toHaveValue('');
    });


    test('TC027 - Verify Confirm Password Initial State', async ({ adminPage }) => {
        await adminPage.clickAdd();
        await expect(adminPage.locators.confirmPasswordInput).toHaveValue('');
    });

















});