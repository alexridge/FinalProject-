import ProfilePage from './ProfilePage'

describe ("Tests for Profile Page", ()=> {
    it ("Renders a Profile Page", ()=> {
        cy.mount(<ProfilePage />);
        cy.get("h2").should("contains.text", "Welcome To Your Saved History")
    })
})