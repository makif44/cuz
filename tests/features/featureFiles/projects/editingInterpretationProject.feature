@regression
@editingInterpretationProject
Feature: editing interpretation project

    As a user I should be able to edit an interpretation project

Background: I am on the project page
    Given I am on the projects page

@editingOnSiteInterpreationProject 
Scenario Outline: Editing OnSite interpretation project with Editing language pair, Interpretation Details, Location
     When I click plus symbol
    And  I select "interpretation" project
    And I select language from "Turkish" to "English"
    And I click continue
    And I select appointment type as "On-site" interpretation 
    And I select start date "2021"-"Nov"-"26" "09":"00" and end date "2021"-"Nov"-"26" "11":"00"
    And I click continue
    And I select location as "Mississauga, Ontario, Canada" and Dress Code as "Casual"
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I enter project title as "<title>", appointment topic as "Legal" and appointment details as "Arbitration"
    And I click continue
    And I close the project
    And I find "<title>" project and click on draft page
    And I click edit button
    And I select new languages from "English" to "French (Canada)"
    And I click continue
    And I edit start date "2021"-"Dec"-"27" "09":"00" and end date "2021"-"Dec"-"27" "11":"00"
    And I click continue
    And I select location as "Art Gallery of Ontario, 317 Dundas St W, Toronto, Ontario M5T 1G4, Canada" and Dress Code as "Formal"
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I enter project title as "edited test", appointment topic as "Insurance" and appointment details as "Conference Calls"
    And I click continue
    And I select interpreter   
    And I click continue
    And I check language details of project "English" "French (Canada)"
    And I check appointment location "Art Gallery of Ontario, 317 Dundas St W, Toronto, Ontario M5T 1G4, Canada"
    And I check Appointment Topic and Appointment Details "Insurance" "Conference Calls"
    And I check project title "edited test"
    
    Examples: edit interpretation project
        | title     | 
        | edit001    | 

@editingOnSiteInterpreationProjectDressCodeAndDates 
Scenario: Editing OnSite interpretation project with dress code, dates
    When I click plus symbol
    And  I select "interpretation" project
    And I select language from "Turkish" to "English"
    And I click continue
    And I select appointment type as "On-site" interpretation 
    And I select start date "2021"-"December"-"27" "09":"00" and end date "2021"-"December"-"27" "11":"00"
    And I click continue
    And I select location as "Mississauga, Ontario, Canada" and Dress Code as "Casual"
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I enter project title as "edit on side", appointment topic as "Legal" and appointment details as "Arbitration"
    And I click continue
    And I close the project
    And I find "edit on side" project and click on draft page
    And I click edit button
    And I click continue
    And I edit start date "2021"-"Dec"-"28" "07":"00" and end date "2021"-"Dec"-"28" "11":"00"
    And I click continue
    And I select location as "Art Gallery of Ontario, 317 Dundas St W, Toronto, Ontario M5T 1G4, Canada" and Dress Code as "Formal"
    And I click continue
    And I click continue
    And I click continue
    And I select interpreter   
    And I click continue
    And I check start date "28 Dec 2021 - 7:00 PM", end date "28 Dec 2021 - 11:00 PM" and duration "4" hour
    And I check the dress code "Formal"
    

@editingOnSiteInterpreationProjectLegalAid 
Scenario: Editing OnSite interpretation project with Legal Aid Number
    When I click plus symbol
    And  I select "interpretation" project
    And I select language from "Turkish" to "English"
    And I click continue
    And I select appointment type as "On-site" interpretation 
    And I select start date "2021"-"December"-"26" "09":"00" and end date "2021"-"December"-"26" "11":"00"
    And I click continue
    And I select location as "Mississauga, Ontario, Canada" and Dress Code as "Casual"
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I enter project title as "edit on side", appointment topic as "Legal" and appointment details as "Arbitration"
    And I click continue
    And I close the project
    And I find "edit on side" project and click on draft page
    And I click edit button
    And I select new languages from "English" to "French (Canada)"
    And I click continue
    And I click continue
    And I select location as "Art Gallery of Ontario, 317 Dundas St W, Toronto, Ontario M5T 1G4, Canada" and Dress Code as "Formal"
    And I click continue
    And I select legal aid details "yes"
    And I enter "5G3FN" legal aid number and "2021"-"December"-"26" date
    And I click continue
    And I enter project title as "edited test", appointment topic as "Insurance" and appointment details as "Conference Calls"
    And I click continue
    And I select interpreter   
    And I click continue
    And I check total price "50.5 CAD"

@editingVideoInterpreationProjectWithProjectDetails
Scenario: Editing Video interpretation project with Editing language pair, Interpretation Details, Video Call Details, Appointment Type
    When I click plus symbol
    And  I select "interpretation" project
    And I select language from "Turkish" to "English"
    And I click continue
    And I select appointment type as "Video" interpretation
    And I select start date "2021"-"Dec"-"20" "10":"00" and end date "2021"-"Dec"-"20" "11":"00"
    And I click continue
    And I select video chat platform as "Skype" and contact details as "chat"
    And I enter project title as "edit video project", appointment topic as "Legal" and appointment details as "Arbitration"
    And I click continue
    And I close the project
    And I find "edit video project" project and click on draft page
    And I click edit button
    And I select new languages from "English" to "French (Canada)"
    And I click continue
    And I edit start date "2021"-"Dec"-"25" "07":"00" and end date "2021"-"Dec"-"25" "11":"00"
    And I click continue
    And I select video chat platform as "Zoom" and contact details as "chat001"
    And I enter project title as "edited test", appointment topic as "Insurance" and appointment details as "Conference Calls"
    And I click continue
    And I select interpreter   
    And I click continue
    And I check language details of project "English" "French (Canada)"
    And I check video chat platform as "Zoom" and contact details as "chat001"
    And I check Appointment Topic and Appointment Details "Insurance" "Conference Calls"
    And I check start date "25 Dec 2021 - 7:00 PM", end date "25 Dec 2021 - 11:00 PM" and duration "4" hour
    And I check project title "edited test"

