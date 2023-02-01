// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add("login", () => {
  const username = Cypress.env("username");
  const password = Cypress.env("password");

  cy.get("#Username").clear().type(username);
  cy.get("#Password").clear().type(password);
  cy.get("input[name='login']").click();
  cy.get("h3").should("have.text", "Welcome " + username);
  cy.url().should("include", "azurewebsites.net/Dashboard");
});

Cypress.Commands.add("visitLoginPage", () => {
  cy.visit(Cypress.env("baseUrl"));
});

//})
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
