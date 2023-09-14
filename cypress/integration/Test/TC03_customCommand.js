describe('Login', function () {

  Cypress.config('pageLoadTimeout', 10000)
  before(function () {
    cy.SingIn()
  })


  it('checkDrawerMenuList', function () {
    cy.wait(20000);
    //verify drawer menu list is visible and click each and every one
    cy.xpath('//*[@id="sidebar_dashboard"]/span').should('be.visible').click()
    cy.hash().should('include', '#/dashboard')
    cy.xpath('//*[@id="wterminal_14"]/a').should('be.visible').click()
    cy.xpath('//*[@id="paymentstree"]/a/span').should('be.visible').click()
    cy.xpath('//*[@id="wallet"]/span').should('be.visible')

    cy.xpath('//*[@id="wterminal_14"]/a').should('be.visible').click()
    cy.xpath('//*[@id="reset"]/span').should('be.visible') //verify reset button
    cy.xpath('//*[@id="submit"]/span').should('be.visible') //verify submit button
  }
  )

  it('requestPayment', function () {
    cy.xpath('//*[@id="alloptions"]/div[1]/div[1]/label').click()
    cy.xpath('//*[@id="billnumber"]').type('154354')
    cy.xpath('//*[@id="mobilenumber"]').type('7715000178')
    cy.xpath('//*[@id="amount"]').type('10')
    cy.xpath('//*[@id="submit"]/span').click()


  }
  )

  it('Recharge', function () {
    cy.wait(10000);
    cy.xpath('//*[@id="758"]/section/div/div[1]/div/ul/li[2]/a').click()
    cy.get('input[id="mobilenumberforrecharge"]').type('1212121212')
    cy.get('input[id="amountforrecharge"]').type('10')
    cy.xpath('//*[@id="submitrecharge"]/span').should('be.visible').click()
  }
  )


})


