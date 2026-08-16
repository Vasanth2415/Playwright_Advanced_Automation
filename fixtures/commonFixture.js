const {test: base} = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const test = base.extend({

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
   await use(loginPage);
  }

});

module.exports = {test,expect:base.expect};