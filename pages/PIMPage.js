const PIMLocators = require('../locators/PIMLocators');

class PIMPage{

    constructor(page){
        this.page = page;
       this.locators =  new PIMLocators(page);
    }

    // Navigate to PIM Page
async goto(){
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
}


// Open PIM from Dashboard Page
async openPIM(){
    await this.locators.pimMenu.click();
}

// Open Employee List
async openEmployeeList(){
    await this.locators.employeeListLink.click();
}

// Open Add Employee
async openAddEmployee(){
    await this.locators.addEmployeeLink.click();
}

// Search employee by name
async searchEmployeeByName(employeeName){
    await this.locators.employeeNameInput.fill(employeeName);
    await this.locators.searchButton.click();
}

// Search employee by ID
async searchEmployeeByID(employeeID){
    await this.locators.employeeIDInput.fill(employeeID);
    await this.locators.searchButton.click();
}

// Reset Search
async resetSearch(){
    await this.locators.resetButton.click();
}

// Click Add Button
async clickAdd(){
    await this.locators.addButton.click();
}

// Enter Firstname
async enterFirstName(firstName){
    await this.locators.firstNameInput.fill(firstName);
}

// Enter Middlename
async enterMiddleName(middleName){
    await this.locators.middleNameInput.fill(middleName);
}

// Enter Lastname
async enterLastName(lastName){
    await this.locators.lastNameInput.fill(lastName);
}

// Add Employee
async addEmployee(firstName, middleName, lastName){
    await this.enterFirstName(firstName);
    if(middleName){
        await this.enterMiddleName(middleName);
    }
    await this.enterLastName(lastName);
    await this.locators.employeeIDInput.clear(); 
    await this.locators.saveButton.click();
}

// Cancel Add Employee
async cancelAddEmployee(){
    await this.locators.cancelButton.click();
}

// Check Employee List
async isEmployeeTableVisible(){
    return await this.locators.employeeTable.isVisible();
}

// Get Employee Rows
async getEmployeeRows(){
    return await this.locators.employeeRows.count();
}

}

module.exports = PIMPage;