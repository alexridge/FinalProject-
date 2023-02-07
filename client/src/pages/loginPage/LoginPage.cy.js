import LoginPage from './LoginPage'


describe ("Testing LoginPage", ()=> {
    it ("Renders the Login page", ()=> {
        cy.mount(<LoginPage />);
        cy.get("h2").should("contains.text", "Login")
    })
})