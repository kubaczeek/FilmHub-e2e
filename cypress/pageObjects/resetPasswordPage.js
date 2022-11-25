class resetPasswordPage {
    static resetBtn = () => cy.get('.btn-submit').contains('Zresetuj Hasło');
    static inputEmail = () => cy.get('input[name="email"]');
}
export default resetPasswordPage