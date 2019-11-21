describe("initial", () => {
    it("bla", () => {
        cy.visit("http://localhost:8081/")
        expect(true).to.eq(true);
    })
})