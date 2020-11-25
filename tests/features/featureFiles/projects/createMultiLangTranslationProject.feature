@regression
@multiLangTranslationProject
Feature: Creating multi language translation project
   
   As a user I should be able to create multi language document translation project

Background: I am on the project page
    Given I am on the projects page
    
@createMultiLanguageDocTranslationProject
Scenario: Creating a multi lang document translation project with valid data
    When I click plus symbol
    And  I select "translation" project
    And I upload documents "pdf1"
    And I select languages from "English" to "French (Canada)" and "Turkish"
    And I click continue
    And I select document type as a "Legal" and document details "Arbitrations"
    And I click continue
    And I select certification type "Certificate of Translation (Free of Charge)"
    And I click continue
    And I type project title as a "driver license" and select date as a "2021"-"Dec"-"30" "10":"00" 
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I select translator
    And I select second translator
    And I click continue
    And I check multiple language details of project "English" "Turkish" "French (Canada)"
    And I check document type details of project "Legal" "Contracts & Agreements"
    And I check certification type details of project "Certificate of Translation (Free of Charge)"
    And I check due date "30 Dec 2021 - 10:00"
    And I check project title "driver license"

@createMultiLanguageDocTranslationProjectDiffrentAppoinmentDetails  
Scenario Outline: Creating a multi lang document translation project with valid data <Document Type> -- <Document Details>
    When I click plus symbol
    And  I select "translation" project
    And I upload documents "pdf1"
    And I select languages from "English" to "French (Canada)" and "Turkish"
    And I click continue
    And I select document type as a "<Document Type>" and document details "<Document Details>"
    And I click continue
    And I select certification type "Certificate of Translation (Free of Charge)"
    And I click continue
    And I type project title as a "driver license" and select date as a "2021"-"August"-"30" "10":"00" 
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I select translator
    And I select second translator
    And I click continue
    And I check document type details of project "<Document Type>" "<Document Details>"
 

@legalMulTrans    
Examples: Legal 
    | Document Type     | Document Details              | 
    | Legal             | Contracts & Agreements        |
    | Legal             | Licenses & Permits            |
    | Legal             | Wills and Trusts              |
    | Legal             | certificates                  |
    | Legal             | Legal Letters                 |
    | Legal             | Notices & Notes               |
    | Legal             | Other                         |

# @financialMulTrans 
# Examples: Financial
#     | Document Type       | Document Details               | 
#     | Financial           | Tax Forms & Returns            |
#     | Financial           | Bank Statements                |    
#     | Financial           | Insurance Applications         |
#     | Financial           | Financial Reports & Summaries  |
#     | Financial           | Other                          |

# @technicalMulTrans 
# Examples: Technical
#     | Document Type     | Document Details         |
#     | technical         | User Manuals & Guides    |
#     | technical         | Troubleshooting Guides   |
#     | technical         | Technical Reports        |
#     | technical         | Instructional Documents  |
#     | technical         | Technical Specifications |
#     | technical         | White Papers             |
#     | technical         | Website Translation      |
#     | technical         | Other                    |

# @businessMulTrans 
# Examples: Business
#     | Document Type     | Document Details             |
#     | Business          | Business Letters & Proposals |
#     | Business          | Press Releases               |
#     | Business          | Commercial Invoices          |
#     | Business          | Purchase Orders              |
#     | Business          | Bill of Lading               |
#     | Business          | Business Presentations       |
#     | Business          | Other                        |

# @medicalMulTrans 
# Examples: Medical
#     | Document Type     | Document Details              |
#     | Medical           | Case Report Forms (CRF)       |
#     | Medical           | Patient Information           |
#     | Medical           | Clinical Trials               |
#     | Medical           | Patient Recruitment Materials |
#     | Medical           | Scientific Journal Articles   |
#     | Medical           | Toxicology Reports            |
#     | Medical           | Data Sheets                   |
#     | Medical           | Questionnaires                |
#     | Medical           | Other                         | 

# @atioMulTrans 
# Examples: ATIO Certified
#     | Document Type     | Document Details        |
#     | ATIO Certified    | Driver's Licence        |