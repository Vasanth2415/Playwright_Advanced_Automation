class LeaveLocators {
    constructor(page) {
        this.page = page;


        // Left Menu
        this.leaveMenu = page.getByRole('link', { name: 'Leave', exact: true });

        // Leave Sub Menu
        this.assignLeaveMenu = page.getByText('Assign Leave', { exact: true });

        //Assign Leave Page
        this.assignLeaveHeading = page.getByRole('heading', { name: 'Assign Leave', exact: true })

        // Employee name
        this.employeeNameInput = page.locator('div').filter({ hasText: /^Employee Name$/ }).getByPlaceholder('Type for hints...');


        // Employee - Auto Complete Result
        this.employeeSuggestion = page.locator('.oxd-autocomplete-option');

        // Leave Type
        this.leaveTypeDropdown = page.locator('.oxd-form-row').filter({ hasText: 'Leave Type' }).locator('.oxd-select-text');

        // From Date
        this.fromDateInput = page.locator('.oxd-form-row').filter({ hasText: 'From Date' }).locator('input');

        //this.fromDateInput = page.getByRole('textbox', { name: 'From Date' });

        // To Date
        this.toDateInput = page.locator('.oxd-form-row').filter({ hasText: 'To Date' }).locator('input');
        //this.toDateInput = page.getByRole('textbox', { name: 'To Date' });

        //Partial Date
        this.partialDaysDropdown = page.locator('.oxd-form-row').filter({ hasText: 'Partial Days' }).locator('.oxd-select-text');

        // Duration 
        this.durationDropdown = page.locator('.oxd-form-row').filter({ hasText: 'Duration' }).locator('.oxd-select-wrapper'); 
        
        // End Date
        //this.endDayDropdown = page.locator('.oxd-form-row').filter({ hasText: 'End Day' }).locator('.oxd-select-text');


        // Comments
        this.commentInput = page.getByLabel('Comment');

        // Assign Button
        this.assignButton = page.getByRole('button', { name: 'Assign', exact: true });

        //Cancel Button
        this.cancelButton = page.getByRole('button', { name: 'Cancel', exact: true });

        // Required Validation
        this.requiredError = page.getByText('Required', { exact: true });

        // Success Toast
        this.successToast = page.getByRole('alert');

        // Error Toast
        this.errorToast = page.getByRole('alert');


    }
}