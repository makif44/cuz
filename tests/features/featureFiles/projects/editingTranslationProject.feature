@regression
@editProject
Feature: Editing the project

    As a user I should be able to edit an existing project

Background: I am on the project page
    Given I am on the login page
    When I login "user" email and "user" password

@editingProjectwithDocument 
Scenario: Editing translation project with editing document
    When I click plus symbol
    And  I select "translation" project
    And I upload documents "pdf1"
    And I select language from "Turkish" to "English"
    And I click continue
    And I select document type as a "Legal" and document details "contracts"
    And I click continue
    And I select certification type "Certificate of Translation (Free of Charge)"
    And I click continue
    And I type project title as a "test03" and select date as a "2021"-"Dec"-"30" "10":"00"
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I close the project
    And I find "test03" project and click on draft page
    And I click edit button
    And I delete uploaded document
    And I upload documents "pdf2"
    And I click continue
    And I click continue
    And I click continue
    And I click continue
    And I click continue
    And I select translator
    And I click continue
    And I check document details of project "pdfFilePath2"

@editingProjectwithLanguages
Scenario: Editing translation project with editing language
    When I click plus symbol
    And  I select "translation" project
    And I upload documents "pdf1"
    And I select language from "Turkish" to "English"
    And I click continue
    And I select document type as a "Legal" and document details "contracts"
    And I click continue
    And I select certification type "Certificate of Translation (Free of Charge)"
    And I click continue
    And I type project title as a "edit language" and select date as a "2021"-"Dec"-"30" "10":"00"
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I close the project
    And I find "edit language" project and click on draft page
    And I click edit button
    And I click continue
    And I select new languages from "English" to "Turkish"
    And I click continue
    And I click continue
    And I click continue
    And I click continue
    And I wait and click continue
    And I select a translator after editing
    And I click continue
    And I check language details of project "English" "Turkish"

@editingProjectwithDocumentType
Scenario: Editing translation project with editing document type and document details
    When I click plus symbol
    And  I select "translation" project
    And I upload documents "pdf1"
    And I select language from "Turkish" to "English"
    And I click continue
    And I select document type as a "Legal" and document details "contracts"
    And I click continue
    And I select certification type "Certificate of Translation (Free of Charge)"
    And I click continue
    And I type project title as a "edit document type" and select date as a "2021"-"Dec"-"30" "10":"00"
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I close the project
    And I find "edit document type" project and click on draft page
    And I click edit button
    And I click continue
    And I click continue
    And I select document type as a "Financial" and document details "Tax Forms & Returns"
    And I click continue
    And I click continue
    And I click continue
    And I click continue
    And I select translator
    And I click continue 
    And I check document type details of project "Financial" "Tax Forms & Returns>"

@editingProjectwithCertificationType
Scenario: Editing translation project with editing certification type
    When I click plus symbol
    And  I select "translation" project
    And I upload documents "pdf1"
    And I select language from "Turkish" to "English"
    And I click continue
    And I select document type as a "Legal" and document details "contracts"
    And I click continue
    And I select certification type "Certificate of Translation (Free of Charge)"
    And I click continue
    And I type project title as a "edit certification type" and select date as a "2021"-"Dec"-"30" "10":"00"
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I close the project
    And I find "edit certification type" project and click on draft page
    And I click edit button
    And I click continue
    And I click continue
    And I click continue
    And I select certification type "Affidavit of Translation" 
    And I click continue
    And I click continue
    And I click continue
    And I select translator
    And I click continue
    And I check certification type details of project "Affidavit of Translation"

@editingProjectwithProjectTitle
#############  The title could not be changed
Scenario: Editing translation project with project title and due date(ignore this manuel is ok)
    When I click plus symbol
    And  I select "translation" project
    And I upload documents "pdf1"
    And I select language from "Turkish" to "English"
    And I click continue
    And I select document type as a "Legal" and document details "contracts"
    And I click continue
    And I select certification type "Certificate of Translation (Free of Charge)"
    And I click continue
    And I type project title as a "edit project title" and select date as a "2021"-"Dec"-"30" "10":"00"
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I close the project
    And I find "edit project title" project and click on draft page
    And I click edit button
    And I click continue
    And I click continue
    And I click continue
    And I click continue
    And I edit project title as a "driver2" and edit date as a "2021"-"Dec"-"25" "10":"00"    
    And I wait and click continue
    And I select legal aid details "no"
    And I wait and click continue
    And I select translator
    And I wait and click continue
    And I check project title details of project "driver2" "25 Dec 2021 - 10:00 PM" 

@editingProjectwithHardCopyPossibleAdress
Scenario: Editing hard copy translation project with adress(not possible to possible adress)
    When I click plus symbol
    And  I select "translation" project
    And I upload documents "pdf1"
    And I select language from "Turkish" to "English"
    And I click continue
    And I select document type as a "Legal" and document details "contracts"
    And I click continue
    And I select certification type "Affidavit of Translation"
    And I click continue
    And I type project title as a "edit hard copy address" and select date as a "2021"-"Dec"-"30" "10":"00"
    And I select hard copy "Yes"
    And I click continue
    And I fill out "not possible" delivery adress
    And I click continue
    And I check country not available notification
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I close the project
    And I find "edit hard copy address" project and click on draft page
    And I click edit button
    And I click continue
    And I click continue
    And I click continue
    And I click continue
    And I select hard copy "Yes"
    And I click continue
    And I fill out "possible" delivery adress
    And I click continue
    And I select delivery option as "Express Cad"
    And I click continue
    And I click continue
    And I select translator
    And I click continue
    And I check express delivery fee
    And I check hard copy info as "Express Cad" and address

@editingProjectwithHardCopyNotPossibleAdress
Scenario: Editing hard copy translation project with adress(possible to not possible adress)
    When I click plus symbol
    And  I select "translation" project
    And I upload documents "pdf1"
    And I select language from "Turkish" to "English"
    And I click continue
    And I click continue
    And I select document type as a "Legal" and document details "contracts"
    And I click continue
    And I select certification type "Affidavit of Translation"
    And I click continue
    And I type project title as a "edit hard copy2" and select date as a "2021"-"August"-"30" "10":"00"
    And I select hard copy "Yes"
    And I click continue
    And I fill out "possible" delivery adress
    And I click continue
    And I select delivery option as "standard"
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I close the project
    And I find "edit hard copy2" project and click on draft page
    And I click edit button
    And I click continue
    And I click continue
    And I click continue
    And I click continue
    And I click continue
    And I fill out "not possible" delivery adress
    And I click continue
    And I check country not available notification
    And I click continue
    And I click continue
    And I select translator
    And I click continue
    And I check there is no delivery fee in project review
    And I check there is no hard copy field in project review

@editingProjectwithHardCopyDeliveryOption
Scenario: Editing hard copy translation project with adress(possible to not possible adress)
    When I click plus symbol
    And  I select "translation" project
    And I upload documents "pdf1"
    And I select language from "Turkish" to "English"
    And I click continue
    And I click continue
    And I select document type as a "Legal" and document details "contracts"
    And I click continue
    And I select certification type "Affidavit of Translation"
    And I click continue
    And I type project title as a "edit hard copy3" and select date as a "2021"-"August"-"30" "10":"00"
    And I select hard copy "Yes"
    And I click continue
    And I fill out "possible" delivery adress
    And I click continue
    And I select delivery option as "Express Cad"
    And I click continue
    And I select legal aid details "no"
    And I click continue
    And I close the project
    And I find "edit hard copy3" project and click on draft page
    And I click edit button
    And I click continue
    And I click continue
    And I click continue
    And I click continue
    And I select hard copy "Yes"
    And I click continue
    And I click continue
    And I select delivery option as "Standard"
    And I click continue
    And I click continue
    And I select translator
    And I wait and click continue
    And I check standard delivery fee
    And I check hard copy info as "Standard" and address

