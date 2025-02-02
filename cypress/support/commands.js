// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('forceClick', {prevSubject: 'element'}, (subject) => {
    cy.wrap(subject).click({force: true})
});

Cypress.Commands.add('waitAndClick', (selector) => {
    cy.get(selector).should('be.visible').click()
}); 