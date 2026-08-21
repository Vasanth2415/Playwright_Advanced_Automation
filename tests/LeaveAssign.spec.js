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



















































    });