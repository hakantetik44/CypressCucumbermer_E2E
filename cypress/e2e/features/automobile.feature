@regression @smoke
Feature: Vérification de la page Automobile
    En tant qu'utilisateur
    Je veux accéder à la page Automobile
    Afin de vérifier le contenu

  @critical
  Scenario: Vérifier le contenu de la page Automobile
    Given Je suis sur la page d'accueil d'Abylsen
    When Je clique sur "Nos territoires d'innovation"
    And Je clique sur "Automobile"
    Then Je dois voir le texte "Le contexte" 