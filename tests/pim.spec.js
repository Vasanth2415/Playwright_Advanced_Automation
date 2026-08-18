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


});