class AdminLocators {
    constructor(page) {
        this.page = page;

        // Admin Navigation Menu
        this.adminMenu = page.getByRole('link', { name: 'Admin', exact: true });

        // Admin Page Heading   
        this.adminHeading = page.getByRole('heading', { name: 'Admin', exact: true });

        // User Management Text
        this.userManagementText = page.getByText('User Management', { exact: true });

        // Users Link
        this.usersLink = page.getByText('Users', { exact: true });

        // Add Button
        this.addButton = page.getByRole('button', { name: 'Add', exact: true });

        // Search Button
        this.searchButton = page.getByRole('button', { name: 'Search', exact: true });

        // Reset Button
        this.resetButton = page.getByRole('button', { name: 'Reset', exact: true });

        // Username Search Field
        this.usernameSearchInput = page.locator('label:has-text("Username")').locator('..').locator('input');

        // User Role dropdown
        this.userRoleDropdown = page.locator('div').filter({ hasText: /^User Role$/ })
            .getByText('-- Select --', { exact: true });

        /* this.userRoleDropdown = page.getByText(
           '-- Select --',
           { exact: true }
         ).nth(0); */

        // Employee name search field
        this.employeeNameSearchInput = page.getByPlaceholder('Type for hints...', { exact: true })
            .below(page.getByText('Employee Name'));

        // Status drop down
        this.statusDropdown = page.locator('div')
            .filter({ has: page.getByText('Status', { exact: true }) })
            .getByText('-- Select --', { exact: true });

        // Add user Page
        this.addUserHeading = page.getByRole('heading', { name: 'Add User', exact: true });

        // User Role - Add User
        this.addUserRoleDropdown = page.locator('div')
            .filter({ has: page.getByText('User Role', { exact: true }) })
            .getByText('-- Select --', { exact: true });

        // Employee name - Add User
        this.addUserEmployeeNameInput = page.locator('div')
            .filter({ has: page.locator('label:has-text("Employee Name")') })
            .getByPlaceholder('Type for hints...');


        // UserName - Add user
        this.usernameInput = page.getByLabel('Username', { exact: true });

        // Password - Add 
        this.passwordInput = page.getByLabel('Password', { exact: true });

        // Confirm Password
        this.confirmPassword = page.getByLabel('Confirm Password', { exact: true });

        // Save button
        this.saveButton = page.getByRole('button', { name: 'Save', exact: true });

        // Cancel Button
        this.cancelButton = page.getByRole('button', { name: 'Cancel', exact: true });

        //User Table
        this.userTable = page.getByRole('table');

        // User Rows
        this.userRows = page.getByRole('row');

        // Edit button
        this.editButtons = page.getByRole('button', { name: /Edit/ });

        //Delete Button
        this.deleteButtons = page.getByRole('button', { name: /Delete/ });

        // Confirm Delete Button
        this.confirmDeleteButton = page.getByRole('button', { name: /Yes, Delete/ });

        // Cancel Delete
        this.cancelDeleteButton = page.getByRole('button', { name: '/No, Cancel/' });

        // Required Validation
        this.requiredError = page.getByText('Required', { exact: true });

        // Password mismatch Validation
        this.passwordMismatchError = page.getByText(/Passwords do not match/i);

        // Records Found
        this.recordsFoundText = page.getByText(/Records Found/i);

    }
}

module.exports = AdminLocators;