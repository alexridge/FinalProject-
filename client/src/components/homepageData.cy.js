import HomepageData from './homepageData';

  describe("Testing for the homepageData component", ()=> {
    it("Renders the loading screen on page load", ()=> {
        cy.mount(<HomepageData/>);
        cy.get('#date-shower').should('contains.text', "now showing events from:");
    });
    it("Renders the loading screen on page load", ()=> {
      cy.mount(<HomepageData/>);
      cy.get('[data-cy="loading"]').should('contains.text', "Loading...");
  });
  it("filter appears on page", ()=> {
    cy.mount(<HomepageData/>);
    cy.get('[data-cy="dropbtn"]').should('contains.text', "Filter Pages");
});
  });