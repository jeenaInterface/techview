 Feature: Verify whether the contact is updated  properly when the APM checkbox is disabled.


@Oneview
  Scenario: Select scheduled work orderID from Oneview
    Given User navigates to the Oneview application
    Given User enter the username
    Given User enter the password
    When User click on the login button
    When Change the Company
    When Click on service trips
    When Filter scheduled work orders
    When Select first work order
    
@APMDisEnabled1
  Scenario: Analyze the work order details in OneView
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
