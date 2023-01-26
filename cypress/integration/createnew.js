/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
const name = faker.name.fullName();
const password = faker.internet.password();
const address = faker.address.buildingNumber();
const phone = faker.phone.number("984######");
const email = faker.internet.email();

describe("login for itera TRL-5", () => {
  before(function () {
    cy.visit(Cypress.env("baseUrl"));
    cy.login();
  });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce("ASP.NET_SessionId");
  });
  it.only("should validate delete new user", () => {
    cy.get("li:nth-of-type(3) .nav-link").click();
    cy.get("#name").type(name);
    cy.get("#phone").type(phone);
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get("#address").type(address);
    cy.get('.card-body > .btn').click();
  });
});
