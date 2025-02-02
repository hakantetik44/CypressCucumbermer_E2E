import BasePage from './BasePage';

class HomePage extends BasePage {
    elements = {
        menuButton: '[data-test="header-menu-button"]',
        leGroupeMenu: '.elementor-sticky--active a.elementor-item.has-submenu[href="https://abylsen.com/le-groupe/"]:first',
        territoiresInnovation: '.elementor-sticky--active li.menu-item-2176 > a.elementor-item[href*="nos-territoires-dinnovation"]:first',
        automobileLink: 'a:contains("Automobile"):first',
        contextText: 'div:contains("Le contexte"):first'
    }

    visit() {
        cy.visit("https://abylsen.com", {
            timeout: 30000,
            onBeforeLoad: (win) => {
                // Prevent TypeScript errors
                win.addEventListener = win.addEventListener || function() {};
            }
        });
        
        this.waitForPageLoad();
        this.waitForElement('nav');
    }

    clickTerritoiresInnovation() {
        this.waitForPageLoad();
        this.scrollToTop();
        
        // Le Groupe menüsüne hover yap ve tıkla
        this.waitForElementAndHover(this.elements.leGroupeMenu)
            .should('be.visible')
            .click({ force: true });
        
        // Alt menü linkine tıkla
        this.waitForElementAndHover(this.elements.territoiresInnovation)
            .should('be.visible')
            .click({ force: true });
        
        // URL değişikliğini bekle
        this.waitForUrl('nos-territoires-dinnovation');
    }

    clickAutomobile() {
        this.waitForElement(this.elements.automobileLink)
            .scrollIntoView()
            .should('be.visible')
            .click({ force: true });
            
        // Tıklama sonrası sayfanın yüklenmesini bekle
        this.waitForPageLoad();
    }

    verifyContexteText() {
        return this.waitForElement(this.elements.contextText)
            .scrollIntoView()
            .should('be.visible');
    }
}

export default new HomePage(); 