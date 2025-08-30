Feature: Login Functionality

  Scenario: User can log in with valid credentials
    Given the user is on the login page
    When the user enters a valid username and password
    And the user clicks the login button
    Then the user should be redirected to the dashboard

  Scenario: User cannot log in with invalid credentials
    Given the user is on the login page
    When the user enters an invalid username and password
    And the user clicks the login button
    Then an error message should be displayed