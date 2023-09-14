
Cypress.Commands.add("SingIn", () => {
  
  cy.visit('')
  //verify the title of the page
  cy.title().should('eq', 'Admin Panel')
  // cy.title().should('eq', 'Terminal ID & Password')     
  cy.contains('Terminal ID & Password').should('be.visible')
  //verify the location like host/port/hostname/pathname etc
  cy.location('protocol').should('eq', 'https:')
  //enter input and click signin button
  cy.get('input[id="terminalid"]').type('57')
  cy.get('input[id="terminal_password"]').type('123456')
  //verify submit button and click
  cy.get('input[id="terminal_signin_button"]').should('be.visible').click()   ///#/webterminal

})