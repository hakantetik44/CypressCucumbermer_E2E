import './commands';
import 'cypress-mochawesome-reporter/register';
import 'cypress-plugin-steps';

// Uncaught exception handler
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

// Before each test
beforeEach(function() {
    cy.step('Le test commence');
});

// After each test
afterEach(function() {
    if (this.currentTest?.state === 'failed') {
        cy.step('Le test a échoué');
        cy.screenshot();
    } else {
        cy.step('Le test est réussi');
    }
}); 