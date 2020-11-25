@regression
@interpretationProject
Feature: Creating new interpretation project

    As a user I should be able to create a new interpretation project

Background: I am on the project page
    Given I am on the projects page

@createInterpretationVideoProject @smoke
Scenario: Create interpretation project with valid data
    When I click plus symbol
    And I select "interpretation" project
    And I select language from "Turkish" to "English"
    And I click continue
    And I select appointment type as "Video" interpretation
    And I select start date "2021"-"Dec"-"30" "10":"00" and end date "2021"-"Dec"-"30" "11":"00"
    And I click continue
    And I select video chat platform as "Skype" and contact details as "chat"
    And I enter project title as "test01", appointment topic as "Legal" and appointment details as "Arbitration"
    And I click continue
    And I select interpreter
    And I click continue
    And I check language details of project "Turkish" "English"
    And I check video chat platform as "Skype" and contact details as "chat"
    And I check Appointment Topic and Appointment Details "Legal" "Arbitration"
    And I check start date "30 Dec 2021 - 10:00 PM", end date "30 Dec 2021 - 11:00 PM" and duration "1" hour
    And I check project title "test01"
    And I click continue
    And I enter "valid" referal code and select payment method
    Then I should able to see project offer sent message

@createInterpreationOnSiteProject @smoke
Scenario: Create OnSite interpretation project with valid data
    When I click plus symbol
    And  I select "interpretation" project
    And I select language from "English" to "Turkish"
    And I click continue
    And I select appointment type as "On-site" interpretation 
    And I select start date "2021"-"Dec"-"30" "09":"00" and end date "2021"-"Dec"-"30" "11":"00"
    And I click continue
    And I select location as "Mississauga, Ontario, Canada" and Dress Code as "Casual"    
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I enter project title as "test02", appointment topic as "Legal" and appointment details as "Arbitration"
    And I click continue
    And I select interpreter
    And I click continue
    And I check language details of project "English" "Turkish"
    And I check appointment location "Mississauga, Ontario, Canada"
    And I check Appointment Topic and Appointment Details "Legal" "Arbitrations"
    And I check project title "test02"

@createInterpretationProjectWithInvalidDuration
Scenario: Create interpretation project with invalid duration
    When I click plus symbol
    And  I select "interpretation" project
    And I select language from "Turkish" to "English"
    And I click continue
    And I select appointment type as "On-site" interpretation
    And I select start date "2021"-"Dec"-"30" "10":"00" and end date "2021"-"Dec"-"30" "11":"00"
    Then I should be able to see appointment duration notice

@createInterpretationProjectWithInvalidTitle
Scenario: Create interpretation project with invalid title
    When I click plus symbol
    And  I select "interpretation" project
    And I select language from "Turkish" to "English"
    And I click continue
    And I select appointment type as "Video" interpretation
    And I select start date "2021"-"Dec"-"30" "10":"00" and end date "2021"-"Dec"-"30" "11":"00"
    And I click continue
    And I select video chat platform as "Skype" and contact details as "chat"
    And I enter project title as " ", appointment topic as "Legal" and appointment details as "Arbitration"
    Then I should be able to see title is required message