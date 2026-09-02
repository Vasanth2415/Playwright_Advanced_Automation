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

        // Valid Assign Leave
        test('TC013 - Assign Leave With Valid Data', async ({ leavePage }) => {
            await leavePage.assignLeave(leaveData.validAssignLeave);
            await expect(leavePage.locators.successToast).toBeVisible();
        }
        );

        // Single Day Leave
        test('TC014 - Assign Single Day Leave', async ({ leavePage }) => {
            await leavePage.assignLeave(leaveData.singleDayLeave);
            await expect(leavePage.locators.successToast).toBeVisible();
        });

        // Multiple Day Leave
        test('TC015 - Assign Multiple Day Leave', async ({ leavePage }) => {
            await leavePage.assignLeave(leaveData.multiDayLeave);
            await expect(leavePage.locators.successToast).toBeVisible();
        });

        // Partial Day Morning
        test('TC016 - Assign Morning Half Day Leave', async ({ leavePage }) => {
            await leavePage.assignLeave(leaveData.partialDayMorning);
            await expect(leavePage.locators.successToast).toBeVisible();
        });

        // Partial Day Afternoon
        test('TC017 - Assign Afternoon Half Day Leave', async ({ leavePage }) => {
            await leavePage.assignLeave(leaveData.partialDayAfternoon);
            await expect(leavePage.locators.successToast).toBeVisible();
        });

        // Invalid Employee 
        test('TC018 - Assign Leave With Invalid Employee', async ({ leavePage }) => {
            await leavePage.enterEmployeeName(leaveData.invalidEmployee.employeeName);
            await leavePage.clickAssign();
            await expect(leavePage.locators.assignLeaveHeading).toBeVisible();
        });

        // Empty Employee 
        test('TC019 - Assign Leave Without Employee', async ({ leavePage }) => {
            await leavePage.selectLeaveType(leaveData.emptyEmployee.leaveType);
            await leavePage.enterFromDate(leaveData.emptyEmployee.fromDate);
            await leavePage.enterToDate(leaveData.emptyEmployee.toDate);
            await leavePage.clickAssign();
            await expect(leavePage.locators.requiredError.first()).toBeVisible();
        });

        // EMPTY LEAVE TYPE
        test('TC020 - Assign Leave Without Leave Type', async ({ leavePage }) => {
            await leavePage.selectEmployee(leaveData.emptyLeaveType.employeeName);
            await leavePage.enterFromDate(leaveData.emptyLeaveType.fromDate);
            await leavePage.enterToDate(leaveData.emptyLeaveType.toDate);
            await leavePage.clickAssign();
            await expect(leavePage.locators.assignLeaveHeading).toBeVisible();
        });

        // EMPTY FROM DATE
        test('TC021 - Assign Leave Without From Date', async ({ leavePage }) => {
            await leavePage.selectEmployee(leaveData.emptyFromDate.employeeName);
            await leavePage.selectLeaveType(leaveData.emptyFromDate.leaveType);
            await leavePage.enterToDate(leaveData.emptyFromDate.toDate);
            await leavePage.clickAssign();
            await expect(leavePage.locators.assignLeaveHeading).toBeVisible();
        }
        );

        // EMPTY TO DATE
        test('TC022 - Assign Leave Without To Date', async ({ leavePage }) => {
            await leavePage.selectEmployee(leaveData.emptyToDate.employeeName);
            await leavePage.selectLeaveType(leaveData.emptyToDate.leaveType);
            await leavePage.enterFromDate(leaveData.emptyToDate.fromDate);
            await leavePage.clickAssign();
            await expect(leavePage.locators.assignLeaveHeading).toBeVisible();
        });

        // INVALID DATE RANGE
        test('TC023 - Assign Leave With Invalid Date Range', async ({ leavePage }) => {
            await leavePage.selectEmployee(leaveData.invalidDateRange.employeeName);
            await leavePage.selectLeaveType(leaveData.invalidDateRange.leaveType);
            await leavePage.enterFromDate(leaveData.invalidDateRange.fromDate);
            await leavePage.enterToDate(leaveData.invalidDateRange.toDate);
            await leavePage.clickAssign();
            await expect(leavePage.locators.assignLeaveHeading).toBeVisible();
        });

        // SAME FROM AND TO DATE
        test('TC024 - Assign Leave With Same From And To Date', async ({ leavePage }) => {
            await leavePage.assignLeave(leaveData.sameDate);
            await expect(leavePage.locators.successToast).toBeVisible();
        });

        // SPECIAL CHARACTERS
        test('TC025 - Assign Leave With Special Characters In Comment', async ({ leavePage }) => {
            await leavePage.assignLeave(leaveData.specialCharacterComment);
            await expect(leavePage.locators.successToast).toBeVisible();
        });



























    });