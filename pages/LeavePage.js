const LeaveLocators = require('../locators/LeaveLocators');

class LeavePage {

    constructor(page) {
        this.page = page;
        this.locators = new LeaveLocators(page);
    }


    // Navigate Directly to Assign Leave
    async gotoAssignLeave() {
        await this.page.goto('/web/index.php/leave/assignLeave');
        await this.locators.assignLeaveHeading.waitFor({ state: 'visible' });
    }

    // Open Leave Menu
    async openLeaveMenu() {
        await this.locators.leaveMenu.click();
    }

    // Open Assign Leave
    async openAssignLeave() {
        await this.openLeaveMenu();
        await this.locators.assignLeaveMenu.click();
        await this.locators.assignLeaveHeading.waitFor({ state: 'visible' });
    }

    // Enter Employee Name
    async enterEmployeeName(employeeName) {
        await this.locators.employeeNameInput.fill(employeeName);
    }

    // select employee from auto complete
    async selectEmployee(employeeName) {
        await this.enterEmployeeName(employeeName);
        const suggestion = this.locators.employeeSuggestion.filter({ hasText: employeeName }).first();
        await suggestion.waitFor({ state: 'visible' });
        await suggestion.click();
    }

    async selectLeaveType(leaveType) {
        await this.locators.leaveTypeDropdown.click();
        const option = this.page.getByRole('option', { name: leaveType, exact: true });
        await option.waitFor({ state: 'visible' });
        await option.click();
    }
    // Enter From Date

    async enterFromDate(fromDate) {
        await this.locators.fromDateInput.fill(fromDate);
    }

    // Enter To Date
    async enterToDate(toDate) {
        await this.locators.toDateInput.fill(toDate);
    }

    // Select Partial Days 

    async selectPartialDays(partialDays) {

        await this.locators.partialDaysDropdown.click();
        const option = this.page.getByText(partialDays, { exact: true });
        await option.waitFor({ state: 'visible' });
        await option.click();
    }

    // Select Duration

    async selectDuration(duration) {

        await this.locators.durationDropdown.click();
        const option = this.page.getByText(duration, { exact: true });
        await option.waitFor({ state: 'visible' });
        await option.click();
    }

    // Enter Comment
    async enterComment(comment) {
        await this.locators.commentInput.fill(comment);
    }

    // Click Assign
    async clickAssign() {
        await this.locators.assignButton.click();
    }

    // Click Cancel
    async clickCancel() {
        await this.locators.cancelButton.click();
    }

    // Assign Leave Complete Flow
    async assignLeave(data) {

        await this.selectEmployee(data.employeeName);
        await this.selectLeaveType(data.leaveType);
        await this.enterFromDate(data.fromDate);
        await this.enterToDate(data.toDate);

        if (data.partialDays) {
            await this.partialDays(data.partialDays);
        }
        if (data.duration) {
            await this.selectDuration(data.duration);
        }

        if (data.comment) {
            await this.enterComment(data.comment);
        }
        await this.clickAssign();

    }

    // Verify Assign Button
    async isAssignButtonEnabled() {
        return await this.locators.assignButton.isEnabled();
    }


    // Verify Cancel Button
    async isCancelButtonEnabled() {
        return await this.locators.cancelButton.isEnabled();
    }

}

module.exports = LeavePage;









