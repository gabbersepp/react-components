describe("initial", () => {
    it("bla", () => {
        cy.visit("http://localhost:8080/")
        cyExpect(true).to.eq(true);
    })
})