# 🚀 Abylsen E2E Test Automation Framework

<div align="center">

<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Rocket.png" width="150" />

[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/)
[![Cucumber](https://img.shields.io/badge/Cucumber-23D96C?style=for-the-badge&logo=cucumber&logoColor=white)](https://cucumber.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

</div>

<div align="center">

### 🌟 Framework de Test Automatisé pour le Site Web d'Abylsen 🌟
_Un framework robuste combinant Cypress, Cucumber et Mochawesome Reporter_

</div>

---

## 📋 Table des Matières

- [🎯 Aperçu](#aperçu)
- [🛠️ Technologies Utilisées](#technologies-utilisées)
- [📦 Prérequis](#prérequis)
- [⚙️ Installation](#installation)
- [🚀 Exécution des Tests](#exécution-des-tests)
- [📊 Rapports](#rapports)
- [🏗️ Structure du Projet](#structure-du-projet)
- [✨ Fonctionnalités](#fonctionnalités)
- [📝 Guide d'Écriture des Tests](#guide-décriture-des-tests)
- [🔧 Configuration](#configuration)
- [📱 Intégration Continue](#intégration-continue)
- [🐛 Dépannage](#dépannage)

---

## 🎯 Aperçu

Ce framework de test E2E est spécialement conçu pour automatiser les tests du site web d'Abylsen. Il combine la puissance de Cypress pour les tests E2E, Cucumber pour le BDD, et Mochawesome pour des rapports détaillés.

## 🛠️ Technologies Utilisées

- 🌐 **Cypress** (v14.0.1) - Framework de test moderne
- 🥒 **Cucumber** - Pour l'écriture des tests en BDD
- 📊 **Mochawesome Reporter** - Pour des rapports détaillés
- 📹 **Cypress Video** - Enregistrement automatique des tests
- 📸 **Cypress Screenshots** - Captures d'écran automatiques
- 🎭 **Page Object Model** - Pour une meilleure maintenance

## 📦 Prérequis

- Node.js (v14 ou supérieur)
- npm (v6 ou supérieur)
- Git
- Un navigateur moderne (Chrome recommandé)

## ⚙️ Installation

```bash
# Cloner le projet
git clone https://github.com/hakantetik44/CypressCucumbermer_E2E.git

# Accéder au répertoire
cd CypressCucumbermer_E2E

# Installer les dépendances
npm install
```

## 🚀 Exécution des Tests

```bash
# Nettoyer les rapports précédents
npm run clean:reports

# Exécuter tous les tests avec rapport
npm run test

# Exécuter Cypress en mode interactif
npm run cy:open

# Exécuter un test spécifique
npm run cy:run -- --spec "cypress/e2e/features/automobile.feature"

# Exécuter les tests en parallèle
npm run cy:parallel

# Exécuter les tests avec un tag spécifique
npm run cy:tags -- --env TAGS="@smoke"

# Générer et ouvrir le rapport
npm run report:generate
npm run report:open
```

## 📊 Rapports

Les rapports sont générés automatiquement après chaque exécution de test :

- 📂 **Emplacement**: `cypress/reports/html/index.html`
- 🎥 **Vidéos**: `cypress/videos/`
- 📸 **Screenshots**: `cypress/screenshots/`

### Commandes pour les Rapports

```bash
# Générer le rapport
npm run report:generate

# Ouvrir le rapport dans le navigateur
npm run report:open

# Nettoyer les anciens rapports
npm run clean:reports
```

### Fonctionnalités des Rapports

- 📊 Graphiques détaillés de l'exécution
- 🎥 Vidéos intégrées des tests
- 📸 Captures d'écran en cas d'échec
- ⏱️ Temps d'exécution détaillé
- 📝 Étapes Gherkin en français
- 📈 Statistiques de test

## 🏗️ Structure du Projet

```text
CypressCucumbermer_E2E/
├── cypress/
│   ├── e2e/
│   │   ├── features/            # Fichiers .feature
│   │   │   └── automobile.feature
│   │   └── step_definitions/    # Définitions des étapes
│   │       └── automobileSteps.js
│   ├── fixtures/               # Données de test
│   │   └── testData.json
│   ├── pages/                 # Page Objects
│   │   └── HomePage.js
│   ├── support/               # Fichiers de support
│   │   ├── commands.js
│   │   └── e2e.js
│   └── plugins/               # Plugins Cypress
│       └── index.js
├── cypress.config.js          # Configuration Cypress
├── package.json              # Dépendances et scripts
└── README.md                 # Documentation
```

## 📝 Guide d'Écriture des Tests

### Structure des Features

```gherkin
# automobile.feature
Fonctionnalité: Vérification de la page Automobile

  @smoke @regression
  Scénario: Vérifier le contenu de la page Automobile
    Étant donné Je suis sur la page d'accueil d'Abylsen
    Quand Je clique sur "Nos territoires d'innovation"
    Et Je clique sur "Automobile"
    Alors Je dois voir le texte "Contexte"
```

### Page Objects

```javascript
// HomePage.js
class HomePage {
    visit() {
        cy.visit('https://www.abylsen.com');
    }

    clickTerritoiresInnovation() {
        cy.contains("Nos territoires d'innovation").click();
    }
}

export default new HomePage();
```

## 🔧 Configuration

### cypress.config.js

```javascript
const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    baseUrl: 'https://www.abylsen.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    screenshotOnRunFailure: true,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Rapport de Test Abylsen',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
  },
});
```

### Scripts package.json

```json
{
  "scripts": {
    "clean:reports": "rm -rf cypress/reports/* || true",
    "pretest": "npm run clean:reports",
    "test": "npm run pretest && cypress run --reporter cypress-mochawesome-reporter",
    "test:open": "cypress open",
    "cy:run": "cypress run",
    "cy:open": "cypress open",
    "cy:parallel": "cypress-parallel -s cy:run -t 4 -d 'cypress/e2e/features/**/*.feature'",
    "cy:tags": "cypress run --env tags=@smoke",
    "report:generate": "mochawesome-merge cypress/reports/mocha/*.json > cypress/reports/mochawesome.json && marge cypress/reports/mochawesome.json -f report -o cypress/reports",
    "report:open": "open cypress/reports/html/index.html || xdg-open cypress/reports/html/index.html"
  }
}
```

## 📱 Intégration Continue

### Configuration GitHub Actions

```yaml
name: E2E Tests
on: [push]
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: cypress-io/github-action@v2
        with:
          browser: chrome
          headless: true
```

## 🐛 Dépannage

### Problèmes Courants

1. **Erreur de Timeout**
   ```bash
   # Augmenter le timeout dans cypress.config.js
   defaultCommandTimeout: 10000
   ```

2. **Échec de Screenshots**
   ```bash
   # Vérifier les permissions du dossier
   chmod -R 777 cypress/screenshots
   ```

3. **Problèmes de Vidéo**
   ```bash
   # Nettoyer le cache
   npm run cy:clean
   ```

4. **Erreur de Dépendances**
   ```bash
   # Réinstaller les dépendances
   rm -rf node_modules package-lock.json
   npm install
   ```

## ✨ Fonctionnalités

- 🔄 **Page Object Model (POM)**
- 📝 **Tests en Français**
- 🎥 **Enregistrement Vidéo**
- 📊 **Rapports Détaillés**
- 🔄 **Réessais Automatiques**
- 🖼️ **Captures d'Écran Automatiques**
- 🌐 **Support Multi-Navigateurs**
- 🔄 **Intégration Continue**
- 📱 **Tests Responsive**
- 🔒 **Tests de Sécurité**

---

<div align="center">

## 👥 Support & Contact

Pour toute question ou assistance :
- 📧 Email: qa@abylsen.com
- 💬 Slack: #qa-automation
- 📝 Wiki: [Documentation Interne](https://wiki.abylsen.com)

<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Gear.png" width="60" />

### 🌟 Développé avec ❤️ pour Abylsen 🌟

</div>
