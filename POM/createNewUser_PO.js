class Createnewuser {
  typeName(name) {
    cy.get("#Name").clear().type(name);
    return this;
  }

  typeCompany(company) {
    cy.get("#Company").clear().type(company);
    return this;
  }

  typeAddress(address) {
    cy.get("#Address").clear().type(address);
    return this;
  }

  typeCity(city) {
    cy.get("#City").clear().type(city);
    return this;
  }

  typePhone(phone) {
    cy.get("#Phone").clear().type(phone);
    return this;
  }

  typeEmail(email) {
    cy.get("#Email").clear().type(email);
    return this;
  }
  dataVerify(validation,formElement) {
    cy.get("tr:last-child>td:not(:last-child)").each((selector, index) => {
      cy.get(selector).should(validation, formElement[index]);
    });
  }
}
export default Createnewuser;
