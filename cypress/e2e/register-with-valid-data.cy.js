import cypressConfig from '../../cypress.config'
import login from '../pageObjects/loginPage'

var credentials = [
    {
        username: "kuba",
        emailSeed: 'kuba1234',
        password: 'passw0rd',
        date: "2022-11-03T00:00:00.000Z"
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

describe('Register with valid data', function () {
        credentials.emailSeed = makeId(6) + "@gmail.com";
        resolution.forEach((resolutionData) => {
            it(`Register user: ${credentials.emailSeed} on resolution ${resolutionData.h} x ${resolutionData.w}`, function () {
                cy.visit('', {
                    auth: {
                        username: 'filmhub',
                        password: 'filmpass'
                      }})      
                cy.viewport(resolutionData['w'], resolutionData['h'])
                cy.url().should('eq', Cypress.config('baseUrl'))
                cy.clickSignUpBtn()
                cy.fillRegisterFormAndSignUp(credentials)
                cy.url().should('eq', 'https://filmhub.furai.pl/home')
            })
        })
        
})

    function makeId(length) {
      var result           = '';
      var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
   }

