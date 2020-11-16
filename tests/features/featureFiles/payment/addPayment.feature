@regression
@payment
Feature: Add payment

    As a user I should be able to pay with cards

    Background: I am on the Manage Payment page
        Given I am on the login page
        And I login "user" email and "user" password
        And I click profile button
        And I go to settings and "Manage Payment Methods" section

    @addVisa @smoke
    Scenario: Add Visa-Master card with valid data
        And I click Add New Payment Method button
        When I fill with valid "Visa-Master" card info
        Then I should be able to see "Thank you! Your payment method has been added!" green wrapper notification

    @addAmericanExp
    Scenario: Add AmericanExp card with valid data
        And I click Add New Payment Method button
        When I fill with valid "AmericanExp" card info
        Then I should be able to see "Thank you! Your payment method has been added!" green wrapper notification

    @addInvalidCardData @smoke
    Scenario: Add card with invalid data
        And I click Add New Payment Method button
        When I fill with invalid card info
        Then I should be able to see all card warning messages

    @addWrongNumber   
    Scenario: Add credit card with wrong number
        And I click Add New Payment Method button
        When I fill with wrong card number
        Then I should be able to see wrong card number notation

    
    @setAsADefault   
    Scenario: Set as a default credit card
        And I click Add New Payment Method button
        When I fill with valid "Visa-Master" card info
        And I set as a default credit card
        Then I should be able to see "Your default payment method is updated." green wrapper notification

    @deleteCreditCard @smoke  
    Scenario: Delete credit card
        When I delete a payment method 
        Then I should be able to see "Payment method is deleted." or "There has to be at least one payment method." notification
