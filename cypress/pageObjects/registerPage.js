class register{
    
    static username = () => cy.get('input[name="username"]')
    static password = () => cy.get('input[name="password"]')
    static repeatPassword = () => cy.get('input[name="repeatPassword"]')
    static email = () => cy.get('input[name="email"]')
    static gender = () => cy.get('input[name="gender"]').contains('Kobieta');
    static datePicker = () => cy.get('input[name="birthDate"]')
    static signUpBtn = () => cy.get('btn-submit')
}

Cypress.Commands.add("fillRegisterFormAndSignUp", (data) => {
    register.username().clear().type(data['username'])
    register.password().clear().type(data['password'])
    register.repeatPassword().clear().type(data['password'])
    register.email().clear().type(data['emailSeed'] + 'gmail.com')
    register.gender().click()
    register.datePicker().clear().type(data['date'])
    register.signUpBtn().click()
})

export default login
