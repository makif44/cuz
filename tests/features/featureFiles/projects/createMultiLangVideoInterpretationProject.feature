@regression
@multiLangVideoInterpreationProject
Feature: Creating multi language Video interpretation project

    As a user I should be able to create a new multi language interpretation project

Background: I am on the project page
    Given I am on the login page
    When I login "user" email and "user" password

@multiLangVideoInterpreationProjectValidData @smoke
Scenario: Create multi language Video interpretation project with valid data
    When I click plus symbol
    And  I select "interpretation" project
    And I select languages from "English" to "Turkish" and "French (Canada)"
    And I click continue
    And I select appointment type as "Video" interpretation 
    And I select start date "2021"-"Dec"-"30" "10":"00" and end date "2021"-"Dec"-"30" "11":"00"
    And I click continue
    And I select video chat platform as "Skype" and contact details as "chat"
    And I enter project title as "test", appointment topic as "Legal" and appointment details as "Arbitrations"
    And I click continue
    And I select interpreter
    And I select second interpreter
    And I click continue
    And I check multiple language details of project "English" "Turkish" "French (Canada)"
    And I check video chat platform as "Skype" and contact details as "chat"
    And I check Appointment Topic and Appointment Details "Legal" "Arbitrations"
    And I check start date "30 Dec 2021 - 10:00 PM", end date "30 Dec 2021 - 11:00 PM" and duration "1" hour
    And I check project title "test"
    
@multiLangVideoInterpreationProjectDiffrentChatPlatforms   
Scenario Outline: Create multi language Video interpretation project with <Platform> platform
    When I click plus symbol
    And  I select "interpretation" project
    And I select languages from "English" to "Turkish" and "French (Canada)"
    And I click continue
    And I select appointment type as "Video" interpretation 
    And I select start date "2021"-"August"-"30" "10":"00" and end date "2021"-"August"-"30" "11":"00"
    And I click continue
    And I select video chat platform as "<Platform>" and contact details as "chat"
    And I enter project title as "test", appointment topic as "Legal" and appointment details as "Arbitration"
    And I click continue
    And I select interpreter
    And I select second interpreter
    And I click continue 
    And I check video chat platform as "<Platform>" and contact details as "chat"

@platforms
 Examples: of platforms
     |Platform       | 
     |Skype          | 
     |Google Hangouts|
    #  |Google Meet    |
    #  |Zoom           |
    #  |Quik           |
    #  |Aim            |

@multiLangVideoInterpreationProjectDiffrentAppoinmentDetails
Scenario Outline: Create multi language Video interpretation project with valid data <Appointment Topic> -- <Appointment Details>
    When I click plus symbol
    And  I select "interpretation" project
    And I select languages from "English" to "Turkish" and "French (Canada)"
    And I click continue
    And I select appointment type as "Video" interpretation 
    And I select start date "2021"-"August"-"30" "10":"00" and end date "2021"-"August"-"30" "11":"00"
    And I click continue
    And I select video chat platform as "Skype" and contact details as "chat"
    And I enter project title as "test", appointment topic as "<Appointment Topic>" and appointment details as "<Appointment Details>"
    And I click continue
    And I select interpreter
    And I select second interpreter
    And I click continue 
    And I check Appointment Topic and Appointment Details "<Appointment Topic>" "<Appointment Details>"

@insurance
Examples: Insurance
    | Appointment Topic | Appointment Details        | 
    | Insurance         | Conference Calls           | 
    # | Insurance         | Examinations Under Oath    |
    # | Insurance         | Settlement Discussions     |
    # | Insurance         | Statements of Claim        |
    # | Insurance         | Other                      |

# @legal    
# Examples: legal 
#     | Appointment Topic | Appointment Details           | 
#     | Legal             | Arbitration                   |
#     | Legal             | Civil Trials                  |
#     | Legal             | Cross-Examinations Discoveries|
#     | Legal             | Examinations Under Oath       |
#     | Legal             | Mediations                    |
#     | Legal             | Pre-Hearings                  |
#     | Legal             | Hearings                      |
#     | Legal             | Trials                        |
#     | Legal             | Small Claims Courts           |
#     | Legal             | Other                         |

# @medical
# Examples: medical
#     | Appointment Topic | Appointment Details            | 
#     | Medical           | Counselling Sessions           |
#     | Medical           | Defence Medicals               |    
#     | Medical           | In-Home Assessments            |
#     | Medical           | Independent Medical Exams (IME)|
#     | Medical           | Neuropsychological Exams       |
#     | Medical           | Nurse Visits                   |
#     | Medical           | Occupational Therapy Sessions  |
#     | Medical           | Orthopedic Appointments        |
#     | Medical           | Psychological Assessments      |
#     | Medical           | Other                          |

# @socialService
# Examples: Social Service
#     | Appointment Topic | Appointment Details |
#     | Social Service    | Access Visits       |
#     | Social Service    | Home Visits         |
#     | Social Service    | Family Meetings     |
#     | Social Service    | School Visits       |
#     | Social Service    | Other               |

# @corporate
# Examples: Corporate
#     | Appointment Topic | Appointment Details|
#     | Corporate         | Conferences        |
#     | Corporate         | Tours              |
#     | Corporate         | Training Sessions  |
#     | Corporate         | Other              |

# @general
# Examples: General
#     | Appointment Topic | Appointment Details |
#     | General           | Driver Licence Exam |
#     | General           | Other               |






