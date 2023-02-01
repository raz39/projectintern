/// <reference types="cypress" />
import Signup from "../../POM/signUpPage_PO";
import { faker } from "@faker-js/faker";

const signup = new Signup();

before(function () {
  cy.visit(Cypress.env("baseUrl"));
  cy.get("a.nav-link").eq(4).click();
});

describe("Test for signup page", () => {
  it("should validate empty signup error message", () => {
    const selector = [
      "#FirstName-error",
      "#Surname-error",
      "#Username-error",
      "#Password-error",
    ];
    const errorMessage = [
      "Please enter first name",
      "Please enter surname",
      "Please enter username",
      "Please enter password",
    ];

    signup.clickOnSignUpButton();

    cy.get(selector).each((selector, index) => {
      cy.get(selector).should("include.text", errorMessage[index]);
    });
  });

  it("should validate password and confirm password are same or not error message", () => {
    const password = faker.internet.password();

    signup.typeconfirmPassword(password).clickOnSignUpButton();
    cy.get("#ConfirmPassword-error").should(
      "have.text",
      "'Confirm password' and 'Password' do not match."
    );
  });
});

context("Signup formfill dependent test", () => {
  const name = faker.name.firstName();
  const surName = faker.name.lastName();
  const password = faker.internet.password();
  const phone = faker.phone.number("984######");
  const userName = faker.internet.userName();
  const Epost = faker.internet.email();

  beforeEach(() => {
    signup
      .typeFirstName(name)
      .typeSurName(surName)
      .typeEpost(Epost)
      .typeMobile(phone)
      .typeUserName(userName)
      .typePassword(password)
      .typeconfirmPassword(password)
      .clickOnSignUpButton();
  });

  it("should validate sufficient data signup sucessfull message", () => {
    signup.verifySuccessMessage();
  });

  it("should validate already exist username signup error message", () => {
    signup
      .typeFirstName(name)
      .typeSurName(surName)
      .typeEpost(Epost)
      .typeMobile(phone)
      .typeUserName(userName)
      .typePassword(password)
      .typeconfirmPassword(password)
      .clickOnSignUpButton();
    cy.get(".label-danger").should("have.text", "Username already exist");
  });
});
