const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
    e2e: {
        specPattern: '**/*.feature',
        async setupNodeEvents(on, config) {
            // Cucumber
            await addCucumberPreprocessorPlugin(on, config);

            // esbuild bundler
            const bundler = createBundler({
                plugins: [createEsbuildPlugin(config)],
            });
            on('file:preprocessor', bundler);

            // Mochawesome reporter setup
            require('cypress-mochawesome-reporter/plugin')(on);

            return config;
        },
        video: true,
        videoCompression: 15,
        screenshotOnRunFailure: true,
        viewportWidth: 1920,
        viewportHeight: 1080,
        reporter: 'cypress-mochawesome-reporter',
        reporterOptions: {
            charts: true,
            reportPageTitle: 'Rapport de Test Abylsen',
            embeddedScreenshots: true,
            inlineAssets: true,
            saveAllAttempts: false,
            overwrite: true,
            html: true,
            json: false,
            reportDir: 'cypress/reports/html',
            reportFilename: 'index',
            embeddedVideo: true,
            videoOnFailure: true,
            code: false
        }
    },
}); 