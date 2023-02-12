import { faker } from "@faker-js/faker";

describe("auth-related functionality", () => {
  const email = faker.internet.email(undefined, undefined, "example.com");
  const password = "password";
  beforeEach(() => {
    cy.visit("/");
  });
  it("creates an account", () => {
    cy.wait(500);
    cy.get("[data-cy='join']").click();
    cy.get('[data-cy="email-input"]').type(email);
    cy.get('[data-cy="password-input"]').type(password);
    cy.get("[data-cy='create-account-btn']").click();
    cy.get("[data-cy='logout']").click();
  });
  it("signs in", () => {
    cy.wait(500);
    cy.get("[data-cy='login']").click();
    cy.get('[data-cy="email-input"]').type(email);
    cy.get('[data-cy="password-input"]').type(password);
    cy.get('[data-cy="login-btn"]').click();
    cy.get("[data-cy='logout']").click();
  });
});
