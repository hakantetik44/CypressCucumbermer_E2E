class BasePage {
    waitForPageLoad() {
        cy.window().its('document').its('readyState').should('eq', 'complete');
        cy.get('body').should('be.visible');
    }

    waitForElement(element, timeout = 10000) {
        return cy.get(element, { timeout }).should('be.visible');
    }

    waitForElementAndClick(element, timeout = 10000) {
        return this.waitForElement(element, timeout).click({ force: true });
    }

    waitForElementAndHover(element, timeout = 10000) {
        return this.waitForElement(element, timeout).trigger('mouseover');
    }

    waitForUrl(urlPart, timeout = 10000) {
        cy.url({ timeout }).should('include', urlPart);
    }

    scrollToTop() {
        cy.scrollTo('top', { duration: 500 });
    }

    scrollToElement(element, offset = { top: 0, left: 0 }) {
        return cy.get(element).scrollIntoView(offset);
    }

    getText(element) {
        return cy.get(element).invoke('text');
    }

    setValue(element, value) {
        cy.get(element).clear().type(value);
    }

    isElementVisible(element) {
        return cy.get(element).should('be.visible');
    }

    clickElement(element) {
        cy.get(element).click();
    }

    hoverElement(element) {
        cy.get(element).trigger('mouseover');
    }

    verifyUrl(url) {
        cy.url().should('include', url);
    }
}

export default BasePage; 