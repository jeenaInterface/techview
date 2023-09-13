 Feature: Verify whether the contact is updated  properly when the APM checkbox is disabled.


@APMDisEnabled
  Scenario: Uncheck the apm status checkbox in oracle
    When User navigates to the oracle application
    When User enter the username
    When User enter the password
    When User click on the login button
    When Search Dollar General Dg23781
    When Click on Profile Tab
    When Uncheck on APM checkbox
    When Click on Save
    
@APMDisEnabled1
  Scenario: UPDATE A CONTACT IN DG ALARM PORTAL (DG-TEST2)
    When User navigates to the dgAlarmPortal application
    When Search a site
    When Click on Alarm Panel Code Change Request
    When Enter Passcode 
    When Click on submit
    When Edit a contact and submit
    When Verify success message

@APMDisEnabled
  Scenario: Check whether a SR is created in oracle
    When User navigates to the oracle application
    When User enter the username
    When User enter the password
    When User click on the login button
    When Search Dollar General Dg23781
    When Click on Service Request Tab
    When Check whether the SR is created
