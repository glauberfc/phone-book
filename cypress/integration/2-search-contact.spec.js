/// <reference types="cypress" />

it("Should search a contact", async () => {
  const users = await cy.fixture("users")
  cy.visit("/")
  cy.get("#search-form > input").should("exist")
  cy.get("#search-form > input").type(users[1].firstName)
  cy.get("table#contact-list").should("exist")
  cy.get("table#contact-list > tbody").should("be.empty")
  cy.get("#search-form > button").click()

  cy.get("#add-new-contact").click()
  cy.url().should("include", "/new-contact")

  cy.get("h2").contains("Add a new contact")
  cy.get("#first-name")
    .type(users[1].firstName)
    .should("have.value", users[1].firstName)
  cy.get("#last-name")
    .type(users[1].lastName)
    .should("have.value", users[1].lastName)
  cy.get("#phone-number")
    .type(users[1].phoneNumber)
    .should("have.value", users[1].phoneNumber)
  cy.get("#submit").click()

  cy.get("#search-form > input").should("exist")
  cy.get("#search-form > input").type(users[1].firstName)

  cy.get("table#contact-list")
    .contains("td", users[1].firstName)
    .should("be.visible")
  cy.get("table#contact-list")
    .contains("td", users[1].lastName)
    .should("be.visible")
  cy.get("table#contact-list")
    .contains("td", users[1].phoneNumber)
    .should("be.visible")
})
