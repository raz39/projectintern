/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import CreateNewUser from "../../POM/createNewUser_PO";

describe("Test for adding new customer ", () => {
  const createNewUser = new CreateNewUser();

  before(function () {
    cy.visitMainPage();
    cy.login();
  });

  beforeEach(function () {
    cy.preserveCookies();
  });

  context("form fill for create new user dependent test", () => {
    const name = faker.name.fullName();
    const company = faker.company.bs();
    const address = faker.address.streetAddress();
    const phone = faker.phone.number();
    const email = faker.internet.email();
    const city = faker.address.city();
    const formElement = [name, company, address, city, phone, email];
    const formElement = [name, company, address, city, phone, email];

    beforeEach(() => {
      cy.get(".btn-primary").click();

      createNewUser
        .typeName(name)
        .typeCompany(company)
        .typeAddress(address)
        .typeCity(city)
        .typePhone(phone)
        .typeEmail(email);
    });

    it("should validate 'BACK TO LIST' button is working and verify data is exist in list", () => {
      cy.get(".btn-link").click();

      createNewUser.dataVerify("not.to.contain.text", formElement);
    });

    it("should add new user and verify added data is exist in list", () => {
      cy.get(".btn-primary").click();

      createNewUser.dataVerify("contain.text", formElement);
    });

    it("should add new user and verify edited data in list", () => {
      const editName = faker.name.fullName();
      const editCompany = faker.company.bs();
      const editAddress = faker.address.buildingNumber();
      const editPhone = faker.phone.number("984######");
      const editEmail = faker.internet.email();
      const editCity = faker.address.city();
      const editFormElement = [
        editName,
        editCompany,
        editAddress,
        editCity,
        editPhone,
        editEmail,
      ];

      cy.get(".btn-primary").click();
      cy.get(".table")
        .contains("td", name)
        .get(".btn-outline-primary")
        .last()
        .click();

      createNewUser
        .typeName(editName)
        .typeCompany(editCompany)
        .typeAddress(editAddress)
        .typeCity(editCity)
        .typePhone(editPhone)
        .typeEmail(editEmail);

      cy.get(".btn-primary").click();

      createNewUser.dataVerify("include.text", editFormElement);
    });

    it("should validate delete new user", () => {
      cy.get(".btn-primary").click();

      createNewUser.dataVerify("contain.text", formElement);

      cy.get(".table")
        .contains("td", name)
        .get(".btn-outline-danger")
        .last()
        .click();
      cy.get("input[value='Delete']").click();

      createNewUser.dataVerify("not.to.contain.text", formElement);
    });
  });
});

