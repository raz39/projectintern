/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
const name = faker.name.fullName();
const company = faker.company.bs();
const address= faker.address.buildingNumber();
const phone = faker.phone.number("984######");
const email = faker.internet.email();
const city = faker.address.city()

describe("login for itera TRL-5", () => {
  before(function () {
    cy.visit(Cypress.env("baseUrl"));
    cy.login();
   });
  beforeEach(function () {
    Cypress.Cookies.preserveOnce('ASP.NET_SessionId');
 })
   it("should validate  create new user", () => {
    cy.get(".btn-primary").click();
    cy.get("#Name").type(name);
    cy.get("#Company").type(company);
    cy.get("#Address").type(address);
    cy.get("#City").type(city);
    cy.get("#Phone").type(phone);
    cy.get("#Email").type(email);
    cy.get(".btn-primary").click();
    //cy.get("tr:nth-of-type(1107) >td:nth-of-type(1)").contains('td', name);
  

    //const x = [name,company,address, city,phone, email,];
  // cy.get("tr").last().
  // find('td>').each((selector, index) => {
  // cy.get(selector).should("include.text", x[index]);

  cy.get("tr").last().contains("td", name)
  cy.get("tr").last().contains("td", company)
  cy.get("tr").last().contains("td", address)
  cy.get("tr").last().contains("td", city)
  cy.get("tr").last().contains("td", phone)
  cy.get("tr").last().contains("td", email)

   })

  it("should validate  edit user", () => {
    cy.get(".table")
    .contains("td", name)
    cy.get("#Name").type(name);
    cy.get("#Company").type(company);
    cy.get("#Address").type(address);
    cy.get("#City").type(city);
    cy.get("#Phone").type(phone);
    cy.get("#Email").type(email);
    cy.get(".btn-primary").click();
    cy.get("#Name").type(name);
    cy.get("#Company").type(company);
    cy.get("#Address").type(address);
    cy.get("#City").type(city);
    cy.get("#Phone").type(phone);
    cy.get("#Email").type(email);
    cy.get(".btn-primary").click();
      cy.get(".table")
        .contains("td", name)
        .get(".btn-outline-primary")
        .last()
        .click();
      cy.get("#Name").clear().type(names);
      cy.get(".btn-primary").click();
      cy.get(".table")
        .contains("td", names)
        .get(".btn-outline-info")
        .last()
        .click();
      cy.get(".btn-link").click();

    })

    it("should validate delete new user", () => {
      cy.get(".btn-primary").click();
    cy.get("#Name").type(name);
    cy.get("#Company").type(company);
    cy.get("#Address").type(address);
    cy.get("#City").type(city);
    cy.get("#Phone").type(phone);
    cy.get("#Email").type(email);
    cy.get(".btn-primary").click();
      cy.get(".table")
        .contains("td", name)
        .get(".btn-outline-danger")
        .last()
        .click();
      cy.get("input[value='Delete']").click();
    });

    it("should validate  search user", () => {
      cy.get("#searching").clear().type("evy");
      cy.get(".container > div > form > .btn").click();
    });
  });