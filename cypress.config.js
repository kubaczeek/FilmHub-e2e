module.exports = {
  e2e: {
    setupNodeEvents(on, config) {    
    },
    specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}',
    chromeWebSecurity: false,
    baseUrl: 'https://filmhub.furai.pl/'
  },
  integration:{
    specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://filmhub.furai.pl/'
  }
};
