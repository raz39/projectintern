class Signup {
    setFirstName(name) {
      cy.get("#FirstName").clear().type(name);
      return this;
    }
  
    setSurName(surName) {
      cy.get("#Surname").clear().type(surName);
      return this;
    }
  
    setEpost() {
      cy.get("#E_post").clear().type("123");
      return this;
    }
  
    setMobile(phone) {
      cy.get("#Mobile").clear().type(phone);
      return this;
    }
  
    setUserName(userName) {
      cy.get("#Username").clear().type(userName);
      return this;
    }
  
    setPassword(password) {
      cy.get("#Password").clear().type(password);
      return this;
    }
  
    confirmPassword(password) {
      cy.get("#ConfirmPassword").clear().type(password);
      return this;
    }
  
    clickSignUp() {
      cy.get("#submit").click();
      return this;
    }
  
    verifySuccessMessage() {
      cy.get(".label-success").should("have.text", "Registration Successful");
      return this;
    }
  }
  export default Signup;