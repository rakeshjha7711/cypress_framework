describe('Login', function () {
  it('Signin', function () {
    cy.visit('url')
    cy.get('input[id="terminalid"]').type('5711')
    cy.get('input[id="terminal_password"]').type('1234561111')
    cy.get('input[id="terminal_signin_button"]').should('be.visible').click()
  })
})
