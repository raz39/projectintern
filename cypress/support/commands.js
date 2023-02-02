
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("visitMainPage", () => {
  cy.visit(Cypress.env("baseUrl"));
  cy.get("a.nav-link").last().click();
  cy.get("a.nav-link").last().click();
});

Cypress.Commands.add("login", () => {
  const username = Cypress.env("username");
  const password = Cypress.env("password");

  cy.get("#Username").clear().type(username);
  cy.get("#Password").clear().type(password);
  cy.get("input[name='login']").click();
  cy.get("h3").should("have.text", "Welcome " + username);
  cy.url().should("include", "azurewebsites.net/Dashboard");
});

Cypress.Commands.add("preserveCookies", () => {
  Cypress.Cookies.preserveOnce("ASP.NET_SessionId");
  cy.url().should("include", "azurewebsites.net/Dashboard");
});

Cypress.Commands.add("preserveCookies", () => {
  Cypress.Cookies.preserveOnce("ASP.NET_SessionId");
});

Cypress.Commands.add("visitLoginPage", () => {
  cy.visit(Cypress.env("baseUrl"));
});
