import reset from '../pageObjects/resetPasswordPage'
import cypressConfig from '../../cypress.config'
import basePage from "../pageObjects/basePage";

const email = "test@email.com";

const resolution = [
    {
        h: 576,
        w: 960
    },
    {
        h: 820,
        w: 1180
    },
    {
        h: 1080,
        w: 1920
    }
];

describe('Reset password page is working', function () {
    resolution.forEach((resolutionData) => {
        it(`Reset password and check message: ${email} on resolution ${resolutionData.h} x ${resolutionData.w}`, function () {
            cy.visit('', {
                auth: {
                    username: 'filmhub',
                    password: 'filmpass'
                }
            })
            cy.viewport(resolutionData['w'], resolutionData['h'])
            cy.url().should('eq', Cypress.config('baseUrl'))
            basePage.resetBtn().click()
            cy.url().should('eq', 'https://filmhub.furai.pl/reset-password')
            reset.inputEmail().should('be.visible')
            reset.resetBtn().should('be.visible')
        })
        it('message should be displayed', async function () {
            reset.inputEmail().type(email)
            reset.resetBtn().click()
            cy.on('window:alert', (str) => {
                expect(str).to.contains(email)
            })
            cy.on('window:confirm', () => true)
        });
    })
})