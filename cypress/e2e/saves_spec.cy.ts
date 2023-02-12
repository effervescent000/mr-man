describe("functionality re: saving", () => {
  const saveGamesLink = '[data-cy="saves-link"]';
  const fakeUser = "test.user@example.com";
  before(() => {
    cy.login({ email: fakeUser });
  });
  after(() => {
    cy.cleanupUser({ email: fakeUser });
  });

  it("renders save page", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get(saveGamesLink).click();
    // TODO add something to actually check for rendering here
  });
});
