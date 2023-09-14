Feature: Login
 
I open a login page
  @focus
  Scenario: login merchant pannel
    Given I open a login page
    When I type in
      | terminalid | terminal_password |
      | 57 | 123456 |
    And I click submit button
    Then I verify dashboard title
 