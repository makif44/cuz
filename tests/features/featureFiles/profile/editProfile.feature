@regression
@smoke
@profile
Feature: Editing profile

    As a user I should be able to edit my Profile

    Background: I am on the profile page
        Given I am on the projects page
        And I click profile button

    @editProfile    
    Scenario: edit with valid data
        When I go to settings and "Edit Profile" section
        And I update profile data
        Then I should be able to see "The changes you made were saved!" success message

    @editInvalidData
    Scenario: edit profile page with invalid data
        When I go to settings and "Edit Profile" section
        And I enter invalid "asdf23" name, "rtr@#" last name, "12345" phone number, "athe44" city name 
        Then I should be able to see all profile warning messages