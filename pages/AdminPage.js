const AdminLocators = require('../locators/AdminLocators');
class AdminPage {

    constructor(page) {

        this.page = page;

        this.locators = new AdminLocators(page);
    }
    // Navigation
    async goto() {
        await this.page.goto('/web/index.php/admin/viewSystemUsers');
    }

    async openAdmin() {
        await this.locators.adminMenu.click();
    }


    // Search
    async searchByUserName(username) {
        await this.locators.usernameSearchInput.fill(username);
        await this.locators.searchButton.click();
    }

    async searchByEmployeeName(employeename) {
        await this.locators.employeeNameSearchInput.fill(employeename);
        await this.locators.searchButton.click();
    }

    async resetSearch() {
        await this.locators.resetButton.click();
    }

    // User Role
    async selectUserRole(role) {
        await this.locators.userRoleDropdown.click();
        const roleOption = this.page.getByText(role, { exact: true });
        await roleOption.waitFor({ state: 'visible' });
        await roleOption.click();
    }

    // Status
    async selectStatus(status) {
        await this.locators.statusDropdown.click();
        const statusOption = this.page.getByText(status, { exact: true });
        await statusOption.waitFor({ state: 'visible' });
        await statusOption.click();
    }
    // Search with multiple filters
    async searchWithFilters({ username, userRole, employeeName, status }) {

        if (username) {
            await this.locators.usernameSearchInput.fill(username);
        }

        if (userRole) {
            await this.selectUserRole(userRole);
        }

        if (employeeName) {
            await this.locators.employeeNameSearchInput.fill(employeeName);
        }

        if (status) {
            await this.selectStatus(status);
        }

        await this.locators.searchButton.click();
    }

    // Add user

    async clickAdd() {
        await this.locators.addButton.click();
    }


    async selectAddUserRole(role) {
        await this.locators.addUserRoleDropdown.click();
        await this.page.getByText(role, { exact: true }).click();
    }

    async selectAddUserEmployee(employeeName) {
        await this.locators.addUserEmployeeNameInput.fill(employeeName);
        await this.page.getByText(employeeName, { exact: true }).click();
    }

    async enterUsername(username){
        await this.locators.usernameInput.fill(username)
    }

async enterPassword(password){
    await this.locators.passwordInput.fill(password);
}

async enterConfirmPassword(password){
    await this.locators.passwordInput.fill(password);
}

// Complete Add User
async addUser({role,employeeName,username,password,confirmPassword}){
if(role){
    await this.selectAddUserRole(role);
}
if(employeeName){
    await this.selectAddUserEmployee(employeeName);
}

await this.enterUsername(username);
await this.enterPassword(password);
await this.enterConfirmPassword(confirmPassword);
await this.locators.saveButton.click();
}

// Cancel Add User
async cancelAddUser(){
    await this.cancelButton.click();
}

// Table
async getUserRowCount(){
return await this.locators.userRows.count();
}

async isUserTableVisible(){
return await this.locators.userTable.isVisible();
}

// Edit User
async clickEditUser(index = 0) {
    await this.locators.editButtons.nth(index).click();
  }

  /* async clickEditUserByUsername(username) {
  const userRow = this.page.locator('tr', { hasText: username });
  await userRow.locator(this.locators.editButtons).click();
}*/

// Delete User
  async clickDeleteUser(index = 0) {
    await this.locators.deleteButtons.nth(index).click();
  }


  async confirmDelete() {
    await this.locators.confirmDeleteButton.click();
    /* await this.locators.confirmDeleteButton.waitFor({ state: 'visible' });
    await this.locators.confirmDeleteButton.click();*/
  }


  async cancelDelete() {
    await this.locators.cancelDeleteButton.click();
    /* await this.locators.cancelDeleteButton.waitFor({ state: 'visible' });
    await this.locators.cancelDeleteButton.click();*/
  }


  async deleteUser(index = 0) {
    await this.clickDeleteUser(index);
    await this.confirmDelete();

    /*const userRow = this.page.locator('tr', { hasText: username });
    await userRow.locator(this.locators.deleteButtons).click();*/
  }

  // Password Masking
  async getPasswordInputType() {

    return await this.locators.passwordInput
      .getAttribute('type');
  }

}

module.exports = AdminPage;
