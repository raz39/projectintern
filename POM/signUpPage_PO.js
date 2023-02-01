class Signup {
  typeFirstName(name) {
    cy.get("#FirstName").clear().type(name);
    return this;
  }

  typeSurName(surName) {
    cy.get("#Surname").clear().type(surName);
    return this;
  }

  typeEpost(Epost) {
    cy.get("#E_post").clear().type(Epost);
    return this;
  }

  typeMobile(phone) {
    cy.get("#Mobile").clear().type(phone);
    return this;
  }

  typeUserName(userName) {
    cy.get("#Username").clear().type(userName);
    return this;
  }

  typePassword(password) {
    cy.get("#Password").clear().type(password);
    return this;
  }

  typeconfirmPassword(password) {
    cy.get("#ConfirmPassword").clear().type(password);
    return this;
  }

  clickOnSignUpButton() {
    cy.get("#submit").click();
    return this;
  }

  verifySuccessMessage() {
    cy.get(".label-success").should("have.text", "Registration Successful");
    return this;
  }
}
export default Signup;
