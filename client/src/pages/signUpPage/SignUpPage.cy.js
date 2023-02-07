import SignUpPage from "./SignUpPage";

describe ("Testing SignUp Page", ()=>{
    it("Renders the SignUpPage", ()=> {
        cy.mount(<SignUpPage />);
        cy.get('[data-cy="form-header"]').should("contains.text", "Sign Up")
    })
})