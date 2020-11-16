@regression
@multiLangOnSiteInterpreationProject
Feature: Creating OnSite interpretation project

    As a user I should be able to create a new multi language On-Site interpretation project

Background: I am on the project page
    Given I am on the login page
    When I login "user" email and "user" password

@multiLangOnSiteInterpreationProjectValidData @smoke
Scenario: Create OnSite interpretation project with valid data
    When I click plus symbol
    And  I select "interpretation" project
    And I select languages from "English" to "Turkish" and "French (Canada)"
    And I click continue
    And I select appointment type as "On-site" interpretation 
    And I select start date "2021"-"Dec"-"30" "09":"00" and end date "2021"-"Dec"-"30" "11":"00"
    And I click continue
    And I select location as "Mississauga, Ontario, Canada" and Dress Code as "Casual"    
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I enter project title as "test", appointment topic as "Legal" and appointment details as "Arbitration"
    And I click continue
    And I select interpreter
    And I select second interpreter
    And I click continue
    And I check multiple language details of project "English" "Turkish" "French (Canada)"
    And I check appointment location "Mississauga, Ontario, Canada"
    And I check Appointment Topic and Appointment Details "Legal" "Arbitrations"
    And I check project title "test"
   
@multiLangOnSiteInterpreationProjectDiffrentDress-Code  
Scenario Outline: Create OnSite interpretation project with <Dress-Code> dress code
    When I click plus symbol
    And  I select "interpretation" project
    And I select languages from "English" to "Arabic" and "French (Canada)"
    And I click continue
    And I select appointment type as "On-site" interpretation 
    And I select start date "2021"-"Dec"-"30" "09":"00" and end date "2021"-"Dec"-"30" "11":"00"
    And I click continue
    And I select location as "Mississauga, Ontario, Canada" and Dress Code as "<Dress-Code>"
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I enter project title as "test", appointment topic as "Legal" and appointment details as "Arbitration"
    And I click continue
    And I select interpreter
    And I select second interpreter
    And I click continue
    And I check the dress code "<Dress-Code>"
    
@dress-Codes
 Examples: of Dres
     |Dress-Code     | 
     |Casual         | 
    #  |Formal         |
    #  |Business Casual|

@multiLangOnSiteInterpreationProjectDiffrentAppoinmentDetails
Scenario Outline: Create OnSite interpretation project with valid data <Appointment Topic> -- <Appointment Details>
    When I click plus symbol
    And  I select "interpretation" project
    And I select languages from "English" to "Arabic" and "French (Canada)"
    And I click continue
    And I select appointment type as "On-site" interpretation 
    And I select start date "2021"-"Dec"-"30" "09":"00" and end date "2021"-"Dec"-"30" "11":"00"
    And I click continue
    And I select location as "Mississauga, Ontario, Canada" and Dress Code as "Casual"
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I enter project title as "test", appointment topic as "<Appointment Topic>" and appointment details as "<Appointment Details>"
    And I click continue
    And I select interpreter
    And I select second interpreter
    And I click continue
    And I check Appointment Topic and Appointment Details "<Appointment Topic>" "<Appointment Details>"

@OnSiteInsurance
Examples: of Insurance
    | Appointment Topic | Appointment Details        | 
    | Insurance         | Conference Calls           | 
    | Insurance         | Examinations Under Oath    |
    | Insurance         | Settlement Discussions     |
    | Insurance         | Statements of Claim        |
    | Insurance         | Other                      |

# @OnSiteLegal    
# Examples: of legal 
#     | Appointment Topic | Appointment Details           | 
#     | Legal             | Arbitrations                  |
#     | Legal             | Civil Trials                  |
#     | Legal             | Cross-Examinations Discoveries|
#     | Legal             | Examinations Under Oath       |
#     | Legal             | Mediations                    |
#     | Legal             | Pre-Hearings                  |
#     | Legal             | Hearings                      |
#     | Legal             | Trials                        |
#     | Legal             | Small Claims Courts           |
#     | Legal             | Other                         |

# @OnSiteMedical
# Examples: of medical
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

# @OnSiteSocialService
# Examples: of Social Service
#     | Appointment Topic | Appointment Details |
#     | Social Service    | Access Visits       |
#     | Social Service    | Home Visits         |
#     | Social Service    | Family Meetings     |
#     | Social Service    | School Visits       |
#     | Social Service    | Other               |

# @OnSiteCorporate
# Examples: of Corporate
#     | Appointment Topic | Appointment Details|
#     | Corporate         | Conferences        |
#     | Corporate         | Tours              |
#     | Corporate         | Training Sessions  |
#     | Corporate         | Other              |

# @OnSiteGeneral
# Examples: General
#     | Appointment Topic | Appointment Details |
#     | General           | Driver Licence Exam |
#     | General           | Other               |    