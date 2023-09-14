import 'cypress'

Given('I open a login page', () => {
  cy.visit('url')
});

When('I type in', (datatable) => {
  datatable.hashes().forEach(element => { 
  cy.get('input[id="terminalid"]').type(element.terminalid)
  cy.get('input[id="terminal_password"]').type(element.terminal_password)
  })
}),


And('I click submit button', () => {
  cy.get('input[id="terminal_signin_button"]').should('be.visible').click()
});

Than('I verify dashboard title', () => {
  cy.xpath('//*[@id="sidebar_dashboard"]/span').should('be.visible')
});


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})