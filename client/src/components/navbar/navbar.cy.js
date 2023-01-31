import Navbar from "./Navbar";

describe("Testing for the Navbar component", ()=> {
    it("Renders the Navbar on page load", ()=> {
        cy.mount(<Navbar/>);
        cy.get('[data-cy="navbar"]').should('contains.text', "This Day In History");
    });

    it ("Should have a login button", ()=> {
        cy.mount(<Navbar/>);
        cy.get('[data-cy="login-button"]').should('contains.text', "Login")
    })
    
    it ("Should have a filter button", ()=> {
      cy.mount(<Navbar/>);
      cy.get('[data-cy="filter-button"]').should('contains.text', "Filter")
  })
})