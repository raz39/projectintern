import Login from "../../POM/loginPage_PO";
import { faker } from "@faker-js/faker";
import Signup from "../../POM/signUpPage_PO";

describe("Test for login page", () => {
  const login = new Login();
  const signup = new Signup();

  before(function () {
    cy.visitMainPage();
    cy.get("a.nav-link").last().click();
  });

  it("should validate empty login error message", () => {
    login.clickSubmitBtn().verifyInvalidCredentials();
  });

  context("login form fill dependent test", () => {
    const username = faker.internet.userName();
    const password = faker.internet.password();

    beforeEach(() => {
      login.typeUserName(username).typePassword(password);
    });

    it("should validate Clear button is functional", () => {
      login.clickClearBtn().emptyFields();
    });

    it("should validate invalid credentials login error message", () => {
      login.clickSubmitBtn().verifyInvalidCredentials();
    });

    it("should validate not registered button is functional and register then login  ", () => {
      const name = faker.name.firstName();
      const surName = faker.name.lastName();
      const password = faker.internet.password();
      const phone = faker.phone.number("984######");
      const userName = faker.internet.userName();
      const ePost = faker.internet.email();
      cy.get(".btn.btn-link").click();
      signup
        .typeFirstName(name)
        .typeSurName(surName)
        .typeEpost(ePost)
        .typeMobile(phone)
        .typeUserName(userName)
        .typePassword(password)
        .typeConfirmPassword(password)
        .clickOnSignUpButton()
        .verifySuccessMessage();
      cy.get("a.nav-link").last().click();
      login.typeUserName(userName).typePassword(password).clickSubmitBtn();
      cy.get("h3").should("have.text", "Welcome " + userName);
      cy.url().should("include", "azurewebsites.net/Dashboard");
      cy.get("a.nav-link").last().click();
    });
  

      it.only("should validate valid login sucess message", () => {

        cy.login();
      });
    });
  })

