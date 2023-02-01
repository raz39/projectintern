import Login from "../../POM/loginPage_PO";
import { faker } from "@faker-js/faker";

describe("Test for login page", () => {
  const login = new Login();

  before(function () {
    cy.visitLoginPage();
    cy.get("a.nav-link").last().click();
  });

  it("should validate empty login error message", () => {
    login.clickSubmitBtn().verifyInvalidCredentials();
  });

  context("login form fill dependent test", () => {
    const username = faker.internet.userName();
    const password = faker.internet.password() ;

    beforeEach(() => {
      login.typeUserName(username).typePassword(password);
    });

    it("should validate Clear button is functional", () => {
      login.clickClearBtn().emptyFields();
    });

    it("should validate invalid credentials login error message", () => {
      login.clickSubmitBtn().verifyInvalidCredentials();
    });

    it("should validate valid login sucess message", () => {
      cy.login();
    });
  });
});
