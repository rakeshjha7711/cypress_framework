import LoginPage from "../PageObjectModel/LoginPage"


describe('Login', function () {

  it('valid login', function () {
    
   const login = new LoginPage()
    login.visit()
    login.enterUserName('admin')
    login.enterUserName('admin')
    login.submit()
    cy.hash().should('be.equal', '#/Gift Quik')

  

  }
  )
})
