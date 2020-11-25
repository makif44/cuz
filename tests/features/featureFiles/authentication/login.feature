@regression
@login
Feature: Sign UP Test Cases

Background: in login page
  Given  I am on the login page

  @newUser
  Scenario: create new user
    When I enter new user email and verification code
    And I create new password "12345"
    And I create new profile data
    Then I should be on the "Welcome to Cuz Translation" page
    And I delete cookies

  @loginPositive @smoke
  Scenario: login with valid credentials as a user
    When I login with "user" email adress
    And I login with "user" password
    Then I should be able to see "Welcome to Cuz Translation" page title
    And I delete cookies

  @loginPositiveTranslator
  Scenario: login with valid credentials as a translator
    When I login with "translator" email adress
    And I login with "translator" password
    Then I should be able to see "Apply As A Translator" page title
    And I delete cookies

  @loginNegative @smoke
  Scenario: login with invalid password
    When I login with "user" email adress
    And I login with "invalid" password
    Then I should be able to see "Password or username is incorrect." error message
    And I delete cookies
 
  @invalidEmail
  Scenario: login with invalid email
    When I just login with "invalid" email adress 
    Then I should see invalid email error
    And I delete cookies

  @invalidSigUp
  Scenario: login with invalid sign up code
    When I login with "user" email adress
    And sign up with verification code
    When I enter a invalid sign up code
    Then I should be able to see "Verification code is incorrect." error message
    And I delete cookies 

  # @invalidPassword
  # Scenario: Setting A New Password With invalid Data
  #   When I login with "user" email adress
  #   And sign up with verification code 
  #   When I set a new password with invalid Data
  #   And Repeat the new password 
  #   Then I should see Repeat new password 

   
 


  
  
  
  
  
  
 
    
     
     








