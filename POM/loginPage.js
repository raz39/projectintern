class Login {
    typeUserName(users) 
    {
      cy.get("#Username").clear().type(users);
      return this;
    }
  
    typePassword(password) {
      cy.get("#Password").clear().type(password);
      return this;
    }
  
    clickSubmit() {
      cy.get("input[name='login']").click();
      return this;
    }
    
    clickClear() {
      cy.get("input[name='clear']").click();
      return this;
    }
  
    verifyHeading() {
      cy.get("h3").should("have.text", "Welcome elisa");
      return this;
    }
  
    errorMessage() {
      cy.get(".alert-danger").contains("Wrong username or password");
      return this;
    }
    
    emptyValidation(){
      cy.get("#Username").should(('be.empty'))
     cy.get("#Password").should(('be.empty'))
    return this;
    }
  
    verifyHomePageUrl() {
      cy.url().should("include", "azurewebsites.net/Dashboard");
      return this;
    }
  }
  export default Login;