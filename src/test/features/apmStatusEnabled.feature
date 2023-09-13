Feature: Verify if the contact update feature functions correctly when the APM checkbox is enabled.

  @APMEnabled
  Scenario: Enable APM checkbox in oracle
    When User navigates to the oracle application
    When User enter the username 
    When User enter the password
    When User click on the login button
    When Search Dollar General Dg23781
    When Click on Profile Tab
    When Click on APM checkbox
    When Click on Save
    
@APMEnabled
  Scenario:UPDATE A CONTACT IN DG ALARM PORTAL (DG-TEST2)
    When User navigates to the dgAlarmPortal application
    When Search a site
    When Click on Alarm Panel Code Change Request
    When Enter Passcode 
    When Click on submit
    When Edit a contact and submit
    When Verify success message

 @APMEnabled
  Scenario: Check case is created in apm
    When User navigates to the APM application
    Given User enter the username in apm
    Given User enter the password in APM
    When User clicks on the login button in APM
    When Click on queqe menu
    When Verify the contact details are inserted
