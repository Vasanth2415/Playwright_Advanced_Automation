const { test, expect } = require('../fixtures/commonFixture');

const loginData = require('../testdata/loginData.json');

const leaveData = require('../testdata/leaveData.json');

test.describe(
    'OrangeHRM - Leave - Assign Leave', () => {

        // Login before every test

        test.beforeEach(async ({ loginPage, leavePage }) => {
            await loginPage.goto();
            await loginPage.login(
                loginData.validUser.username,
                loginData.validUser.password
            );
            await leavePage.openAssignLeave();
        }
        );

        // Verify Assign Leave URl
        test('TC001 - Verify Assign URL', async ({ leavePage }) => {
            await expect(leavePage.page).toHaveURL(/leave\/assignLeave/);
        });


        // Verify Page Title
        test('TC002 - Verify Assign Leave Page Title', async ({ leavePage }) => {
            await expect(leavePage.page).toHaveTitle(/OrangeHRM/);
        }
        );

        // Verify Page Heading
        test('TC003 - Verify Assign Leave Heading', async ({ leavePage }) => {
            await expect(leavePage.locators.assignLeaveHeading).toBeVisible();
        }
        );

        // Verify Employee Field
        test('TC004 - Verify Employee name field', async ({ leavePage }) => {
            await expect(leavePage.locators.employeeNameInput).toBeVisible();
            await expect(leavePage.locators.employeeNameInput).toBeEnabled();
        });

        // Verify Leave Type
        test('TC005 - Verify Leave Type field', async ({ leavePage }) => {
            await expect(leavePage.locators.leaveTypeDropdown).toBeVisible();
        });


        // Verify From Date
        test('TC006 - Verify From Date Field', async ({ leavePage }) => {
            await expect(leavePage.locators.fromDateInput).toBeVisible();
            await expect(leavePage.locators.fromDateInput).toBeEnabled();
        });


        // Verify To Date
        test('TC007 - Verify To Date Field', async ({ leavePage }) => {
            await expect(leavePage.locators.toDateInput).toBeVisible();
            await expect(leavePage.locators.toDateInput).toBeEnabled();
        });

        // Verify Partial Days
        test('TC008 - Verify Partial Days', async ({ leavePage }) => {
            await expect(leavePage.locators.partialDaysDropdown).toBeVisible();
        });

        // Verify Duration
        test('TC009 - Verify Duration Field', async ({ leavePage }) => {
            await expect(leavePage.locators.durationDropdown).toBeVisible();
        });

        // Verify Comment
        test('TC010 - Verify Comment field', async ({ leavePage }) => {
            await expect(leavePage.locators.commentInput).toBeVisible();
        });
        //Verify Assign Button
        test('TC011 - Verify Assign Button', async ({ leavePage }) => {
            await expect(leavePage.locators.assignButton).toBeVisible();
            await expect(leavePage.locators.assignButton).toBeEnabled();
        });


        // Cancel Button
        test('TC012-Verify Cancel button', async ({ leavePage }) => {
            await expect(leavePage.locators.cancelButton).toBeVisible();
            await expect(leavePage.locators.cancelButton).toBeEnabled();
        });

        





































    });