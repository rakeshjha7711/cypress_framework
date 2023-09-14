class LoginPage
{
  visit()
  {
    cy.visit("url")
  }
  enterUserName(value)
  {
    const field=cy.get('[id = username]')
    field.clear()
    field.type(value)
    return this
  }
  enterPassword(value) {
    const field = cy.get('[id = password]')
    field.clear()
    field.type(value)
    return this
  }
  submit()
  {
    const button = cy.get('[type=submit]')
    button.click()
  }
}
export default LoginPage