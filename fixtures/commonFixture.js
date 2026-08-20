const {test: base} = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const PimPage = require('../pages/PIMPage'); 
const AdminPage = require('../pages/AdminPage');

const test = base.extend({

  // Login Page Fixture
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
   await use(loginPage);
  },

  // PIM Page Fixture
  pimPage: async ({ page }, use) => {
    const pimPage = new PimPage(page);
    await use(pimPage);
  },
  
  // Admin Page Fixture
  adminPage: async ({ page }, use) => {
    const adminPage = new AdminPage(page);
    await use(adminPage);
  }
});

module.exports = {test,expect:base.expect};