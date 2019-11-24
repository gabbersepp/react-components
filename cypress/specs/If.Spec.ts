describe("initial", () => {
    it("bla", () => {
        cy.visit("http://localhost:8080/")
        expect(true).to.eq(true);
    })
})