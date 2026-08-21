const { test: base } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const PimPage = require('../pages/PIMPage');
const AdminPage = require('../pages/AdminPage');
const LeavePage = require('../pages/LeavePage');

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
  },
  // Leave Page Fixture
  leavePage: async ({ page }, use) => {

    const leavePage = new LeavePage(page);

    await use(leavePage);
  }
});

module.exports = { test, expect: base.expect };