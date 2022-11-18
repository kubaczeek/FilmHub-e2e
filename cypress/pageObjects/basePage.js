Cypress.Commands.add("clickSignInBtn", () => {
    basePage.loginBtn().click()
})

Cypress.Commands.add("clickSignUpBtn", () => {
    basePage.registerBtn().click()
})

class basePage {
    static loginBtn = () => cy.get('.btn-header').contains('Zaloguj');
    static registerBtn = () => cy.get('.btn-header').contains('Zarejestruj');
}
export default basePage