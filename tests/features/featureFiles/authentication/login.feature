@regression
@login
Feature: Sign UP Test Cases

Background: in login page
  Given  I am on the login page

  @loginPositive @smoke
  Scenario: login with valid credentials as a user
    When I login with "user" email adress
    And I login with "user" password
    Then I should be able to see "Welcome to Cuz Translation" page title

  @loginPositive
  Scenario: login with valid credentials as a translator
    When I login with "translator" email adress
    And I login with "translator" password
    Then I should be able to see "Translator Registration" page title

  @loginNegative @smoke
  Scenario: login with invalid password
    When I login with "user" email adress
    And I login with "invalid" password
    Then I should be able to see "Password or email is wrong." message
 
  @invalidEmail
  Scenario: login with invalid email
    When I just login with "invalid" email adress 
    Then I should see invalid email error

  @invalidSigUp
  Scenario: login with invalid sign up code
    When I login with "user" email adress
    And sign up with verification code
    When I enter a invalid sign up code
    Then I should see that the code was wrong 

  # @invalidPassword
  # Scenario: Setting A New Password With invalid Data
  #   When I login with "user" email adress
  #   And sign up with verification code 
  #   When I set a new password with invalid Data
  #   And Repeat the new password 
  #   Then I should see Repeat new password 

   
 


  
  
  
  
  
  
 
    
     
     








