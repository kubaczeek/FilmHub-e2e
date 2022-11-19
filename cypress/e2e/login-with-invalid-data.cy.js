import cypressConfig from '../../cypress.config'
import login from '../pageObjects/loginPage'

var credentials = [
    {
        username: 'zly@email.com',
        password: 'passw0rd'
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
        resolution.forEach((resolutionData) => {
            it(`Sign in by user: ${data.username} on resolution ${resolutionData.h} x ${resolutionData.w}`, function () {
                cy.visit('', {
                    auth: {
                        username: 'filmhub',
                        password: 'filmpass'
                      }})
                cy.viewport(resolutionData['w'], resolutionData['h'])
                cy.url().should('eq', Cypress.config('baseUrl'))
                cy.clickSignInBtn()
                cy.fillLoginFormAndLogIn(data)
                cy.url().should('eq', Cypress.config('baseUrl'))
                cy.visit('')
            })
        })
    })
})
