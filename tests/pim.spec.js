const { test, expect } = require('../fixtures/commonFixture');
const loginData = require('../testdata/loginData.json');
const pimData = require('../testdata/pimData.json');
const TestUtils = require('../utils/TestUtils');

test.describe('OrangeHRM PIM Tests',() =>{

// Login Before Each PIM Test
test.beforeEach(async({loginPage,pimPage}) =>{

    await loginPage.goto();
    await loginPage.login(loginData.validUser.username, loginData.validUser.password);
    await pimPage.openPIM();
});

// Verify PIM URL
test('TC001 - Verify PIM URL',async({pimPage,page}) =>{
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
});


// Verify PIM Page Title
test('TC002 - Verify PIM Page Title',async({pimPage,page}) =>{
    await expect(page).toHaveTitle('OrangeHRM');
});

// Verify PIM Heading
test('TC003 - Verify PIM Heading',async({pimPage}) =>{
await expect(pimPage.locators.pimHeading).toBeVisible();
});

// Verify Employee List Link

test('TC004 - Verify Employee List Link',async({pimPage}) =>{
await expect(pimPage.locators.employeeListLink).toBeVisible();
await expect(pimPage.locators.employeeListLink).toBeEnabled();
});

// Verify Add Employee Link
test('TC005 - Verify Add Employee Link',async({pimPage}) =>{
await expect(pimPage.locators.addEmployeeLink).toBeVisible();
await expect(pimPage.locators.addEmployeeLink).toBeEnabled();
});

// Verify Employee List Page
test('TC006 - Verify Employee List Page',async({pimPage,page}) =>{
    await pimPage.openEmployeeList();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
});

// Verify Add Employee Page
test('TC007 - Verify Add Employee Page',async({pimPage,page}) =>{
    await pimPage.openAddEmployee();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');

await expect(pimPage.locators.addEmployeeHeading).toBeVisible();
});


// Verify Employee Name and Search Field
test('TC008 - Verify Employee Name and Search Field',async({pimPage}) =>{
    await expect(pimPage.locators.employeeNameInput).toBeVisible();
    await expect(pimPage.locators.employeeNameInput).toBeEditable();
});

// Search Employee By Name
test('TC009 - Search Employee By Name',async({pimPage}) =>{
await pimPage.searchEmployeeByName(pimData.employeeSearch.name);
await expect(pimPage.locators.employeeTable).toBeVisible();
});

// Search with Invalid Employee Name

test('TC010 - Search with Invalid Employee Name',async({pimPage}) =>{
await pimPage.searchEmployeeByName(pimData.invalidSearch.name);
await expect(pimPage.locators.employeeTable).toBeVisible();
});


// Reset Employee Serach

test('TC011 - Reset Employee Search', async({pimPage}) =>{
await pimPage.searchEmployeeByName(pimData.employeeSearch.name);
await pimPage.resetSearch();
await expect(pimPage.locators.employeeNameInput).toHaveValue('');
});


// Verify Search Button

test('TC012 - Verify Search Button', async({pimPage}) =>{
    await pimPage.locators.searchButton.waitFor({ state: 'visible' });
await expect(pimPage.locators.searchButton).toBeVisible();
await expect(pimPage.locators.searchButton).toBeEnabled();
});


// Verify Reset Button
test('TC013 - Verify Reset Button',async({pimPage}) =>{
        await pimPage.locators.resetButton.waitFor({ state: 'visible' });
await expect(pimPage.locators.resetButton).toBeVisible();
await expect(pimPage.locators.resetButton).toBeEnabled();
});

// Verify add button
test('TC014 - Verify Add Button',async({pimPage}) =>{
    await pimPage.locators.addButton.waitFor({ state: 'visible' });
await expect(pimPage.locators.addButton).toBeVisible();
await expect(pimPage.locators.addButton).toBeEnabled();
});


// Verify Open Add Employee
test('TC015 - Open add employee Using add button',async({pimPage,page}) =>{
await pimPage.clickAdd();
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');
await expect(pimPage.locators.addEmployeeHeading).toBeVisible();
});

// Verify First Name Field
test('TC016 - Verify First Name Field',async({pimPage}) =>{
    await pimPage.openAddEmployee();
    await pimPage.locators.firstNameInput.waitFor({ state: 'visible' });
await expect(pimPage.locators.firstNameInput).toBeVisible();
await expect(pimPage.locators.firstNameInput).toBeEditable();
});


// Verify Middle Name Field
test('TC017 - Verify Middle Name Field',async({pimPage}) =>{
    await pimPage.openAddEmployee();
     await pimPage.locators.middleNameInput.waitFor({ state: 'visible' });
await expect(pimPage.locators.middleNameInput).toBeVisible();
await expect(pimPage.locators.middleNameInput).toBeEditable();
});

// Verify Last Name Field
test('TC018 - Verify Last Name Field',async({pimPage}) =>{
    await pimPage.openAddEmployee();
    await pimPage.locators.lastNameInput.waitFor({ state: 'visible' });
await expect(pimPage.locators.lastNameInput).toBeVisible();
await expect(pimPage.locators.lastNameInput).toBeEditable();
});

// Add Employee with Valid Data
test('TC019 - Add Employee with Valid Data',async({pimPage}) =>{
    await pimPage.openAddEmployee();
    await pimPage.addEmployee(pimData.validEmployee.firstName,
        pimData.validEmployee.middleName,
        pimData.validEmployee.lastName);
    await expect(pimPage.page).toHaveURL(/.*viewPersonalDetails/,{ timeout: 10000 });
});

// Add Employee without Middle Name
test('TC020 - Add Employee Without Middle Name',async({pimPage,page}) =>{
    await pimPage.openAddEmployee();
    await pimPage.addEmployee(
      pimData.employeeWithoutMiddleName.firstName,
        "",
      pimData.employeeWithoutMiddleName.lastName);
     await expect(page).toHaveURL(/.*viewPersonalDetails/, { timeout: 10000 });
    });

// Empty First Name
test('TC021- Add Employee with Empty First Name',async({pimPage,page}) =>{
    await pimPage.openAddEmployee();
    await pimPage.enterLastName(pimData.validEmployee.lastName);

    await pimPage.locators.saveButton.click();
    await expect(page).toHaveURL(/.*addEmployee/);
});


// Empty Last Name
test('TC022 - Add Employee with Empty Last Name',async({pimPage,page}) =>{
    await pimPage.openAddEmployee();
    await pimPage.enterFirstName(pimData.validEmployee.firstName);

    await pimPage.locators.saveButton.click();
     await expect(page).toHaveURL(/.*addEmployee/);
});
    

// All EMployee Fields empty
test('TC023 - Add Employee with All Fields Empty',async({pimPage,page}) =>{
    await pimPage.openAddEmployee();
    await pimPage.locators.saveButton.click();
    await expect(page).toHaveURL(/.*addEmployee/);
});

// Special Characters

test('TC024 - Add Employee with Special Characters',async({pimPage,page}) =>{
    await pimPage.openAddEmployee();
    await pimPage.addEmployee(pimData.specialCharacterEmployee.firstName,
        pimData.specialCharacterEmployee.middleName,
        pimData.specialCharacterEmployee.lastName);
    await expect(page).toHaveURL(/.*addEmployee/);
});

//Numeric Employee
test('TC025 - Add Employee with Numeric Values',async({pimPage,page}) =>{
    await pimPage.openAddEmployee();
    await pimPage.addEmployee(pimData.numericEmployee.firstName,pimData.numericEmployee.middleName,
        pimData.numericEmployee.lastName);
await expect(page).toHaveURL(/.*addEmployee/);
});

// Long Name Employee
test('TC026 - Add Employee with Long Name',async({pimPage,page}) =>{
    await pimPage.openAddEmployee();
    await pimPage.addEmployee(pimData.longEmployeeName.firstName,
        pimData.longEmployeeName.middleName,
        pimData.longEmployeeName.lastName);
await expect(page).toHaveURL(/.*addEmployee/);
    });

// Cancel Add Employee
test('TC027 - Cancel Add Employee',async({pimPage,page}) =>{
    await pimPage.openAddEmployee();
    await pimPage.enterFirstName(pimData.validEmployee.firstName);
    await pimPage.cancelAddEmployee();
    await expect(page).toHaveURL(/.*viewEmployeeList/,{ timeout: 10000 });
});

// Verify Add Employee Form Initially Empty

test('TC028 - Verify Add Employee Form Initially Empty',async({pimPage}) =>{
await pimPage.openAddEmployee();
await expect(pimPage.locators.firstNameInput).toHaveValue('');
await expect(pimPage.locators.middleNameInput).toHaveValue('');
await expect(pimPage.locators.lastNameInput).toHaveValue('');
});


// Verify Employee Table
test('TC029 - Verify Employee Table',async({pimPage}) =>{
    await pimPage.locators.employeeTable.waitFor({ state: 'visible', timeout: 10000 });
await expect(pimPage.locators.employeeTable).toBeVisible();
});


});