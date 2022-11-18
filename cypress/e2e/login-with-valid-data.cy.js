import login from '../pageObjects/loginPage'
import base from '../pageObjects/basePage'


var credentials = [
    {
        username: 'standard_user',
        password: 'secret_sauce'
    }
]

var resolution = [
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
]

describe('Login with valid data', function () {
    credentials.forEach((data) => {
        cy.visit('')
        resolution.forEach((resolutionData) => {
            it(`Sign in by user: ${data.username} on resolution ${resolutionData.h} x ${resolutionData.w}`, function () {
                cy.viewport(resolutionData['w'], resolutionData['h'])
                cy.url().should('eq', Cypress.config('baseUrl'))
                cy.clickSignInBtn()
                cy.fillLoginFormAndLogIn(data)
                cy.url().should('not.eq', Cypress.config('baseUrl')+ "1")
            })
        })
    })
})


