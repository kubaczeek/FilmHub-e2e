Cypress.Commands.add("clickSignInBtn", () => {
    basePage.loginBtn().click()
})

Cypress.Commands.add("clickSignUpBtn", () => {
    basePage.registerBtn().click()
})

Cypress.Commands.add("clickResetPwdBtn", () => {
    basePage.resetBtn().click()
})

class basePage {
    static loginBtn = () => cy.get('.btn-header').contains('Zaloguj');
    static registerBtn = () => cy.get('.btn-header').contains('Zarejestruj');
    static resetBtn = () => cy.get('.reminder-link').contains('Przypomnij hasło');
}
export default basePage