describe('Login', function () {
  it('Signin', function () {
    //lounche the application 
    cy.visit('url') 
    cy.title().should('eq','Admin Panel')  
    cy.contains('Terminal ID & Password').should('be.visible')
    cy.location('protocol').should('eq','https:')
    cy.get('input[id="terminalid"]').type('5711') 
    cy.get('input[id="terminal_password"]').type('1234561111')
    cy.get('input[id="terminal_signin_button"]').should('be.visible').click()   ///#/webterminal

  }
  )

  it('checkDrawerMenuList', function () {
    cy.wait(20000);
    //verify drawer menu list is visible and click each and every one
    cy.xpath('//*[@id="sidebar_dashboard"]/span').should('be.visible').click()
    cy.hash().should('include','#/dashboard')

    cy.xpath('//*[@id="wterminal_14"]/a').should('be.visible').click()
    cy.hash().should('include', '#/webterminal')

    cy.xpath('//*[@id="paymentstree"]/a/span').should('be.visible').click() 
       cy.hash().should('include', '#/transactions')
       cy.hash().should('include', '#/refunds')
       cy.hash().should('include', '#/settlement')
  


    cy.xpath('//*[@id="docs"]/span').should('be.visible')
    cy.xpath('//*[@id="wallet"]/span').should('be.visible')
       cy.hash().should('include','#/wallet')

    cy.xpath('//*[@id="reset"]/span').should('be.visible') //cerify reset button
    cy.xpath('//*[@id="submit"]/span').should('be.visible') //verify submit button
  }
  )

  it('requestPayment', function () {
    cy.wait(20000);
    cy.xpath('//*[@id="alloptions"]/div[1]/div[1]/label').click()
    cy.xpath('//*[@id="billnumber"]').type('15435411')
    cy.xpath('//*[@id="mobilenumber"]').type('1212121212')
    cy.xpath('//*[@id="amount"]').type('10')
    cy.xpath('//*[@id="submit"]/span').click()
    cy.contains('//*[@id="response_message_div"]/h4/text()').should('be.visible')
    cy.contains('//*[@id="response_message"]').should('be.visible')

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
