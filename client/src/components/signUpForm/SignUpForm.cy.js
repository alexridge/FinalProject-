import SignUpForm from './SignUpForm'

describe ("Tests for SignUpForm", ()=> {
    it("Renders the form element", ()=> {
        cy.mount(<SignUpForm />)
        cy.get('form').should("be.visible")
    })
})