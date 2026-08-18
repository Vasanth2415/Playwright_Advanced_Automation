class pimLocators {
  constructor(page) {
    this.page = page;

    // Main PIM menu
    this.pimMenu = page.getByRole('link', { name: 'PIM' });

    // PIM page heading
    this.pimHeading = page.getByRole('heading', { name: 'PIM' });

    // Employee List Tab
    this.employeeListLink = page.getByRole('link', { name: 'Employee List' });

    // Add Employee Tab
    this.addEmployeeLink = page.getByRole('link', { name: 'Add Employee' });

    // Employee Name filter
    this.employeeNameInput = page.getByPlaceholder('Type for hints...').first();

     // Employee ID filter
     this.employeeIDInput = page.locator('.oxd-input-group:has-text("Employee Id")').locator('input');

    // Search button
   this.searchButton =  page.getByRole('button',{name:'Search'});

    // Reset button
    this.resetButton = page.getByRole('button',{name:'Reset'});

    // Add button
    this.addButton = page.getByRole('button',{name:'Add'});

    // Employee List heading
    this.employeeListHeading = page.getByRole('heading',{name:'Employee Information'});

    // Add Employee heading
    this.addEmployeeHeading = page.getByRole('heading',{name:'Add Employee'});

    // First Name
    this.firstNameInput = page.getByPlaceholder('First Name');

    // Middle Name
    this.middleNameInput =page.getByPlaceholder('Middle Name');

    // Last Name
    this.lastNameInput =page.getByPlaceholder('Last Name');

    // Employee ID  
    this.employeeIdAddInput  = page.locator('.oxd-input-group:has-text("Employee Id")').locator('input');

    // Save Button
    this.saveButton = page.getByRole('button',{name:'Save'});

    // Cancel Button
    this.cancelButton =page.getByRole('button',{name:'Cancel'});

    // Employee Table
    this.employeeTable = page.getByRole('table');

    // Table rows
    this.employeeRows = page.getByRole('row');

    // Delete button
    this.deleteButton = page.getByRole('button', {name:'Delete'});

  }
}

module.exports = PIMLocators;