import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../pages/HomePage';

Given('Je suis sur la page d\'accueil d\'Abylsen', () => {
    cy.step('Navigation vers la page d\'accueil');
    HomePage.visit();
});

When('Je clique sur {string}', (text) => {
    cy.step(`Clic sur le lien "${text}"`);
    
    if (text === "Nos territoires d'innovation") {
        HomePage.clickTerritoiresInnovation();
    } else if (text === "Automobile") {
        HomePage.clickAutomobile();
    }
});

Then('Je dois voir le texte {string}', (text) => {
    cy.step(`Vérification de la présence du texte "${text}"`);
    HomePage.verifyContexteText();
}); 