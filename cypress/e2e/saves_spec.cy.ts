describe("functionality re: saving", () => {
  const saveGamesLink = '[data-cy="saves-link"]';
  const fakeUser = "test.user@example.com";
  const newSaveGame = `Save game ${Math.round(Math.random() * 10000)}`;
  before(() => {
    cy.login({ email: fakeUser });
  });
  after(() => {
    cy.cleanupUser({ email: fakeUser });
  });

  it("navigates to save page and interacts with it", () => {
    cy.visit("/");
    cy.wait(200);
    cy.get(saveGamesLink).click();
    cy.wait(200);
    cy.get("[data-cy='new-save-title']").type(newSaveGame);
    cy.get("[data-cy='new-save-submit']").click();
    cy.contains(newSaveGame);
  });
});
