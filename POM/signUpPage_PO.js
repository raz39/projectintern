class Signup {

  abc(selector,name){


    cy.get(selector).clear().type(name);
    return this;
  }


  typeFirstName(firstName) {
    // cy.get("#FirstName").clear().type(firstName);
    this.abc("#FirstName",name)
    
    return this;
  }

  typeSurName(surName) {
    cy.get("#Surname").clear().type(surName);
    return this;
  }

  typeEpost(ePost) {
    cy.get("#E_post").clear().type(ePost);
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

  typeConfirmPassword(password) {
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
