const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pygbdo',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto curso Cypress'
    },
    baseUrl: 'http://automationpratice.com.br',
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
