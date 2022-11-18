describe('Is login endpoint working', () => {
  it('post endpoint', () => {
        cy.request('POST', 'graphql', data).then(
          (response) => {
            expect(response.status).to.eq(200)
          }
)
  })

  let data = {
    "variables": {
        "signInDto": {
            "username": "kubaczeek",
            "password": "5c12123mC123i1236PX2131zsqf123vm5j123XC"
        }
    },
    "query": "mutation ($signInDto: SignInDto!) {\n  signIn(signInDto: $signInDto) {\n    access\n    refresh\n    __typename\n  }\n}"
  }

})