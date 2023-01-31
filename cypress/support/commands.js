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
  const user = Cypress.env("userName");
  const password = Cypress.env("password");

  cy.get("#Username").clear().type(user);
  cy.get("#Password").clear().type(password);
  cy.get("input[name='login']").click();
  cy.get("h3").should("have.text", "Welcome " + user);
  cy.url().should("include", "azurewebsites.net/Dashboard");
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
