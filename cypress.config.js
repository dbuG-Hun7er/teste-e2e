const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    video: true,
    reporter: 'junit',
    reporterOptions: {
    mochaFile: 'results/my-test-output.xml',
    toConsole: true
  }
  },
});
