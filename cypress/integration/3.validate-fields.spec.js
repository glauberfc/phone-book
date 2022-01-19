/// <reference types="cypress" />

it("Should validate fields", () => {
  cy.visit("/")
  cy.get("#add-new-contact").click()
  cy.url().should("include", "/new-contact")
  cy.get("#submit").click()
  cy.get(".error-message").contains("This field is required")
})
