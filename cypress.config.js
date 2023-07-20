const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  report: 'mochawesome',
  reportOptions: {
    charts: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir: 'cyress/reports/',
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });
      require('cypress-mochawesome-reporter/plugin')(on)
      // on('after:run', async () => {
      //   console.log('override after:run');
      //   await afterRunHook();
      // });
      
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
