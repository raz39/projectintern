/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

describe("Test for adding new customer ", () => {
  before(function () {
    cy.visitMainPage();
    cy.get("a.nav-link").last().click();
    cy.login();
  });

  beforeEach(function () {
    cy.preserveCookies();
  });

  context("form fill for create new user of ITERA", () => {
    const name = faker.name.fullName();
    const company = faker.company.bs();
    const address = faker.address.streetAddress();
    const phone = faker.phone.number();
    const email = faker.internet.email();
    const city = faker.address.city();
    const formElements = [name, company, address, city, phone, email];

    beforeEach(() => {
      cy.get(".btn-primary").click();
      cy.get("#Name").type(name);
      cy.get("#Company").type(company);
      cy.get("#Address").type(address);
      cy.get("#City").type(city);
      cy.get("#Phone").type(phone);
      cy.get("#Email").type(email);
    });

    it("should validate 'BACK TO LIST' button is working and verify data is exist in list", () => {
      cy.get(".btn-link").click();
      cy.get("tr:last-child>td:not(:last-child)").each((selector, index) => {
        cy.get(selector).should("not.have.text", formElements[index]);
      });
    });

    it("should add new user and verify added data is exist in list", () => {
      cy.get(".btn-primary").click();
      cy.get("tr:last-child>td:not(:last-child)").each((selector, index) => {
        cy.get(selector).should("include.text", formElements[index]);
      });
    });
  });
});
