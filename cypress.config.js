const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'https://cypress.vivifyscrum-stage.com/my-organizations',
    api : 'https://cypress-api.vivifyscrum-stage.com/api/v2',
    env : {
      VALID_USER_EMAIL: 'test123@test.com',
      VALID_USER_PASSWORD: 'test12345'
    }
  }
});
