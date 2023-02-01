class Login {
  typeUserName(username) {
    cy.get("#Username").clear().type(username);
    return this;
  }

  typePassword(password) {
    cy.get("#Password").clear().type(password);
    return this;
  }

  clickSubmitBtn() {
    cy.get("input[name='login']").click();
    return this;
  }

  clickClearBtn() {
    cy.get("input[name='clear']").click();
    return this;
  }

  verifyInvalidCredentials() {
    cy.get(".alert-danger").contains("Wrong username or password");
    return this;
  }

  emptyFields() {
    cy.get("#Username").should("be.empty");
    cy.get("#Password").should("be.empty");
    return this;
  }
}
export default Login;
