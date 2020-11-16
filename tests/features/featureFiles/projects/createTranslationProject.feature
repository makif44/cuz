@regression
@project
Feature: Creating new trasnlation project

    As a user I should be able to create new translation project

Background: I am on the project page
    Given I am on the login page
    When I login "user" email and "user" password

@createProject @smoke
Scenario: Create a document translation with valid data
    When I click plus symbol
    And  I select "translation" project
    And I upload documents "pdf1"
    And I select language from "Turkish" to "English"
    And I click continue
    And I select document type as a "Legal" and document details "contracts"
    And I click continue
    And I select certification type "Certificate of Translation (Free of Charge)"
    And I click continue
    And I type project title as a "driver license" and select date as a "2021"-"August"-"30" "10":"00" 
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I select translator
    And I click continue
    And I check details of project
    And I enter "valid" referal code and select payment method
    Then I should able to see project offer sent message

@createProjectWithInvalidUpload
Scenario: Create a document translation with invalid document
    When I click plus symbol
    And I select "translation" project
    And I upload invalid document
    Then I should be able to see warning notification "Warning: Unsupported file types can not be added the upload queue."

@createProjectWithInvalidTitle
Scenario: Create a document translation with invalid title
    When I click plus symbol
    And  I select "translation" project
    And I upload documents "pdf1"
    And I select language from "Turkish" to "English"
    And I click continue
    And I select document type as a "Legal" and document details "contracts"
    And I click continue
    And I select certification type "Certificate of Translation (Free of Charge)"
    And I click continue
    And I type project title as a " " and select date as a "2021"-"September"-"30" "10":"00"
    Then I should be able to see title is required message
@usedLAONumber
Scenario: Create a document translation project with used LAO number
    When I click plus symbol
    And  I select "translation" project
    And I upload documents "pdf1"
    And I select language from "Turkish" to "English"
    And I click continue
    And I select document type as a "Legal" and document details "contracts"
    And I click continue
    And I select certification type "Certificate of Translation (Free of Charge)"
    And I click continue
    And I type project title as a "driver license" and select date as a "2021"-"August"-"30" "10":"00" 
    And I click continue
    And I select legal aid details "yes"
    And I enter "1312321" legal aid number and "2021"-"December"-"30" date
    Then I should be able to see certification number already exist message

@invalidReferalCode @smoke
Scenario: Creating a document translation project with invalid referal and promo code
    When I click plus symbol
    And  I select "translation" project
    And I upload documents "pdf1"
    And I select language from "Turkish" to "English"
    And I click continue
    And I select document type as a "Legal" and document details "contracts"
    And I click continue
    And I select certification type "Certificate of Translation (Free of Charge)"
    And I click continue
    And I type project title as a "driver license" and select date as a "2021"-"August"-"30" "10":"00" 
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I select translator
    And I click continue
    And I check details of project 
    And I enter "invalid" referal code and select payment method
    Then I should be able to see code can not be found message

@deleteProject @smoke
Scenario: delete the first project
    When I select the project
    And I click delete button
    Then I should be on the "Welcome to Cuz Translation" page

@createTranslationProjectWithHardCopy @smoke
Scenario: Create a hard copy document translation with valid data (standart delivery)
    When I click plus symbol
    And  I select "translation" project
    And I upload documents "pdf1"
    And I select language from "Turkish" to "English"
    And I click continue
    And I select document type as a "Legal" and document details "contracts"
    And I click continue
    And I select certification type "Affidavit of Translation"
    And I click continue
    And I type project title as a "driver license" and select date as a "2021"-"August"-"30" "10":"00"
    And I select hard copy "Yes"
    And I click continue
    And I fill out "possible" delivery adress
    And I click continue
    And I select delivery option as "standard"
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I select translator
    And I click continue
    And I check standard delivery fee
    And I check hard copy info as "Standard" and address
   
@createTranslationProjectWithHardCopyExpress
Scenario: Create a hard copy document translation with valid data (Express Delivery)
    When I click plus symbol
    And  I select "translation" project
    And I upload documents "pdf1"
    And I select language from "Turkish" to "English"
    And I click continue
    And I select document type as a "Legal" and document details "contracts"
    And I click continue
    And I select certification type "Affidavit of Translation"
    And I click continue
    And I type project title as a "driver license" and select date as a "2021"-"August"-"30" "10":"00"
    And I select hard copy "Yes"
    And I click continue
    And I fill out "possible" delivery adress
    And I click continue
    And I select delivery option as "Express Cad"
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I select translator
    And I click continue
    And I check express delivery fee
    And I check hard copy info as "Express Cad" and address
    
@createTranslationProjectWithHardCopyUnavailableCountry
Scenario: Create a hard copy document translation with invalid data (Delivery not possible)
    When I click plus symbol
    And  I select "translation" project
    And I upload documents "pdf1"
    And I select language from "Turkish" to "English"
    And I click continue
    And I select document type as a "Legal" and document details "contracts"
    And I click continue
    And I select certification type "Affidavit of Translation"
    And I click continue
    And I type project title as a "test 123" and select date as a "2021"-"August"-"30" "10":"00"
    And I select hard copy "Yes"
    And I click continue
    And I fill out "not possible" delivery adress
    And I click continue
    And I check country not available notification
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I select translator
    And I click continue
    And I check there is no delivery fee in project review
    And I check there is no hard copy field in project review
   
