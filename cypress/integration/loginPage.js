import Login from "../../POM/loginPage_PO";
import { faker } from "@faker-js/faker";

const login = new Login();

describe("login for itera TRL-3", () => {
  before(function () {
    cy.visit(Cypress.env("baseUrl"));
    cy.get("a.nav-link").last().click();
  });

  it("should validate empty login error message", () => {
    login.clickSubmit().errorMessage();
  });
});

context("login fillUp for login page of ITERA", () => {
  const username = faker.internet.userName();
  const password = faker.name.fullName();

  beforeEach(() => {
    login.typeUserName(username).typePassword(password);
  });

  it("should validate Clear button is functional", () => {
    login.clickClear().emptyValidation();
  });

  it("should validate invalid credentials login error message", () => {
    login.clickSubmit();
  });

  it("should validate valid login sucess message", () => {
    cy.login();
  });
});
